import styled from "styled-components";

export const ScoreCardWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: purple;
  position: absolute;
  top: 800px;
  left: 750px;
`;

export const ScorerName = styled.text`
  font-family: Race Sport;
  font-size: 20px;
  text-shadow: 1px 1px 40px white;
  z-index: 5;
  font-weight: bold;
  color: white;
`;

export const GoalTime = styled.text`
  font-family: Race Sport;
  font-size: 20px;
  text-shadow: 1px 1px 40px white;
  z-index: 5;
  font-weight: bold;
  color: red;
  right: 0px;
`;

export const GoalSpeed = styled.text`
  font-family: Race Sport;
  font-size: 20px;
  text-shadow: 1px 1px 40px white;
  z-index: 5;
  font-weight: bold;
  color: red;
  right: 0px;
`;

export const AssisterName = styled.text`
  font-family: Race Sport;
  font-size: 20px;
  text-shadow: 1px 1px 40px white;
  z-index: 5;
  font-weight: bold;
  color: red;
  right: 0px;
`;
