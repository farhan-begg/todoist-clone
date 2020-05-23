import firebase from 'firebase/app';
import 'firebase/firestore';


// Data Base 
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDX53yT0mmbUSo1Ay0m_9znAITgpf2gBvk",
    authDomain: "todoist-clone-farhan.firebaseapp.com",
    databaseURL: "https://todoist-clone-farhan.firebaseio.com",
    projectId: "todoist-clone-farhan",
    storageBucket: "todoist-clone-farhan.appspot.com",
    messagingSenderId: "362096276724",
    appId: "1:362096276724:web:9519137854768f629b9aa1"
});

export { firebaseConfig as firebase };