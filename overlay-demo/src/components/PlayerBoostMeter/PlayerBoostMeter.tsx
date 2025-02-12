import { GameInfoContext } from "../../contexts/GameInfoContext";
import { useContext } from "react";
import { GameService } from "../../services/GameService";
import {
  BoostMeterFill,
  BoostMeterInnerCircle,
  BoostMeterRing,
  BoostMeterText,
  BoostMeterWrapper,
} from "./PlayerBoostMeter.style";
import { BoostService } from "../../services/boostservice";

export const PlayerBoostMeter = () => {
  const { gameInfo } = useContext(GameInfoContext);

  const spectatedPlayer = GameService.getPlayerFromTarget(
    gameInfo.players,
    gameInfo.target
  );

  const normalizedRadius = 150 - 10 * 2; // inner radius - thickness of ring * 2
  const circumference = normalizedRadius * 2 * Math.PI;
  const BluePrimaryColor = gameInfo.color_primary.blue;
  const OrangePrimaryColor = gameInfo.color_primary.orange;
  const BlueSecondaryColor = gameInfo.color_secondary.blue;
  const OrangeSecondaryColor = gameInfo.color_secondary.orange;

  const FillColor =
    spectatedPlayer?.team! == 0 ? BluePrimaryColor : OrangePrimaryColor;
  const StrokeColor =
    spectatedPlayer?.team! == 0 ? BlueSecondaryColor : OrangeSecondaryColor;

  return (
    <>
      <BoostMeterWrapper>
        {spectatedPlayer && (
          <svg height={150 * 2} width={150 * 2}>
            <BoostMeterRing
              stroke={`#${StrokeColor}`}
              strokeDasharray={`${circumference} ${circumference}`}
              $dashOffset={BoostService.getboostbarcircumference(
                spectatedPlayer.boost,
                circumference
              )}
              strokeWidth={20}
              fill="transparent"
              r={normalizedRadius}
              cx={150}
              cy={150}
            />
            <BoostMeterInnerCircle
              fill="transparent"
              r={normalizedRadius - 10 / 2}
              cx="50%"
              cy="50%"
            />
            <BoostMeterFill
              fill={`#${FillColor}`}
              r={normalizedRadius - 10 / 2}
              cx="50%"
              cy="50%"
            />
            <BoostMeterText
              fill="#000000"
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
            >
              {spectatedPlayer.boost}
            </BoostMeterText>
          </svg>
        )}
      </BoostMeterWrapper>
    </>
  );
};
