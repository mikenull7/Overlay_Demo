import { useContext } from "react";
import { GameInfoContext } from "../../contexts/GameInfoContext";
import {
  ScorerName,
  ScoreCardWrapper,
  AssisterName,
  GoalSpeed,
  GoalTime,
} from "../ScoreCard/ScoreCard.style";
import { StatfeedInfoContext } from "../../contexts/StatfeedInfoContext";
import { GoalScoredContext } from "../../contexts/GoalScoredContext";

export const ScoreCard = () => {
  const { gameInfo } = useContext(GameInfoContext);
  const { statfeedInfo } = useContext(StatfeedInfoContext);
  const { goalScored } = useContext(GoalScoredContext);

  const OrangePrimaryColor = gameInfo.color_primary.orange;
  const BluePrimaryColor = gameInfo.color_primary.blue;

  const BlueSecondaryColor = gameInfo.color_secondary.blue;
  const OrangeSecondaryColor = gameInfo.color_secondary.orange;

  const Scorer = goalScored?.scorer.name;
  const Assister = goalScored?.assister.name;
  const goalTimeinSeconds = goalScored?.goaltime || 0;
  const DisplayedGoalTime = formatTime(goalTimeinSeconds);

  const GoalSpeedKPH = goalScored?.goaltime || 0;
  const goalspeedInMPH = GoalSpeedKPH * 0.621371;
  const DisplayedGoalSpeed = Math.ceil(goalspeedInMPH);

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  if (!gameInfo.isReplay) return null;
  return (
    <>
      <ScoreCardWrapper>
        <ScorerName>{Scorer}</ScorerName>
        <AssisterName>{Assister}</AssisterName>
        <GoalSpeed>{DisplayedGoalSpeed} MPH</GoalSpeed>
        <GoalTime>{DisplayedGoalTime}</GoalTime>
      </ScoreCardWrapper>
    </>
  );
};
