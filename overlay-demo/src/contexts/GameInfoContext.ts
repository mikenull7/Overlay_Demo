import { createContext } from "react";
import { GameContext } from "../models/contexts/GameContext";

export interface GameInfoContextModel {
  gameInfo: GameContext;
  setGameInfo: (newGameInfo: GameContext) => void;
}

export const DEFAULT_GAME_INFO: GameContext = {
  arena: "",
  isOT: false,
  isReplay: false,
  timeRemaining: 300,
  winner: "",
  players: [],
  color_primary: {
    blue: "",
    orange: "",
  },
  color_secondary: {
    blue: "",
    orange: "",
  },
  name: {
    blue: "",
    orange: "",
  },
  score: {
    blue: 0,
    orange: 0,
  },
  target: "",
};

export const GameInfoContext = createContext<GameInfoContextModel>({
  gameInfo: DEFAULT_GAME_INFO,
  setGameInfo: (NEWGAMEINFO: GameContext) => {},
});
