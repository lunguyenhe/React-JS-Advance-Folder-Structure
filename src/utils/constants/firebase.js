// Import các module từ Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Import Firestore từ Firebase
import { getDatabase } from "firebase/database";  // Import Firestore từ Firebase

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAI9zY-45kGJAsLfplFnakRIPYYLU8DYE4",
  authDomain: "schoolonline-chat.firebaseapp.com",
  databaseURL: "https://schoolonline-chat.firebaseio.com",
  projectId: "schoolonline-chat",
  storageBucket: "schoolonline-chat.appspot.com",
  messagingSenderId: "613645163481",
  appId: "1:613645163481:web:899047d4ab2b888b8ad7c8",
  measurementId: "G-FVZ4YRBWD3",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo các service cần thiết
const database = getDatabase(app);
const auth = getAuth(app);
const db = getFirestore(app);  // Sử dụng getFirestore để khởi tạo Firestore

// Export các service đã khởi tạo
export { app, auth, db,database };  // Export db thay vì firestore
