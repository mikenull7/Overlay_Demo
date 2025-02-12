import styled from "styled-components";

interface BoostContainerProps {
  width: number;
  fill: string;
}

export const TeamBoostMetersAll = styled.div`
  font-family: Race Sport;
  height: 250px;
  width: 1920px;
  background-color: transparent;
  top: 100px;
  position: absolute;
  display: inline;
  flex-flow: row nowrap;
  text-align: center;
`;

export const TeamLeftWrapper = styled.div`
  background-color: transparent;
  height: 250px;
  width: 300px;
  position: absolute;
  top: 0px;
  color: black;
  text-align: left;
`;

export const TeamRightWrapper = styled.div`
  background-color: transparent;
  height: 250px;
  width: 300px;
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: right;
  color: black;
`;

export const TeamBoostMeterName = styled.p`
  font-size: 20px;
  margin: 0px;
`;

export const TeamBoostMeterValueName = styled.p`
  font-size: 12px;
  margin: 0px;
  display: inline;
  line-height: 0px;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  line-height: 5px;
  font-weight: lighter;
`;

export const TeamBoostMeterValue = styled.p`
  font-size: 12px;
  margin: 0px;
  display: inline;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 25px;
  align-text: middle;
  line-height: 5px;
`;

export const BlueOneContainer = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  height: 65px;
  width: 250px;
`;

export const BoostContainer = styled.object<BoostContainerProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.fill};
  height: 20px;
  position: relative;
  top: 10px;
`;

export const OrangeContainer = styled.div<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  height: 65px;
  width: 250px;
  align-items: right;
  position: relative;
  right: -48px;
`;

export const OrangeBoostContainer = styled.object<BoostContainerProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.fill};
  height: 20px;
  position: relative;
  top: 10px;
`;

export const KeysBlue = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  color: white;
  position: absolute;
  top: 500px;
  left: 0px;
  line-height: 50px;
  display: table;
  font-size: 30px;
`;

export const KeysTextBlue = styled.text`
  font: Race Sport;
`;

export const KeysOrange = styled.div`
  width: 200px;
  height: 200px;
  background-color: purple;
  color: white;
  position: absolute;
  top: 500px;
  right: 0px;
  line-height: 50px;
  display: table;
  font-size: 30px;
  text-align: right;
`;

export const KeysTextOrange = styled.text``;
