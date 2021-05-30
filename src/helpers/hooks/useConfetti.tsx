import { useEffect } from "react";
import confetti from "canvas-confetti";

type ConfettiProps = {
  conditionsMet?: boolean;
  duration?: number;
  defaults?: { startVelocity?: number; spread?: number; ticks?: number; zIndex?: number };
};

export const useConfetti = ({
  conditionsMet = true,
  duration = 15000,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 },
}: ConfettiProps) => {
  useEffect(() => {
    if (conditionsMet) {
      let animationEnd = Date.now() + duration;
      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const confettiTrigger: ReturnType<typeof setInterval> = setInterval(
        () => {
          let timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(confettiTrigger);
          }

          let particleCount = 50 * (timeLeft / duration);
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
          );
        },
        250
      );
    }
  }, [conditionsMet, duration, defaults]);
};
