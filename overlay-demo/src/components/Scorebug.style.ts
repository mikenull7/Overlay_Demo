import styled from "styled-components";
import Blueteamicon from "../Images/BlueTeam.png";
import Orangeteamicon from "../Images/OrangeTeam.png";

interface ScorebugOrangeProps {
  backgroundColor: string;
}

interface ScorebugBlueProps {
  backgroundColor: string;
}

export const GameName = styled.div`
  width: 516px;
  height: 50px;
  background-color: black;
  position: absolute;
  margin: center;
  top: 94px;
  left: 50%;
  margin-left: -258px;
  color: white;
  font-size: 1.5vw;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  text-align: center;
  display: inline-block;
`;

export const ScorebugWrapper = styled.div`
  top: 1px;
  left: 0px;
  width: 1400px;
  height: 94px;
  font-family: "Race Sport Regular";
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

export const ScorebugClock = styled.div`
height: 94px:
width: 100px;
color: white;
text-align: center;
font-size: 60px;
background-color: transparent;
margin: auto;
top: 1px;
left: 888px;
position: absolute;
justify-content: center;
`;

export const OrangeTeamName = styled.div`
  height: 94px;
  width: 335px;
  background-color: rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 27px;
  position: absolute;
  top: 1px;
  right: 366px;
  text-align: right;
  word-wrap: no-wrap;
  vertical-align: center;
  line-height: 2em;
  align-items: center;
`;

export const ScorebugBlue = styled.div<ScorebugBlueProps>`
  height: 94px;
  width: 425px;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  font-size: 59px;
  margin: auto;
  position: absolute;
  vertical-align: middle;
  top: 0px;
  left: 366px;
  justify-content: middle;
  text-align: right;
  padding-right: 20px;
`;

export const ScorebugOrange = styled.div<ScorebugOrangeProps>`
  height: 94px;
  width: 425px;
  background-color: ${(props) => props.backgroundColor};
  color: black;
  font-size: 59px;
  margin: auto;
  position: absolute;
  top: 1px;
  right: 366px;
  text-align: left;
  justify-content: center;
  padding-left: 20px;
`;

export const LogoBlueTeam = styled.image`
  background-image: url(${Blueteamicon});
  width: 110px;
  height: 94px;
  position: relative;
  left: 0px;
  top: 1px;
  background-repeat: no-repeat;
  margin: left;
  display: flex;
  background-color: transparent;
`;

export const LogoOrangeTeam = styled.image`
  background-image: url(${Orangeteamicon});
  width: 110px;
  height: 94px;
  position: absolute;
  right: 254px;
  top: 1px;
  background-repeat: no-repeat;
  margin: right;
  display: flex;
  background-color: transparent;
  white-space: nowrap;
`;

export const BlueTeamName = styled.div`
  height: 94px;
  width: 335px;
  background-color: rgba(0, 0, 0, 0.25);
  color: black;
  font-size: 27px;
  margin: auto;
  position: absolute;
  top: 1px;
  left: 365px;
  text-align: left;
  justify-content: center;
  line-height: 2em;
`;
