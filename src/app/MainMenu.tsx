"use client";
import { useUI } from "./UiContext";
import BootstrapMainMenu from "./BootstrapMainMenu";
import MuiMainMenu from "./MuiMainMenu";
import AntMainMenu from "./AntMainMenu";

export default function MainMenu() {
  const { ui } = useUI();
  return (
    <div>
      {ui == "bootstrap" ? <BootstrapMainMenu /> : null}
      {ui == "mui" ? <MuiMainMenu /> : null}
      {ui == "ant" ? <AntMainMenu /> : null}
    </div>
  );
}
