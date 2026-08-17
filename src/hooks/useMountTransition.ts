// 마운트 상태 변화에 맞춰 전환 플래그를 세우는 훅이라 effect 안 setState가 의도된 동작이다.
/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, unmountDelay, isTransitioning]);

  return isTransitioning;
};

export default useMountTransition;
