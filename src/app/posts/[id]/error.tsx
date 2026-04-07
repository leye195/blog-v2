'use client';

import Link from 'next/link';

import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';

export default function PostError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Flex
      className="min-h-[calc(100vh-300px)]"
      $direction="column"
      $justifyContent="center"
      $alignItems="center"
      $gap="20px"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl font-bold text-white">
        !
      </div>
      <Flex $direction="column" $alignItems="center" $gap="8px">
        <h1 className="my-0 text-2xl font-bold lg:text-3xl">문제가 발생했습니다</h1>
        <p className="text-dgray-400 m-0 text-center text-sm lg:text-base">
          포스트를 불러오는 중 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
      </Flex>
      <Flex className="mt-2" $gap="12px">
        <Button
          className="rounded-[8px] border border-current bg-transparent px-[20px] py-[10px] text-sm hover:bg-dgray-400 hover:text-white lg:text-base"
          onClick={reset}
        >
          다시 시도
        </Button>
        <Button className="bg-dgray-400 rounded-[8px] px-[20px] py-[10px] text-sm text-white hover:bg-dgray-500 lg:text-base">
          <Link href="/" replace>
            홈으로
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}
