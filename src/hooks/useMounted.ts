// 마운트 여부를 감지하는 훅이라 effect 안에서 setState 하는 것이 의도된 동작이다.
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';

function useMounted(condition?: boolean) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (condition) {
      setMounted(true);
      false;
    }

    if (condition === undefined) {
      setMounted(true);
    }
  }, [condition]);

  return mounted;
}

export default useMounted;
