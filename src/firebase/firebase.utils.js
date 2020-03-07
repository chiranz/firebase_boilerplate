import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqdrX5wsgb-4KHWL7Apm6zDOrnvMPU2MI",
  authDomain: "boiler-43950.firebaseapp.com",
  databaseURL: "https://boiler-43950.firebaseio.com",
  projectId: "boiler-43950",
  storageBucket: "boiler-43950.appspot.com",
  messagingSenderId: "910819355409",
  appId: "1:910819355409:web:d9b7901e2cd5c14852bab0"
};

app.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();

const provider = new app.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
