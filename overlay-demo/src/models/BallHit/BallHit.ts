export interface BallHit {
    ball: {
        location: {
            x: number;
            y: number;
            z: number;
        };
        post_hit_speed: number;
        pre_hit_speed: number;
    };
    player: {
        id: string;
        name: string;
    };
}