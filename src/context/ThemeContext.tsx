'use client';

import { createContext, useContext } from 'react';

type ThemeContextType = {
  isDark?: boolean;
};

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
});

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider
      value={{
        isDark: false,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
