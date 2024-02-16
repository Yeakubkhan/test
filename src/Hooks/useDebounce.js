import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  const debounceCallback = (...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceCallback;
};

export default useDebounce;
