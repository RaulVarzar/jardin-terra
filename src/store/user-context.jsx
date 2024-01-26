import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  progress: 'top',
  setDark: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [progress, setProgress] = useState('top');

  function setDark(newProgress) {
    setProgress(newProgress);
  }

  return (
    <ThemeContext.Provider value={{ progress, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
