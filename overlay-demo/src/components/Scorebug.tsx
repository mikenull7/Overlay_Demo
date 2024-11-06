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

export const Scorebug = () => {
  const { gameInfo } = useContext(GameInfoContext);

  return (
    <ScorebugWrapper>
      <LogoBlueTeam></LogoBlueTeam>
      <LogoOrangeTeam></LogoOrangeTeam>
      <ScorebugClock>
        {GameService.getClockfromSeconds(gameInfo.timeRemaining, gameInfo.isOT)}
      </ScorebugClock>
      <ScorebugOrange>
        {""} {gameInfo.score.orange}
      </ScorebugOrange>
      <OrangeTeamName>
        {""} {gameInfo.name.orange}
      </OrangeTeamName>
      <BlueTeamName>
        {""} {gameInfo.name.blue}
      </BlueTeamName>
      <ScorebugBlue>
        {""} {gameInfo.score.blue}
      </ScorebugBlue>
      <GameName>
        <div>GAME 7 BEST OF 7</div>
      </GameName>
    </ScorebugWrapper>
  );
};
