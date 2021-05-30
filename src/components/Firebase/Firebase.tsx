import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


class Firebase {
  db: firebase.database.Database;

  constructor() {
    firebase.initializeApp(config);
    this.db = firebase.database();
  }

  scores = () => this.db.ref('scores');
}

export default Firebase;