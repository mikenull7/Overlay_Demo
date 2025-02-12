import { useContext, useEffect, useState } from "react";
import { websocketContext } from "../contexts/WebsocketContext";
import { GameInfoContext } from "../contexts/GameInfoContext";
import { StatfeedInfoContext } from "../contexts/StatfeedInfoContext";
import { GoalScoredContext } from "../contexts/GoalScoredContext"; // Import the GoalScoredContext
import { UpdateState } from "../models/UpdateState/UpdateState";
import { StatfeedEvent } from "../models/StatfeedEvent/StatfeedEvent";
import { GoalScored } from "../models/GoalScored/GoalScored";
import { Scorebug } from "../components/Scorebug";
import { PlayerBoostMeter } from "../components/PlayerBoostMeter/PlayerBoostMeter";
import { PlayerStatCard } from "../components/PlayerStatCard/PlayerStatCard";
import { TeamBoostMeters } from "../components/TeamBoostMeter/TeamBoostMeter";
import { ScoreCard } from "../components/ScoreCard/ScoreCard";

export const Overlay = () => {
  const websocket = useContext(websocketContext);
  const { gameInfo, setGameInfo } = useContext(GameInfoContext);
  const [statfeedInfo, setStatfeedInfo] = useState<StatfeedEvent | null>(null);
  const [goalScoredInfo, setGoalScoredInfo] = useState<GoalScored | null>(null);

  // Subscribe to "update_state" for game state updates
  useEffect(() => {
    websocket.subscribe("game", "update_state", (data: UpdateState) => {
      const updatedPlayers = Object.values(data.players).map(
        (playerinfo) => playerinfo
      );
      setGameInfo({
        arena: data.game.arena,
        isOT: data.game.isOT,
        isReplay: data.game.isReplay,
        target: data.game.target,
        timeRemaining: data.game.time_seconds,
        winner: data.game.winner,
        players: updatedPlayers,
        color_primary: {
          blue: data.game.teams[0].color_primary,
          orange: data.game.teams[1].color_primary,
        },
        color_secondary: {
          blue: data.game.teams[0].color_secondary,
          orange: data.game.teams[1].color_secondary,
        },
        name: {
          blue: data.game.teams[0].name,
          orange: data.game.teams[1].name,
        },
        score: {
          blue: data.game.teams[0].score,
          orange: data.game.teams[1].score,
        },
      });
    });
  }, [setGameInfo]);

  // Subscribe to "statfeed_event" for events like goal, assist, demo, etc.
  useEffect(() => {
    websocket.subscribe("game", "statfeed_event", (data: StatfeedEvent) => {
      console.log("Statfeed Event Received:", data);
      setStatfeedInfo(data);
    });
  }, []);

  // Subscribe to "goal_scored" for the goal scored event
  useEffect(() => {
    websocket.subscribe("game", "goal_scored", (data: GoalScored) => {
      console.log("Goal Scored Received:", data);
      setGoalScoredInfo(data);
    });
  }, []);

  return (
    <GoalScoredContext.Provider
      value={{ goalScored: goalScoredInfo, setGoalScored: setGoalScoredInfo }}
    >
      <StatfeedInfoContext.Provider value={{ statfeedInfo, setStatfeedInfo }}>
        <Scorebug />
        <ScoreCard />
        <PlayerBoostMeter />
        <PlayerStatCard />
        <TeamBoostMeters />
      </StatfeedInfoContext.Provider>
    </GoalScoredContext.Provider>
  );
};
