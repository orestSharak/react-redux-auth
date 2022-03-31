import firebase from  "firebase/compat/app";
import  "firebase/compat/auth";
import {updateProfile} from 'firebase/auth';
import { firebaseConfig } from "./config";

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

const getAuthenticationStatus = () => {
  return localStorage.getItem("isAuthenticated");
};
export { auth, updateProfile, getAuthenticationStatus };
