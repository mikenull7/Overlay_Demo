import styled from "styled-components";

interface NamePlateProps {
  backgroundColor: string;
}

// Statfeed Container
export const StatfeedContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 1640px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: Inter;
  width: 130px;
  font-size: 20px;
  font-weight: bold;
`;

// Statfeed Event
export const StatfeedEvent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px;
  border-radius: 8px 8px 8px 8px;
  background-color: transparent;
  color: white;
  height: 30px;
  justify-content: flex-end;
  width: 200px;
`;

// Statfeed Icon Container
export const StatfeedIconContainer = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  z-index: 100;
`;

// Statfeed Icon
export const StatfeedIcon = styled.img`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 1));
  border-radius: 100px;
`;

// Statfeed Text Container
export const StatfeedTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  position: relative;
  left: 10px;
  flex: 1;
`;

// Statfeed Primary Name
export const StatfeedPrimaryName = styled.div<NamePlateProps>`
  padding: 0 5px;
  border-radius: 5px 0 0 5px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  flex-grow: 1;
  position: absolute;
  z-index: 0;
  left: -18px;
  height: 30px;
`;

// Statfeed Secondary Name Container
export const StatfeedSecondaryNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

// Statfeed Secondary Name
export const StatfeedSecondaryName = styled.div<NamePlateProps>`
  border-radius: 0 5px 5px 0;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  min-width: 0px;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  position: absolute;
  top: -15px;
  left: 90px;
  height: 30px;
  padding-left: 20px;
  padding-top: 3px;
  padding-right: 5px;
  z-index: 0;
`;

// Keyframe animations for fade-in and fade-out effects.
export const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const fadeOut = `
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
