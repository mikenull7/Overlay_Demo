export interface GoalScored {
    ball_last_touch: {
        player: string;
        speed: number;
    };
    goalspeed: number;
    impact_location: {
        x: number;
        y: number;
    };
    scorer: {
        id: string;
        name: string;
        teannum: number;
    };
}