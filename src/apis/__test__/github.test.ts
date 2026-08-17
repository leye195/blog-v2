import { getGithubStats } from '@/apis/github';

const makeWeeks = (count: number) =>
  Array.from({ length: count }, (_, weekIndex) => ({
    contributionDays: Array.from({ length: 7 }, (_, dayIndex) => ({
      contributionCount: (weekIndex + dayIndex) % 3,
      date: new Date(Date.UTC(2025, 0, 5 + weekIndex * 7 + dayIndex)).toISOString().slice(0, 10),
    })),
  }));

const mockFetchOnce = (payload: unknown) => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      text: async () => JSON.stringify(payload),
      json: async () => payload,
    }),
  );
};

const silenceWarn = () => vi.spyOn(console, 'warn').mockImplementation(() => {});

describe('getGithubStats', () => {
  let warnSpy: ReturnType<typeof silenceWarn>;

  beforeEach(() => {
    vi.stubEnv('GITHUB_TOKEN', 'test-token');
    warnSpy = silenceWarn();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  // GitHub answers 200 with partial data: a FORBIDDEN error on the non-nullable
  // `stargazers` field null-propagates up and nulls out every repositories node.
  it('keeps contribution data when GitHub forbids the stargazers field', async () => {
    mockFetchOnce({
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: { totalContributions: 1234, weeks: makeWeeks(53) },
          },
          repositories: { nodes: [null, null, null] },
        },
      },
      errors: [
        {
          type: 'FORBIDDEN',
          path: ['user', 'repositories', 'nodes', 0, 'stargazers'],
          message: 'Resource not accessible by personal access token',
        },
      ],
    });

    const stats = await getGithubStats();

    expect(stats).not.toBeNull();
    expect(stats?.totalStars).toBe(0);
    expect(stats?.totalCommits).toBe(1234);
    expect(stats?.contributionGraph).toHaveLength(52);
  });

  it('warns with the GraphQL error message when the response is partial', async () => {
    mockFetchOnce({
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: { totalContributions: 1, weeks: makeWeeks(52) },
          },
          repositories: { nodes: [null] },
        },
      },
      errors: [
        {
          type: 'FORBIDDEN',
          path: ['user', 'repositories', 'nodes', 0, 'stargazers'],
          message: 'Resource not accessible by personal access token',
        },
      ],
    });

    await getGithubStats();

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Resource not accessible by personal access token'),
    );
  });

  // 위 널 가드가 정상 응답의 별 개수까지 0으로 뭉개지 않는지 지킨다.
  it('sums stars across accessible repositories', async () => {
    mockFetchOnce({
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: { totalContributions: 10, weeks: makeWeeks(52) },
          },
          repositories: {
            nodes: [{ stargazers: { totalCount: 3 } }, { stargazers: { totalCount: 5 } }],
          },
        },
      },
    });

    const stats = await getGithubStats();

    expect(stats?.totalStars).toBe(8);
  });
});
