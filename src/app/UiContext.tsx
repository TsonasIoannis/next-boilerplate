"use client";

import { createContext, useContext, useState } from "react";

export type UI = "bootstrap" | "mui" | "ant";
type UIContextType = {
  ui: UI;
  setContextUI: (ui: UI) => void;
};

const UIContextDefaultValues: UIContextType = {
  ui: "bootstrap",
  setContextUI: () => {},
};

const UIContext = createContext<UIContextType>(UIContextDefaultValues);

export function UIContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [ui, setUI] = useState<UI>("bootstrap");
  const setContextUI = (ui: UI) => {
    setUI(ui);
  };
  const value = { ui, setContextUI };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  return useContext(UIContext);
}
