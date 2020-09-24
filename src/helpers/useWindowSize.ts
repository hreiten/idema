import { useCallback, useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize | undefined => {
  const isClient = typeof document.body === 'object';
  const getSize = useCallback(() => {
    return isClient
      ? {
          width: document.body.clientWidth,
          height: window.innerHeight,
        }
      : undefined;
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return;
    }

    const updateSize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [getSize, isClient]);

  return windowSize;
};

export default useWindowSize;
