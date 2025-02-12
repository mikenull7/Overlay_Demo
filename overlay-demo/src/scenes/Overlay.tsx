import { useContext, useEffect } from "react";
import { websocketContext } from "../contexts/WebsocketContext";
import { GameInfoContext } from "../contexts/GameInfoContext";
import { UpdateState } from "../models/UpdateState/UpdateState";
import { USPlayer } from "../models/UpdateState/USPlayer";
import { Scorebug } from "../components/Scorebug";
import { PlayerBoostMeter } from "../components/PlayerBoostMeter/PlayerBoostMeter";
import { PlayerStatCard } from "../components/PlayerStatCard/PlayerStatCard";
import { TeamBoostMeters } from "../components/TeamBoostMeter/TeamBoostMeter";

export const Overlay = () => {
  const websocket = useContext(websocketContext);
  const { gameInfo, setGameInfo } = useContext(GameInfoContext);

  useEffect(() => {
    websocket.subscribe("game", "update_state", (data: UpdateState) => {
      const updatedPlayers: USPlayer[] = Object.values(data.players).map(
        (playerinfo: USPlayer) => playerinfo
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
  });
  return (
    <>
      <Scorebug />
      <PlayerBoostMeter />
      <PlayerStatCard />
      <TeamBoostMeters />
    </>
  );
};
