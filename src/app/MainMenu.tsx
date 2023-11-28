"use client";
import { useUI } from "./UiContext";
import BootstrapMainMenu from "./BootstrapMainMenu";
import MuiMainMenu from "./MuiMainMenu";

export default function MainMenu() {
  const { ui } = useUI();
  return (
    <>
      {ui == "bootstrap" ? <BootstrapMainMenu /> : null}
      {ui == "mui" ? <MuiMainMenu /> : null}
    </>
  );
}
