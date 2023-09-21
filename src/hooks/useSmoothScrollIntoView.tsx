// hooks/useSmoothScrollIntoView.ts
import { useRef, useEffect } from "react";

const useSmoothScrollIntoView = (dependency: any) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      (ref.current as any).scrollIntoView();
    }
  }, [dependency]);

  return ref;
};

export default useSmoothScrollIntoView;
