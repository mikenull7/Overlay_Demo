import styled from "styled-components";

interface StatCardWrapperProps {
  backgroundColor: string;
}

interface StatBoostProps {
  width: number;
  fill: string;
}

export const StatCardWrapper = styled.div<StatCardWrapperProps>`
  background-color: ${(props) => props.backgroundColor};
  color: black;
  height: 175px;
  width: 650px;
  text-align: center;
  font-family: Race Sport Regular;
  position: relative;
  margin: left;
  top: 770px;
  font-size: 40px;
`;

export const StatCardStatContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 650px;
`;

export const StartCardStatName = styled.p`
  font-size: 20px;
  margin: 1px;
`;

export const StatCardStatValue = styled.p`
  font-size: 50px;
  margin: 0;
`;

export const BoostMeterStatCardWrapper = styled.div`
  position: absolute;
  top: 25px;
  height: 20px;
  left: 0px;
`;

export const BoostMeterStatCard = styled.object<StatBoostProps>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.fill};
  height: 20px;
`;
