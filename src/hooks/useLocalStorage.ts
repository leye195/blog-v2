import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

type Props<T> = {
  key: string;
  initialValue: T;
};

const useLocalStorage = <T>({ key, initialValue }: Props<T>) => {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (value != null) localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return { value, setValue };
};

export default useLocalStorage;
