/** @type {import('next').NextConfig} */
const nextConfig = {
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
