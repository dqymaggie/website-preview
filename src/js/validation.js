
// import {
//     registerEmail,
//     registerPassword,
//     registerFirstName,
//     registerLastName,
//     btnRegister,
//     // showLoginState
//   } from './register'
  
//   import { initializeApp } from 'firebase/app';
//   import { 
//     getAuth,
//     createUserWithEmailAndPassword,
//     updateProfile,
//     // onAuthStateChanged, 
//     // sendEmailVerification,
//     connectAuthEmulator
//   } from 'firebase/auth';
    
//   const firebaseApp = initializeApp({
//       apiKey: "AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA",
//       authDomain: "rosewell-website.firebaseapp.com",
//       projectId: "rosewell-website",
//       storageBucket: "rosewell-website.firebasestorage.app",
//       messagingSenderId: "37800874810",
//       appId: "1:37800874810:web:0ffdb95d077b0f546eb603"
//     });
     
//   const auth = getAuth(firebaseApp);

  export const validateName = (firstName, lastName) => {
    const namePattern = /^[A-Za-z]+$/;
    let errors = {};
  
    if (!firstName || !lastName) {
      errors.name = 'Please fill in first and last name.';
    } else if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      errors.name = 'Names must contain only English letters.';
    }
  
    return errors;
  };
  
  export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
  
    if (!email) {
      errors.email = 'Please enter an email address.';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email format.';
    }
  
    return errors;
  };
  
  export const validatePassword = (password) => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let errors = {};
  
    if (!password) {
      errors.password = 'Please enter a password.';
    } else if (!passwordPattern.test(password)) {
      errors.password = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.';
    }
  
    return errors;
  };
  