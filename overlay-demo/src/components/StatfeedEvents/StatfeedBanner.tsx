import { useContext, useEffect, useState } from "react";
import { StatfeedInfoContext } from "../../contexts/StatfeedInfoContext";
import { StatfeedEvent } from "../../models/StatfeedEvent/StatfeedEvent";
import {
  StatfeedContainer,
  StatfeedEvent as StyledStatfeedEvent,
  StatfeedIconContainer,
  StatfeedIcon,
  StatfeedTextContainer,
  StatfeedPrimaryName,
  StatfeedSecondaryNameContainer,
  StatfeedSecondaryName,
} from "./StatfeedBanner.style";
import { GameInfoContext } from "../../contexts/GameInfoContext";

const StatfeedBanner = () => {
  const { statfeedInfo } = useContext(StatfeedInfoContext);
  const [events, setEvents] = useState<JSX.Element[]>([]);

  const gameInfo = useContext(GameInfoContext);

  const BlueTeamPrimaryColor = gameInfo.gameInfo.color_primary.blue;
  const OrangeTeamPrimaryColor = gameInfo.gameInfo.color_primary.orange;

  useEffect(() => {
    if (statfeedInfo) {
      handleStatfeedEvent(statfeedInfo);
    }
  }, [statfeedInfo]);

  const handleStatfeedEvent = (data: StatfeedEvent) => {
    const statEventType = data.type;
    const primaryTarget = data.main_target;
    const secondaryTarget = data.secondary_target;

    // Extract team colors from the packet (blue or orange)
    const primaryTeamColor =
      primaryTarget?.team_num === 0
        ? BlueTeamPrimaryColor
        : OrangeTeamPrimaryColor;
    const secondaryTeamColor =
      secondaryTarget?.team_num === 0
        ? BlueTeamPrimaryColor
        : OrangeTeamPrimaryColor;

    const primaryTargetName = primaryTarget ? primaryTarget.name : "";
    const secondaryTargetName = secondaryTarget ? secondaryTarget.name : "";

    // Set the background color of the secondary name based on the target's existence
    const secondaryBackgroundColor = secondaryTargetName
      ? secondaryTeamColor
      : "transparent"; // If no secondary target, set it to transparent

    // Create an event element
    const newEvent = (
      <StyledStatfeedEvent key={Date.now()}>
        <StatfeedIconContainer>
          <StatfeedIcon
            src={`/stat_icons/${statEventType}.png`}
            alt={`${statEventType} icon`}
            onError={(e) => {
              e.currentTarget.src = "/Images/BlueTeam.png"; // Fallback image if not found
            }}
          />
        </StatfeedIconContainer>
        <StatfeedTextContainer>
          <StatfeedPrimaryName backgroundColor={`#${primaryTeamColor}`}>
            {primaryTargetName}
          </StatfeedPrimaryName>

          {/* Conditionally render the secondary target name only if it exists */}
          {secondaryTarget ? (
            <StatfeedSecondaryNameContainer>
              <StatfeedSecondaryName
                backgroundColor={`#${secondaryBackgroundColor}`}
              >
                {secondaryTargetName}
              </StatfeedSecondaryName>
            </StatfeedSecondaryNameContainer>
          ) : null}
        </StatfeedTextContainer>
      </StyledStatfeedEvent>
    );

    // Add the new event to the queue, but make sure we only keep the latest 3
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      if (updatedEvents.length > 3) {
        updatedEvents.shift(); // Remove the first (oldest) event if we have more than 3
      }
      return updatedEvents;
    });

    // Automatically remove events after a certain period (3 seconds)
    setTimeout(() => {
      const eventElement = document.querySelector(`.fade-in`);
      if (eventElement) {
        eventElement.classList.add("fade-out"); // Trigger fade-out animation
      }
      setTimeout(() => {
        setEvents((prevEvents) => prevEvents.filter((_, index) => index !== 0)); // Remove the first event after fade-out
      }, 1000); // Match duration of fade-out animation
    }, 3000); // 3-second timer for each event
  };

  return (
    <StatfeedContainer id="statfeed-container">{events}</StatfeedContainer>
  );
};

export default StatfeedBanner;
