import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/GameService";
import {
  StartCardStatName,
  StatCardStatContainer,
  StatCardStatValue,
  StatCardWrapper,
} from "./PlayerStatCard.style";

export const PlayerStatCard = () => {
  const { gameInfo } = useContext(GameInfoContext);
  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  return (
    <>
      {spectatedPlayer && (
        <StatCardWrapper>
          <p>{spectatedPlayer.name}</p>
          <StatCardStatContainer>
            <div>
              <StartCardStatName>GOALS</StartCardStatName>
              <StatCardStatValue>{spectatedPlayer.goals}</StatCardStatValue>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <StartCardStatName>ASSISTS</StartCardStatName>
              <StatCardStatValue>{spectatedPlayer.assists}</StatCardStatValue>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <StartCardStatName>SAVES</StartCardStatName>
              <StatCardStatValue>{spectatedPlayer.saves}</StatCardStatValue>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <StartCardStatName>SHOTS</StartCardStatName>
              <StatCardStatValue>{spectatedPlayer.shots}</StatCardStatValue>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <StartCardStatName>SCORE</StartCardStatName>
              <StatCardStatValue>{spectatedPlayer.score}</StatCardStatValue>
            </div>
          </StatCardStatContainer>
        </StatCardWrapper>
      )}
    </>
  );
};
