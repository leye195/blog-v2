import { useState } from 'react';
import { useKBar } from 'kbar';
import { cn } from '@/libs/utils';

const KBarSearch = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState('');
  const { query, search, actions, currentRootActionId } = useKBar((state) => ({
    search: state.searchQuery,
    currentRootActionId: state.currentRootActionId,
    actions: state.actions,
  }));

  return (
    <input
      className={cn(
        'border-none bg-transparent outline-hidden',
        'box-border w-full px-5 py-3.5',
        'focus:placeholder:opacity-100 focus:placeholder:transition-opacity',
      )}
      ref={query.inputRefSetter}
      value={value}
      placeholder="Cmd (or Ctrl) + K to toggle"
      onChange={(event) => {
        props.onChange?.(event);
        query.setSearch(event.target.value);
        setValue(event.target.value);
      }}
      onKeyDown={(event) => {
        if (currentRootActionId && !search && event.key === 'Backspace') {
          const parent = actions[currentRootActionId].parent;
          query.setCurrentRootAction(parent);
        }
      }}
    />
  );
};

export default KBarSearch;
