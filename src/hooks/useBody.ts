import { type DependencyList } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

type Props = {
  className: string;
  onMount?: (body: HTMLElement) => void;
  onCleanUp?: (body: HTMLElement) => void;
};

const useBody = (
  { className, onMount, onCleanUp }: Props,
  dependency?: DependencyList,
) => {
  useIsomorphicLayoutEffect(() => {
    const body = document.body;

    onMount?.(body);
    return () => {
      onCleanUp?.(body);
    };
  }, [className, ...(dependency ?? [])]);
};

export default useBody;
