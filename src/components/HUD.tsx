import ProgressBar from "./ProgressBar";

import { HUDStyles } from '../styles/HUDStyles';

type HUDProps = {
  score: number;
  questionNumber: number;
}

const HUD: React.FC<HUDProps> = ({ score, questionNumber }) => {
  return (
    <HUDStyles>
      <div className="hud-item">
        <p className="hud-prefix">Question {questionNumber}/10</p>
        <ProgressBar max={10} current={questionNumber} />
      </div>
      <div className="hud-item">
        <p className="hud-prefix">Score</p>
        <h1 className="hud-main-text">{score}</h1>
      </div>
    </HUDStyles>
  );
}

export default HUD;
