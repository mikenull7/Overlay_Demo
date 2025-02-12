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
