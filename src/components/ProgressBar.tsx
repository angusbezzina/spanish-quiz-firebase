import React from "react";

import { ProgressBarStyles } from "../styles/HUDStyles";

type ProgressBarProps = {
  max: number;
  current: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ max, current }) => {
  const width = (current / max) * 100;
  return (
    <ProgressBarStyles>
      <div className="progress-bar-full" style={{ width: `${width}%` }}></div>
    </ProgressBarStyles>
  );
};

export default ProgressBar;
