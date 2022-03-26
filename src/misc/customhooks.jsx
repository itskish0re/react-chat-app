import { useState, useCallback, useEffect } from 'react';

export const useModalState = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
};

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const querList = window.matchMedia(query);
    setMatches(querList.matches);

    const listener = (e) => setMatches(e.matches);

    querList.addEventListener("change",listener)
    return () => querList.removeEventListener("change",listener)
  }, [query]);

  return matches;
};