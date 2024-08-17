import { useState } from "react";
import { StartGame } from "./pages/StartGame/StartGame";
import { GamePlay } from "./pages/GamePLay/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] = useState();
  const toggleGame = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGame} />}</>
  );
}

export default App;
