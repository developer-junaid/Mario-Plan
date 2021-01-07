import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDtZtFNg7w_3tTjL_x8_MIGSL2rd_ZXBRg",
  authDomain: "developer-junaid-marioplan.firebaseapp.com",
  projectId: "developer-junaid-marioplan",
  storageBucket: "developer-junaid-marioplan.appspot.com",
  messagingSenderId: "747354081594",
  appId: "1:747354081594:web:497f07913d5d4424a9e803",
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timeStampsInSnapshots: true });

export default firebase;
