import styled from "styled-components";
import Blueteamicon from "../Images/BlueTeam.png";
import Orangeteamicon from "../Images/OrangeTeam.png";

export const GameName = styled.div`
  width: 516px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  margin: center;
  top: 94px;
  left: 50%;
  margin-left: -258px;
  color: black;
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
  background-color: transparent;
  color: black;
  font-size: 1.6vw;
  margin: auto;
  position: absolute;
  top: 1px;
  right: 366px;
  text-align: center;
  word-wrap: no-wrap;
  justify-content: fit;
  display: flex;
  vertical-align: center;
`;

export const ScorebugBlue = styled.div`
  height: 94px;
  width: 100px;
  background-color: blue;
  color: black;
  font-size: 59px;
  margin: auto;
  position: absolute;
  vertical-align: middle;
  top: 0px;
  left: 703px;
  justify-content: center;
  text-align: center;
`;

export const ScorebugOrange = styled.div`
  height: 94px;
  width: 100px;
  background-color: orange;
  color: black;
  font-size: 59px;
  margin: right;
  position: absolute;
  top: 1px;
  right: 703px;
  text-align: center;
  justify-content: center;
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
  background-color: trnaparent;
  color: black;
  font-size: 35px;
  margin: auto;
  position: absolute;
  top: 1px;
  left: 365px;
  text-align: left;
  justify-content: center;
  vertical-align: center;
`;
