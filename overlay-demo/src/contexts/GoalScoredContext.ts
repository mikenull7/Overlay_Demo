import { createContext } from "react";

export interface GoalScored {
  assister: {
    id: string;
    name: string;
  };
  ball_last_touch: {
    player: string;
    speed: number;
  };
  goalspeed: number;
  goaltime: number;
  impact_location: {
    x: number;
    y: number;
  };
  scorer: {
    id: string;
    name: string;
    team_num: number;
  };
}

export interface GoalScoredContextModel {
  goalScored: GoalScored | null;
  setGoalScored: (newGoalScored: GoalScored | null) => void;
}

export const DEFAULT_GOAL_SCORED: GoalScored = {
  assister: {
    id: "",
    name: "",
  },
  ball_last_touch: {
    player: "",
    speed: 0,
  },
  goalspeed: 0,
  goaltime: 0,
  impact_location: {
    x: 0,
    y: 0,
  },
  scorer: {
    id: "",
    name: "",
    team_num: -1,
  },
};

export const GoalScoredContext = createContext<GoalScoredContextModel>({
  goalScored: DEFAULT_GOAL_SCORED,
  setGoalScored: () => {},
});
