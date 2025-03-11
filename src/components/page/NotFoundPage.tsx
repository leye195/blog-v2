import Link from 'next/link';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import { paletteColor } from '@/styles/variable';

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
      <Button
        className="text-lg lg:text-xl"
        padding="8px 12px"
        bgColor={paletteColor.dgray400}
        hoverBgColor={paletteColor.dgray400}
        color={paletteColor.white}
        borderRadius="8px"
      >
        <Link href="/" replace>
          Return to Home
        </Link>
      </Button>
    </Flex>
  );
};

export default NotFoundPage;
