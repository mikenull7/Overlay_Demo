import { useEffect, useState } from "react";
import { webSocketService } from "./services/websocketService";
import { websocketContext } from "./contexts/WebsocketContext";
import { Overlay } from "./scenes/Overlay";
import { GameContext } from "./models/contexts/GameContext";
import { DEFAULT_GAME_INFO, GameInfoContext } from "./contexts/GameInfoContext";


function App() {
  useEffect (() => {
    webSocketService.init(49322, false);
  });

  const [gameInfo, setGameInfo] = useState<GameContext>(DEFAULT_GAME_INFO);

  return (

    <websocketContext.Provider value={webSocketService}>
        <GameInfoContext.Provider value={{ gameInfo: gameInfo, setGameInfo: setGameInfo }}
        >
          <Overlay />
        </GameInfoContext.Provider>
      </websocketContext.Provider>
  );
};

export default App;
