import { ChangeEvent, useState } from "react";
import { useFirebase } from "./Firebase/FirebaseContext";

import { FormStyles } from "../styles/FormStyles";
import { ButtonStyles, LinkStyles } from "../styles/ButtonStyles";
import { useConfetti } from "../helpers/hooks/useConfetti";

type SavedScoreProps = {
  score: number;
  scoreSaved: () => void;
};

export default function SaveScoreForm({ score, scoreSaved }: SavedScoreProps) {
  const [username, setUsername] = useState("");
  const firebase = useFirebase();

  useConfetti({});

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
  };

  const saveHighScore = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const record = {
      name: username,
      score,
    };
    console.log(record);
    firebase.scores().push(record, () => {
      console.log("Score saved!");
      scoreSaved();
    });
  };

  return (
    <div className="container">
      <h1 className="score-title">Score: {score}</h1>
      <h1 className="score-title">
        {" "}
        {score > 800
          ? `🥳 🥳 🥳`
          : score > 600
          ? `🥳 🥳`
          : score > 400
          ? `🥳 🥳`
          : ""}
      </h1>
      <FormStyles onSubmit={saveHighScore}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange}
        />
        <ButtonStyles type="submit" disabled={!username}>
          Save
        </ButtonStyles>
      </FormStyles>
      <LinkStyles to="/">Go Home</LinkStyles>
    </div>
  );
}
