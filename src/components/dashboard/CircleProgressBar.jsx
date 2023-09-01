import React, { useEffect, useRef, useState } from "react";
import UtilCard from "../../utils/UtilCard";

const CircleProgressBar = (props) => {
  let { size, strokeWidth, innerStroke, outerStroke, progress } = props;
  const [offset, setOffset] = useState(0);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const dashArray = 2 * Math.PI * radius;
  const circleRef = useRef()

  useEffect(() => {
    const dashOffset = ((100 - progress) / 100) * dashArray;
    setOffset(dashOffset);
    circleRef.current.style = 'transition: stroke-dashoffset 600ms ease-in'
  }, [dashArray, progress]);

  return (
    <UtilCard className="flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* circle1 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={innerStroke}
          strokeWidth={strokeWidth}
          fill="none"
        ></circle>
        {/* circle2 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={outerStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={offset}
          fill="none"
          ref={circleRef}
        ></circle>
      </svg>
    </UtilCard>
  );
};

export default CircleProgressBar;
