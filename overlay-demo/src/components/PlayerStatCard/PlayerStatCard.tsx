import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/GameService";
import {
  BoostMeterStatCardWrapper,
  BoostMeterStatCard,
  StartCardStatName,
  StatCardStatContainer,
  StatCardStatValue,
  StatCardWrapper,
} from "./PlayerStatCard.style";
import { BoostService } from "../../services/boostservice";

export const PlayerStatCard = () => {
  const { gameInfo } = useContext(GameInfoContext);
  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  const OrangePrimaryColor = gameInfo.color_primary.orange;
  const BluePrimaryColor = gameInfo.color_primary.blue;
  const FillColor =
    spectatedPlayer?.team! == 0 ? BluePrimaryColor : OrangePrimaryColor;

  const BlueSecondaryColor = gameInfo.color_secondary.blue;
  const OrangeSecondaryColor = gameInfo.color_secondary.orange;
  const SecondaryColor =
    spectatedPlayer?.team! == 0 ? BlueSecondaryColor : OrangeSecondaryColor;

  return (
    <>
      {spectatedPlayer && (
        <StatCardWrapper backgroundColor={`#${FillColor}`}>
          <p>{spectatedPlayer.name}</p>
          <BoostMeterStatCardWrapper>
            <BoostMeterStatCard
              width={(spectatedPlayer.boost / 100) * 650}
              fill={`#${SecondaryColor}`}
            ></BoostMeterStatCard>
          </BoostMeterStatCardWrapper>
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
