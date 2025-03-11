import { DependencyList } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useEventListener = (
  event: keyof WindowEventMap | keyof DocumentEventMap,
  callback: (e?: any) => void,
  deps?: DependencyList,
) => {
  useIsomorphicLayoutEffect(() => {
    window.addEventListener(event, callback);

    return () => {
      window.removeEventListener(event, callback);
    };
  }, deps ?? []);

  return null;
};

export default useEventListener;
