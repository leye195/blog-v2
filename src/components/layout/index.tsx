"use client";

import Flex from "@/components/common/Flex";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex className="w-full min-h-[100vh]" $direction="column">
      <Header />
      <main className="w-full max-w-[1600px] min-h-[calc(100vh-240px)] mx-auto mb-[4rem] pt-[4rem]">
        {children}
      </main>
      <Footer />
    </Flex>
  );
};

export default Layout;
