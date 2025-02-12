import { Component, useContext } from "react";
import { GameInfoContext } from "../contexts/GameInfoContext";
import {
  ScorebugBlue,
  ScorebugClock,
  ScorebugOrange,
  ScorebugWrapper,
  LogoBlueTeam,
  LogoOrangeTeam,
  GameName,
  OrangeTeamName,
  BlueTeamName,
} from "./Scorebug.style";
import { GameService } from "../services/GameService";
import styled from "styled-components";

export const Scorebug = () => {
  const { gameInfo } = useContext(GameInfoContext);

  const OrangePrimaryColor = gameInfo.color_primary.orange;
  const BluePrimaryColor = gameInfo.color_primary.blue;

  return (
    <>
      <ScorebugWrapper>
        <LogoBlueTeam></LogoBlueTeam>
        <LogoOrangeTeam></LogoOrangeTeam>
        <ScorebugClock>
          {GameService.getClockfromSeconds(
            gameInfo.timeRemaining,
            gameInfo.isOT
          )}
        </ScorebugClock>
        <ScorebugOrange backgroundColor={`#${OrangePrimaryColor}`}>
          {""} {gameInfo.score.orange}
        </ScorebugOrange>
        <OrangeTeamName>
          {""} {gameInfo.name.orange}
        </OrangeTeamName>
        <ScorebugBlue backgroundColor={`#${BluePrimaryColor}`}>
          {""} {gameInfo.score.blue}
        </ScorebugBlue>
        <BlueTeamName>
          {""} {gameInfo.name.blue}
        </BlueTeamName>
        <GameName>
          <div>GAME 7 BEST OF 7</div>
        </GameName>
      </ScorebugWrapper>
    </>
  );
};
