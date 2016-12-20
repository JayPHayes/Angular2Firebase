import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyB2a_xOV4MkRglXpKyiofy5GdTBojpcJ2g",
    authDomain: "final-project-recording-7c178.firebaseapp.com",
    databaseURL: "https://final-project-recording-7c178.firebaseio.com",
    storageBucket: "final-project-recording-7c178.appspot.com",
    messagingSenderId: "451095219737"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};