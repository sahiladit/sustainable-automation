import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDduFC7Vu_oGOV7hmUfM__4oCavnT4gGw",
    authDomain: "fir-test-9fa7c.firebaseapp.com",
    projectId: "fir-test-9fa7c",
    storageBucket: "fir-test-9fa7c.firebasestorage.app",
    messagingSenderId: "380793673542",
    appId: "1:380793673542:web:b0dfeb056c4d7de7a93747",
    measurementId: "G-DBT477MNZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitButton = document.getElementById("submit");
const loginbtn = document.getElementById("login");

// Function to save data in Firestore
const savedata = async (email, password) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            email: email,
            password: password, // Avoid storing raw passwords in the database.
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (err) {
        console.error("Error adding document: ", err.message);
    }
};

// Registration
submitButton.addEventListener("click", () => {
    const email = emailField.value;
    const password = passwordField.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user);
            savedata(email, password); // Save data after successful registration
        })
        .catch((err) => {
            alert(err.message);
            console.error(err.code, err.message);
        });
});

// Login
loginbtn.addEventListener("click", () => {
    const email = emailField.value;
    const password = passwordField.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            alert("Login successful");
            console.log(res.user);
        })
        .catch((err) => {
            alert(err.message);
            console.error(err.code, err.message);
        });
});
