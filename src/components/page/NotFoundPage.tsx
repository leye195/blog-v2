import Link from 'next/link';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';

const NotFoundPage = () => {
  return (
    <Flex
      className="min-h-[calc(100vh-300px)]"
      $direction="column"
      $justifyContent="center"
      $alignItems="center"
      $gap="20px"
    >
      <h1 className="my-0 text-6xl lg:text-8xl">
        <b>404</b>
      </h1>
      <p className="text-xl lg:text-3xl">This page could not be found.</p>
      <Button className="bg-dgray-400 hover:bg-dgray-400 rounded-[8px] px-[12px] py-[8px] text-lg text-white lg:text-xl">
        <Link href="/" replace>
          Return to Home
        </Link>
      </Button>
    </Flex>
  );
};

export default NotFoundPage;
