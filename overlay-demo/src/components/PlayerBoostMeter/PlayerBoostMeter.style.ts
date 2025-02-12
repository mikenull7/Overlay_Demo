import styled from "styled-components";

export const BoostMeterRing = styled.circle<{ $dashOffset: number }>`
  stroke-dashoffset: ${(props) => props.$dashOffset};
`;

export const BoostMeterInnerCircle = styled.circle``;

export const BoostMeterFill = styled.circle``;

export const BoostMeterText = styled.text`
  font-family: Race Sport;
  font-size: 100px;
  text-shadow: 1px 1px 40px white;
  z-index: 5;
  font-weight: bold;
`;

export const BoostMeterWrapper = styled.div`
    font-family: Race Sport;
    background-color: transparent;
    position: absolute;
    bottom: 50px;
    right: 25px;
    height: 320 px;
    width: 320px
    margin: 0px auto;
    overflow: hidden;
    transform-origin: 0 0;

    svg > circle {
        transform: rotate (-90deg);
        transform-origin: 50% 50%
    }
    ;`;
