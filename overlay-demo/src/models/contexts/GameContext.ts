import { USPlayer } from "../UpdateState/USPlayer";

export interface GameContext {
  arena: string;
  isOT: boolean;
  isReplay: boolean; // are we replaying a goal that was scored
  target: string; // who are we currently spectating (no one = "")
  timeRemaining: number; // in seconds
  winner: string;
  players: USPlayer[];
  color_primary: {
    blue: string;
    orange: string;
  };
  color_secondary: {
    blue: string;
    orange: string;
  };
  name: {
    blue: string;
    orange: string;
  };
  score: {
    blue: number;
    orange: number;
  };
}
