import { Email, GitHub, RSS } from "@/components/icon";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-3 w-[inherit] border-t-2 border-black-50 py-8 bg-gray-200 ">
      <div className="flex gap-[10px] lg:text-[32px] text-[24px]">
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
      <p className="lg:text-xl text-lg">
        © {new Date().getFullYear()} dan.dev.log, All right reserved.
      </p>
      <p className="lg:text-lg text-base">Built with NextJS</p>
    </div>
  );
};

export default Footer;
