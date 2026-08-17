/** @type {import('next').NextConfig} */
const nextConfig = {
  // next dev가 루트에 AGENTS.md / CLAUDE.md를 매번 다시 만드는 것을 끈다.
  // 이 저장소의 에이전트 지침은 .claude/ 아래에서 관리한다.
  agentRules: false,
  // 상위 디렉터리의 lock 파일 때문에 Turbopack이 workspace root를 잘못 추론하는 것을 막는다.
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
