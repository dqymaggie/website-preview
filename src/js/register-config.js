import '../css/login.css';
import '../css/footer.css';

import {
  registerEmail,
  registerPassword,
  registerFirstName,
  registerLastName,
  btnRegister,
  // showLoginState
} from './register'

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  // onAuthStateChanged, 
  // sendEmailVerification,
  connectAuthEmulator
} from 'firebase/auth';

// import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA",
    authDomain: "rosewell-website.firebaseapp.com",
    projectId: "rosewell-website",
    storageBucket: "rosewell-website.firebasestorage.app",
    messagingSenderId: "37800874810",
    appId: "1:37800874810:web:0ffdb95d077b0f546eb603"
  });
   
const auth = getAuth(firebaseApp);

// ------------------------------------------------------------------------------------------
connectAuthEmulator(auth, "http://localhost:9099");

// // Monitor auth state
// const monitorAuthState = async () => {
//   onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user)
//       showLoginState(user)
//       hideRegisterError()
//     }
//     else {
//       // lblAuthState.innerHTML = `You're not logged in.`
//     }
//   })
// }

// monitorAuthState();
// // ------------------------------------------------------------------------------------------


// Create new account using email/password
const createAccount = async () => {
  const email = registerEmail.value;
  const password = registerPassword.value;
  const firstName = registerFirstName.value;
  const lastName = registerLastName.value;
  const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
  
  // Check if first and last name are filled in
  if (firstName === '' || lastName === '') {
    lblLoginErrorMessage.style.display = 'block';
    lblLoginErrorMessage.innerHTML = 'Please fill in first and last name.';
    // console.log('Please fill in all fields.');
    return;
  }

  // Check if names contain only English letters
  const namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    lblLoginErrorMessage.style.display = 'block';
    lblLoginErrorMessage.innerHTML = 'Names must contain only English letters.';
    return;
  }

  // Check for valid password
  const passwordError = document.getElementById('password-error');
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.style.display = 'block';
    return;
  } else {
    passwordError.style.display = 'none';
      // Proceed with form submission or further processing
      // console.log('Password is valid!');
      // alert('Password is valid!');
  }

  // create user account on Firebase
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`
    });
    console.log('Account created and user data stored successfully');

    window.location.href = 'dashboard.html';
  }
  catch(error) {
    // console.log(`There was an error: ${error}`);
    // console.log(error);
    const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage');
    lblLoginErrorMessage.style.display = 'block';
    
    // Map error codes to user-friendly messages
    const errorMessages = {
      'auth/missing-email': 'Please enter an email address.',
      'auth/missing-password': 'Please enter a password.',
      'auth/invalid-email': 'Invalid email address. Please check and try again.',
      'auth/user-disabled': 'This account has been disabled. Please contact support.',
      'auth/user-not-found': 'No account found with this email. Please sign up.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
    };

    // Display the user-friendly message or a default message
    lblLoginErrorMessage.innerHTML = errorMessages[error.code] || 'An unexpected error occurred. Please try again.';
  } 
}

// import { validateName, validateEmail, validatePassword } from './validation.js';

// const createAccount = async () => {
//   const email = registerEmail.value;
//   const password = registerPassword.value;
//   const firstName = registerFirstName.value;
//   const lastName = registerLastName.value;

//   const nameErrors = validateName(firstName, lastName);
//   const emailErrors = validateEmail(email);
//   const passwordErrors = validatePassword(password);

//   document.getElementById('nameErrorMessage').innerText = nameErrors.name || '';
//   document.getElementById('emailErrorMessage').innerText = emailErrors.email || '';
//   document.getElementById('passwordErrorMessage').innerText = passwordErrors.password || '';

//   if (Object.keys(nameErrors).length || Object.keys(emailErrors).length || Object.keys(passwordErrors).length) {
//     return;
//   }

//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     await updateProfile(user, { displayName: `${firstName} ${lastName}` });
//     console.log('Account created successfully');

//     window.location.href = 'dashboard.html';
//   } catch (error) {
//     document.getElementById('lblLoginErrorMessage').innerText = 'An unexpected error occurred. Please try again.';
//   }
// };

// btnRegister.addEventListener("click", createAccount);


btnRegister.addEventListener("click", createAccount)