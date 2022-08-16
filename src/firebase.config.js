import {getApp ,getApps ,initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA74ZfVGGyk3nZ0Sy1qp2oUoBtDCOA5lqg",
    authDomain: "city-dd854.firebaseapp.com",
    databaseURL: "https://city-dd854-default-rtdb.firebaseio.com",
    projectId: "city-dd854",
    storageBucket: "city-dd854.appspot.com",
    messagingSenderId: "862576688748",
    appId: "1:862576688748:web:c371b5e8b86ef868c0e249"
  };

  const app =  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export {app, firestore , storage}