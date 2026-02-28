export type GithubStats = {
  totalStars: number;
  totalCommits: number;
  currentStreak: number;
  contributionGraph: number[][]; // 52 columns, 7 rows (0-4 levels)
};

export async function getGithubStats(): Promise<GithubStats | null> {
  const token = process.env.GITHUB_TOKEN;
  // Fallback to leye195 if no username is provided
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'leye195';

  if (!token) {
    console.warn('GITHUB_TOKEN is missing in .env.local. Falling back to null.');
    return null;
  }

  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          nodes {
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { userName: username } }),
      // Cache the result for 1 hour to prevent rate limiting
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error('GitHub API failed to fetch:', await res.text());
      return null;
    }

    const json = await res.json();
    const user = json.data?.user;
    if (!user) return null;

    // 1. Calculate Total Stars (from owned, non-fork repos up to 100)
    const repos = user.repositories.nodes;
    const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers.totalCount, 0);

    // 2. Contributions
    const calendar = user.contributionsCollection.contributionCalendar;
    const totalCommits = calendar.totalContributions;

    // 3. Current Streak
    let currentStreak = 0;
    const weeks = calendar.weeks;
    const days = weeks.flatMap((w: any) => w.contributionDays).reverse(); // latest first

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      if (day.contributionCount > 0) {
        currentStreak++;
      } else {
        // If today is 0, we shouldn't break the streak yet, only if yesterday is also 0
        if (i === 0) {
          continue;
        }
        break;
      }
    }

    // 4. Contribution Graph Pattern (level 0 to 4)
    // We need 52 columns. Sometimes weeks has 53 weeks. We take the last 52.
    const last52Weeks = weeks.slice(-52);
    const contributionGraph = last52Weeks.map((week: any) => {
      const column = new Array(7).fill(0); // 0 (Sun) to 6 (Sat)
      week.contributionDays.forEach((day: any) => {
        const date = new Date(day.date);
        const dayOfWeek = date.getDay();
        
        let level = 0;
        const count = day.contributionCount;
        if (count > 0) level = 1;
        if (count >= 3) level = 2;
        if (count >= 5) level = 3;
        if (count >= 10) level = 4;
        
        column[dayOfWeek] = level;
      });
      return column;
    });

    return {
      totalStars,
      totalCommits,
      currentStreak,
      contributionGraph,
    };
  } catch (e) {
    console.error('Error fetching GitHub stats:', e);
    return null;
  }
}
