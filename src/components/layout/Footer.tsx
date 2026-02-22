import { Email, GitHub, RSS } from '@/components/icon';

const Footer = () => {
  return (
    <div className="border-black-50 flex w-[inherit] flex-col items-center justify-center gap-3 border-t-1 border-t-white-75 bg-blue-50 py-8 text-white-50">
      <div className="flex gap-[10px] text-[24px] lg:text-[32px]">
        <a href="https://github.com/leye195" target="_blank" rel="noopener">
          <GitHub />
        </a>
        <a href="mailto:leye195@naver.com">
          <Email />
        </a>
        <a href="/rss.xml" target="_blank" rel="noopener">
          <RSS />
        </a>
      </div>
      <p className="text-lg lg:text-xl">
        © {new Date().getFullYear()} dan.dev.log, All right reserved.
      </p>
      <p className="text-base lg:text-lg">Built with NextJS</p>
    </div>
  );
};

export default Footer;
