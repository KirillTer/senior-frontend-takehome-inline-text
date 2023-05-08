import { useCallback, useRef } from "react";

export function useThottle(callBack: (params: string) => void, delay: number) {
  const timer = useRef();

  const thottleCallback = useCallback(
    (args: string) => {
      if (!timer.current) {
        (timer.current as unknown) = setTimeout(() => {
          callBack(args);
          clearTimeout(timer.current);
          timer.current = undefined;
        }, delay);
      }
    },
    [callBack, delay]
  );

  return thottleCallback;
}