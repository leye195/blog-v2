import { KBarResults, useMatches } from 'kbar';
import { cn } from '@/libs/utils';

const KBarResult = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <p className="w-[inherit] px-[10px] py-[8px] text-[12px] font-semibold">{item}</p>
        ) : (
          <div
            className={cn(
              'flex w-full cursor-pointer items-center px-[16px] py-[4px] transition-all',
              'before:absolute before:top-0 before:left-0 before:h-full before:w-[4px] before:content-[""]',
              'before:bg-white-50 before:scale-x-0 before:transition-all',
              active && 'opacity-80 before:scale-x-100',
            )}
          >
            <div className="flex h-[2.5rem] w-[inherit] flex-col justify-center">
              <p className="w-full truncate text-left">{item.name}</p>
              {item.subtitle && <span className="text-[12px]">{item.subtitle}</span>}
            </div>
          </div>
        )
      }
    />
  );
};

export default KBarResult;
