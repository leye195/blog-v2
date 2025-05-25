import { KBarAnimator, KBarPortal, KBarPositioner } from 'kbar';

import BackDrop from '@/components/common/BackDrop';
import KBarResult from '@/components/kbar/Result';
import KBarSearch from '@/components/kbar/Search';
import { cn } from '@/libs/utils';

const KBarComponent = () => {
  return (
    <KBarPortal>
      <BackDrop />
      <KBarPositioner className="z-1">
        <KBarAnimator
          className={cn(
            'w-full max-w-[500px] overflow-hidden rounded-lg',
            'text-white-50 bg-white shadow-[-1px_3px_11px_#808080]',
          )}
        >
          <KBarSearch />
          <KBarResult />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

export default KBarComponent;
