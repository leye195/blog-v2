import Image from "next/image";

import Flex from "@/components/common/Flex";
import { cn } from "@/libs/utils";

type AvatarProps = {
  size: number;
  src: string;
  className?: string;
  priority?: boolean;
};

const Avatar = ({ className, size, src, priority }: AvatarProps) => {
  return (
    <Flex
      className={cn(
        "rounded-full",
        "bg-white",
        "overflow-hidden",
        className ?? ""
      )}
      $alignItems="center"
      $justifyContent="center"
    >
      <Image src={src} alt="" width={size} height={size} priority={priority} />
    </Flex>
  );
};

export default Avatar;
