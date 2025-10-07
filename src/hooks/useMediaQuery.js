import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (globalThis.window === undefined) return false;
    return globalThis.matchMedia(query).matches;
  });

  useEffect(() => {
    if (globalThis.window === undefined) return;
    const mql = globalThis.matchMedia(query);
    const handler = (error) => setMatches(error.matches);

    if (mql.addEventListener) mql.addEventListener('change', handler);
    else mql.addListener(handler);

    setMatches(mql.matches);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler);
      else mql.removeListener(handler);
    };
  }, [query]);

  return matches;
}
