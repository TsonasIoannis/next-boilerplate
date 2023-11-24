import { createContext, useContext, useState } from "react";

type Themes = "light" | "dark";
type ThemeContextType = {
  theme: Themes;
  setContextTheme: (theme: Themes) => void;
};

const ThemeContextDefaultValues: ThemeContextType = {
  theme: "light",
  setContextTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(ThemeContextDefaultValues);

export function ThemeContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [theme, setTheme] = useState<Themes>("light");
  const setContextTheme = (theme: Themes) => {
    setTheme(theme);
  };
  const value = { theme, setContextTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
