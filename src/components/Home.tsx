import { LinkStyles } from '../styles/ButtonStyles';

export default function Home() {
  return (
    <>
      <h1>Test your Spanish!</h1>
      <LinkStyles to="/game">Start Game</LinkStyles>
      <LinkStyles to="/high-scores">High Scores</LinkStyles>
    </>
  );
}
