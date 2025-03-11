import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-[100vh] w-full flex-col">
      <Header />
      <main className="mx-auto mb-[4rem] min-h-[calc(100vh-240px)] w-full max-w-[1600px] pt-[4rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
