import { useContext, useEffect } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import { GameService } from "../../services/GameService";
import { USPlayer } from "../../models/UpdateState/USPlayer";
import {
  BlueOneContainer,
  BoostContainer,
  KeysBlue,
  KeysOrange,
  KeysTextBlue,
  KeysTextOrange,
  OrangeBoostContainer,
  OrangeContainer,
  TeamBoostMeterName,
  TeamBoostMetersAll,
  TeamBoostMeterValue,
  TeamBoostMeterValueName,
  TeamLeftWrapper,
  TeamRightWrapper,
} from "./TeamBoostMeter.style";

export const TeamBoostMeters = () => {
  const { gameInfo } = useContext(GameInfoContext);

  const GetBlueTeam = GameService.getBlueTeam(gameInfo.players);
  let playernameBlue = GetBlueTeam.map(function (playermapBlue) {
    return playermapBlue.name;
  });
  let BlueGoals = GetBlueTeam.map(function (goalsmapBlue) {
    return goalsmapBlue.goals;
  });
  let BlueAssists = GetBlueTeam.map(function (assistsmapBlue) {
    return assistsmapBlue.assists;
  });
  let BlueSaves = GetBlueTeam.map(function (savesmapBlue) {
    return savesmapBlue.saves;
  });
  let BlueShots = GetBlueTeam.map(function (shotsmapBlue) {
    return shotsmapBlue.shots;
  });
  let BlueBoost = GetBlueTeam.map(function (boostmapBlue) {
    return boostmapBlue.boost;
  });

  const GetOrangeTeam = GameService.getOrangeTeam(gameInfo.players);
  let playernameOrange = GetOrangeTeam.map(function (playermapOrange) {
    return playermapOrange.name;
  });
  let OrangeGoals = GetOrangeTeam.map(function (goalsmapOrange) {
    return goalsmapOrange.goals;
  });
  let OrangeAssists = GetOrangeTeam.map(function (assistsmapOrange) {
    return assistsmapOrange.assists;
  });
  let OrangeSaves = GetOrangeTeam.map(function (savesmapOrange) {
    return savesmapOrange.saves;
  });
  let OrangeShots = GetOrangeTeam.map(function (shotsmapOrange) {
    return shotsmapOrange.shots;
  });
  let OrangeBoost = GetOrangeTeam.map(function (boostmapOrange) {
    return boostmapOrange.boost;
  });

  return (
    <>
      <TeamBoostMetersAll>
        <TeamLeftWrapper>
          <BlueOneContainer
            $backgroundColor={`#${gameInfo.color_primary.blue}`}
          >
            <TeamBoostMeterName>{playernameBlue[0]}</TeamBoostMeterName>
            <BoostContainer
              width={(BlueBoost[0] / 100) * 250}
              fill={`#${gameInfo.color_secondary.blue}`}
            ></BoostContainer>
          </BlueOneContainer>
          <BlueOneContainer
            $backgroundColor={`#${gameInfo.color_primary.blue}`}
          >
            <div style={{ marginTop: "25px" }}>
              <TeamBoostMeterName>{playernameBlue[1]}</TeamBoostMeterName>
            </div>
            <BoostContainer
              width={(BlueBoost[1] / 100) * 250}
              fill={`#${gameInfo.color_secondary.blue}`}
            ></BoostContainer>
          </BlueOneContainer>
          <BlueOneContainer
            $backgroundColor={`#${gameInfo.color_primary.blue}`}
          >
            <div style={{ marginTop: "25px" }}>
              <TeamBoostMeterName>{playernameBlue[2]}</TeamBoostMeterName>
            </div>
            <BoostContainer
              width={(BlueBoost[2] / 100) * 250}
              fill={`#${gameInfo.color_secondary.blue}`}
            ></BoostContainer>
          </BlueOneContainer>
        </TeamLeftWrapper>
        <TeamRightWrapper>
          <OrangeContainer
            $backgroundColor={`#${gameInfo.color_primary.orange}`}
          >
            <TeamBoostMeterName>{playernameOrange[0]}</TeamBoostMeterName>
            <OrangeBoostContainer
              width={(OrangeBoost[0] / 100) * 250}
              fill={`#${gameInfo.color_secondary.orange}`}
            ></OrangeBoostContainer>
          </OrangeContainer>
          <OrangeContainer
            $backgroundColor={`#${gameInfo.color_primary.orange}`}
          >
            <div style={{ marginTop: "25px" }}>
              <TeamBoostMeterName>{playernameOrange[1]}</TeamBoostMeterName>
            </div>
            <OrangeBoostContainer
              width={(OrangeBoost[1] / 100) * 250}
              fill={`#${gameInfo.color_secondary.orange}`}
            ></OrangeBoostContainer>
          </OrangeContainer>
          <OrangeContainer
            $backgroundColor={`#${gameInfo.color_primary.orange}`}
          >
            <div style={{ marginTop: "25px" }}>
              <TeamBoostMeterName>{playernameOrange[2]}</TeamBoostMeterName>
            </div>
            <OrangeBoostContainer
              width={(OrangeBoost[2] / 100) * 250}
              fill={`#${gameInfo.color_secondary.orange}`}
            ></OrangeBoostContainer>
          </OrangeContainer>
        </TeamRightWrapper>
      </TeamBoostMetersAll>
    </>
  );
};
