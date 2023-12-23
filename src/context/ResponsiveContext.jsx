import { createContext, useContext, useEffect, useState } from "react";

const ResponsiveContext = createContext();

export function ResponsiveProvider({ children }) {
  const [active, setActive] = useState(window.innerWidth > 1024);
  const updateMedia = () => {
    setActive(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [active]);

  return (
    <ResponsiveContext.Provider value={{ active, setActive }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export const useResponsive = () => useContext(ResponsiveContext);
