'use client';

import { motion } from 'framer-motion';
import Flex from '@/components/common/Flex';
import { cn } from '@/libs/utils';

const COLORS = [
  'bg-[#ebedf0]', // 0: empty
  'bg-[#9be9a8]', // 1: light
  'bg-[#40c463]', // 2: medium
  'bg-[#30a14e]', // 3: dark
  'bg-[#216e39]', // 4: darkest
];

interface HeroContributionGraphProps {
  graphPattern?: number[][];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.015,
    },
  },
};

const cellVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 360,
      damping: 20,
    }
  },
};

const MotionDiv = motion.div as any;

export default function HeroContributionGraph({ graphPattern }: HeroContributionGraphProps) {
  const defaultGraphPattern = Array.from({ length: 52 }, (_, colIndex) =>
    Array.from({ length: 7 }, (_, rowIndex) => {
      const v = (colIndex * 17 + rowIndex * 11) % 100;
      if (v > 90) return 4;
      if (v > 75) return 3;
      if (v > 50) return 2;
      if (v > 25) return 1;
      return 0;
    })
  );

  const patternToUse = graphPattern || defaultGraphPattern;

  return (
    <MotionDiv
      className="relative w-full flex justify-center  opacity-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Flex $gap={4} className="h-full w-auto">
        {patternToUse.map((column, colIndex) => (
          <Flex key={`col-${colIndex}`} $direction="column" $gap={4}>
            {column.map((level, rowIndex) => (
              <MotionDiv
                key={`cell-${colIndex}-${rowIndex}`}
                variants={cellVariants}
                className={cn('h-3 w-3 rounded-sm', 'max-lg:h-2.5 max-lg:w-2.5 ', COLORS[level] || COLORS[0])}
              />
            ))}
          </Flex>
        ))}
      </Flex>
    </MotionDiv>
  );
}


