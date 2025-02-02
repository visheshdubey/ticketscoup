import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export function useDeviceType() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  return isMobile;
}
