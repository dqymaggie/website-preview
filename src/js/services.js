import '../css/services.css';
import '../css/header.css';
import '../css/footer.css';

import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA",
    authDomain: "rosewell-website.firebaseapp.com",
    projectId: "rosewell-website",
    storageBucket: "rosewell-website.firebasestorage.app",
    messagingSenderId: "37800874810",
    appId: "1:37800874810:web:0ffdb95d077b0f546eb603"
  });
   
const auth = getAuth(firebaseApp);



const monitorUserIcon = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        window.location.href = '/dashboard.html'
      }
      else {
        window.location.href = '/login.html'
      }
    })
}

const iconUser = document.querySelector('#user-icon')
iconUser.addEventListener("click", monitorUserIcon)
document.querySelector(".book-now").addEventListener("click", monitorUserIcon)