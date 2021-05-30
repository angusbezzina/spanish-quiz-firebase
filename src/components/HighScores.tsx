import { useEffect, useState } from "react";
import firebase from "firebase/app";
import { useFirebase } from "./Firebase/FirebaseContext";

import { LoaderStyles } from '../styles/LoaderStyles';
import { HighScoresStyles } from '../styles/HighScoresStyles';
import { HomeLinkStyles } from '../styles/ButtonStyles';

import "firebase/database";

export default function HighScores() {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once("value", (snapshot: firebase.database.DataSnapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores: any) => {
    const scores = [];

    for (let key in firebaseScores) {
      const value = firebaseScores[key];
      value["key"] = key;
      scores.push(value);
    }

    return scores.sort((a, b) => b.score - a.score).slice(0, 10);
  };

  return (
    <>
      {loading && <LoaderStyles />}
      {!loading && (
        <div>
          <h1>High Scores</h1>
          <HighScoresStyles>
            {scores.map((record) => (
              <li key={record.key} className="high-score">
                {record.name} - {record.score}
              </li>
            ))}
          </HighScoresStyles>
          <HomeLinkStyles to="/">Home</HomeLinkStyles>
        </div>
      )}
    </>
  );
}
