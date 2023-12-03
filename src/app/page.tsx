import MainMenu from "./MainMenu";
import { UIContextProvider } from "./UiContext";
export default function Home() {
  return (
    <main>
      <UIContextProvider>
        <MainMenu />
      </UIContextProvider>
    </main>
  );
}
