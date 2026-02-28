import { getGithubStats } from '@/apis/github';
import Avatar from '@/components/common/Avatar';
import HeroContributionGraph from './HeroContributionGraph';

const PROFILE_AVATAR = '/assets/avatar.gif';

export default async function Hero() {
  const stats = await getGithubStats();

  return (
    <div className="relative hidden w-full flex-col items-center md:flex">
      {/* Background Section: Correct Colors from Figma */}
      <div className="relative flex h-72 w-screen flex-col items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50 px-4 pb-px">
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 -bottom-px top-1/2 bg-gradient-to-b from-transparent to-white" />
        <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:gap-0">
          <div className="hidden flex-1 justify-center md:flex">
            <HeroContributionGraph graphPattern={stats?.contributionGraph} />
          </div>
        </div>
      </div>

      {/* Avatar Container */}
      <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center">
        <div className="flex size-32 items-center justify-center rounded-full  shadow-xl">
          <Avatar
            className="h-full w-full rounded-full"
            size={128}
            src={PROFILE_AVATAR}
            priority
          />
        </div>
      </div>
    </div>
  );
}
