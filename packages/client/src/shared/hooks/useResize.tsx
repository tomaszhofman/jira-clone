import { useCallback, useEffect, useState } from 'react';

interface UseResizeReturn {
  width: number;
  enableResize: () => void;
}

const useResize = (minWidth: number): UseResizeReturn => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(minWidth);

  const enableResize = useCallback(() => {
    console.log('rerende r 222222222');
    setIsResizing(true);
  }, [setIsResizing]);

  const disableResize = useCallback(() => {
    setIsResizing(false);
    console.log('rerender 1111111111');
  }, [setIsResizing]);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = e.clientX;
        console.log(e.clientX, 'dupaaaaaaa');
        if (newWidth >= minWidth) {
          console.log(minWidth);

          setWidth(newWidth);
        }
      }
    },
    [minWidth, isResizing, setWidth]
  );

  useEffect(() => {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', disableResize);
    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', disableResize);
    };
  }, [resize, disableResize]);

  return { width, enableResize };
};

export default useResize;
