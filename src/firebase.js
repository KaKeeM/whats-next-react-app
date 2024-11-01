import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfXFpNwOC7DxhNVsINdJCsiYoTli_G5PU",
    authDomain: "whatsnext-f2cf5.firebaseapp.com",
    projectId: "whatsnext-f2cf5",
    storageBucket: "whatsnext-f2cf5.appspot.com",
    messagingSenderId: "286045790318",
    appId: "1:286045790318:web:bdece5c421f2c17655467f",
    measurementId: "G-20FP431GGE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;