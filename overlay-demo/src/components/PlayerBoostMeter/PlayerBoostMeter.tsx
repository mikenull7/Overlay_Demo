import { GameInfoContext } from "../../contexts/GameInfoContext";
import { useContext } from "react";
import { GameService } from "../../services/GameService";
import {
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

  return (
    <>
      <BoostMeterWrapper>
        {spectatedPlayer && (
          <svg height={150 * 2} width={150 * 2}>
            <BoostMeterRing
              stroke="#000000"
              strokeDasharray={`${circumference} ${circumference}`}
              $dashOffset={BoostService.getboostbarcircumference(
                spectatedPlayer.boost,
                circumference
              )}
              strokeWidth={10}
              fill="transparent"
              r={normalizedRadius}
              cx={150}
              cy={150}
            />
            <BoostMeterInnerCircle
              fill={`#${gameInfo.color_primary.blue}`}
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
