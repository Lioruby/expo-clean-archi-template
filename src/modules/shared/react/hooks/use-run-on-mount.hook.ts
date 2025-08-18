import { useEffect } from "react";

export const useRunOnMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};
