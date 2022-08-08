import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8x0vhiQkQxbxPzjTvcbJB8Dtc44PiCAM",
  authDomain: "mygram-project-da4b0.firebaseapp.com",
  projectId: "mygram-project-da4b0",
  storageBucket: "mygram-project-da4b0.appspot.com",
  messagingSenderId: "798390467415",
  appId: "1:798390467415:web:44eb457f65afdc79addc12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

