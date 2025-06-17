import '../css/dashboard.css';
import '../css/header.css';
import '../css/footer.css';
import {validateName } from './validation.js'
import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
  updateProfile,
  updateEmail,
  updatePassword,
  signOut,
  sendEmailVerification,
  connectAuthEmulator
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

connectAuthEmulator(auth, "http://localhost:9099");
// Monitor auth state
// const lblAuthState = document.querySelector('#lblAuthState')
// const showLoginState = (user) => {
//     lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
//   }
// console.log('dashboard.js loaded')


const userWelcome = document.querySelector('#user-welcome')
const userName = document.querySelector('#user-name')
const userEmail = document.querySelector('#user-email')

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        userWelcome.textContent = `Welcome, ${user.displayName}!`;
        userName.textContent = `${user.displayName}`;
        userEmail.textContent = `${user.email} `;
        updateVerificationStatus(user);

        // check contact form input
        document.getElementById("contact-form").addEventListener("submit", (event) => {
          event.preventDefault(); 
          // console.log('submit')

          const firstNameInput = document.getElementById("contact-firstName");
          const lastNameInput = document.getElementById("contact-lastName");
          const emailInput = document.getElementById("contact-email");

          const nameParts = user.displayName ? user.displayName.split(" ") : ["", ""];

          if (!firstNameInput.value) firstNameInput.value = nameParts[0] || "";
          if (!lastNameInput.value) lastNameInput.value = nameParts.slice(1).join(" ") || "";
          if (!emailInput.value) emailInput.value = user.email || "";

          event.target.submit(); 
      });
        
        // console.log(user)
        // showLoginState(user)
        // userPassword.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `;
        // hideLoginError()
        // hideLinkError()
      }
      else {
        // console.log('no user')
      //   showLoginForm()
        // lblAuthState.innerHTML = `You're not logged in.`
      }
    });

    // send verification email
    const verifyStatus = document.querySelector(".verify-status");
    async function sendVerificationEmail(user) {
        try {
            await sendEmailVerification(user);
            alert("Verification email sent to " + user.email);
        } catch (error) {
            alert("Error sending verification email: " + error.message);
        }
    }

    // update email verification status
    function updateVerificationStatus(user) {
        if (user.emailVerified) {
            verifyStatus.innerHTML = '<span style="color: green; font-weight: bold; padding-left: 5px;">Verified</span>';
        } else {
            verifyStatus.innerHTML = '<button class="verify-link" style="background-color:rgb(159, 27, 27); color: #fff; border: none; padding: 5px 10px; border-radius: 5px; width:auto;">Verify</button>';
            document.querySelector(".verify-link").addEventListener("click", function () {
                sendVerificationEmail(user);
            });
        }
      }
}

// Log out
const logout = async () => {
    await signOut(auth);
    console.log('logged out')
    window.location.href = '../index.html';
  }

const btnLogout = document.querySelector('#btnLogout')
btnLogout.addEventListener("click", logout)
monitorAuthState();  


// Edit Profile Functionality
document.addEventListener('DOMContentLoaded', () => {
    const editLinks = document.querySelectorAll('.edit-link');
    const saveLinks = document.querySelectorAll('.save-link');
    const cancelLinks = document.querySelectorAll('.cancel-link');
  
    editLinks.forEach((editLink, index) => {
      editLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleEditMode(index, true);
      });
    });
  
    saveLinks.forEach((saveLink, index) => {
      saveLink.addEventListener('click', (e) => {
        e.preventDefault();
        saveChanges(index);
        toggleEditMode(index, false);
        // if (validateInput(index, errorMessage)) {
        //   saveChanges(index);
        //   toggleEditMode(infoGroup, false);
        // }
      });
    });

    function validateInput(index, errorMessage) {
      const inputElements = infoGroup.querySelectorAll('input');
      const value = inputElements[index].value.trim();
      let errors = {};

      switch (index) {
          case 0: // Name
              errors = validateName(value, value); // Simulating first and last name
              break;
          case 1: // Email
              errors = validateEmail(value);
              break;
          case 2: // Password
              errors = validatePassword(value);
              break;
      }

      if (errors.name || errors.email || errors.password) {
          errorMessage.innerText = errors.name || errors.email || errors.password;
          errorMessage.style.display = 'block';
          return false;
      } else {
          errorMessage.style.display = 'none';
          return true;
      }
  }
  
    cancelLinks.forEach((cancelLink, index) => {
      cancelLink.addEventListener('click', (e) => {
        e.preventDefault();
        toggleEditMode(index, false);
      });
    });
  
    function toggleEditMode(index, isEditing) {
      const infoGroup = document.querySelectorAll('.info-group')[index];
      const displayElements = infoGroup.querySelectorAll('span');
      const inputElements = infoGroup.querySelectorAll('input');
      const editLink = infoGroup.querySelector('.edit-link');
      const saveLink = infoGroup.querySelector('.save-link');
      const cancelLink = infoGroup.querySelector('.cancel-link');

      if (isEditing) {
        displayElements.forEach((el, i) => {
            if (inputElements[i]) {
                inputElements[i].value = (index === 2) ? '' : el.textContent.trim(); // Keep password input empty for security
            }
        });
        editLink.style.visibility = 'hidden';
      } else {
          editLink.style.visibility = 'visible';
      }
  
      displayElements.forEach(el => el.style.display = isEditing ? 'none' : 'inline');
      inputElements.forEach(el => el.style.display = isEditing ? 'inline' : 'none');      
      saveLink.style.display = isEditing ? 'inline' : 'none';
      cancelLink.style.display = isEditing ? 'inline' : 'none';
    }
  
    function saveChanges(index) {
      const infoGroup = document.querySelectorAll('.info-group')[index];
      const displayElements = infoGroup.querySelectorAll('span');
      const inputElements = infoGroup.querySelectorAll('input');
  
      displayElements.forEach((el, i) => {
        if (index === 2) {
            el.textContent = "********"; // Display dots instead of actual password
        } else {
            el.textContent = inputElements[i].value;
        }
      });

      // console.log(index)
      // if (index === 0) {
      //   const value = inputElements[0].value.trim().split(/\s+/);
      //   const [firstName, lastName] = value;
      //   const nameErrorMessage = document.getElementById('nameErrorMessage');
        
      //   // Check if first and last name are filled in
      //   if (firstName === '' || lastName === '') {
      //     nameErrorMessage.style.display = 'block';
      //     nameErrorMessage.innerHTML = 'Please fill in first and last name.';
      //     // console.log('Please fill in all fields.');
      //     return;
      //   }
      
      //   // Check if names contain only English letters
      //   const namePattern = /^[A-Za-z]+$/;
      //   if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      //     nameErrorMessage.style.display = 'block';
      //     nameErrorMessage.innerHTML = 'Names must contain only English letters.';
      //     return;
      //   }

      //   updateProfile(auth.currentUser, {
      //     displayName: inputElements[0].value
      //   });
      // }
      if (index === 0) {
        const value = inputElements[0].value.trim().split(/\s+/);
        const [firstName, lastName] = value;
        const nameErrorMessage = document.getElementById('nameErrorMessage');
        nameErrorMessage.style.display = 'none';
    
        let isValid = true;
    
        // 验证输入
        if (!firstName || !lastName) {
            showError('Please fill in both first and last name.');
            isValid = false;
        }
    
        const namePattern = /^[A-Za-z]+$/;
        if (isValid && (!namePattern.test(firstName) || !namePattern.test(lastName))) {
            showError('Names must contain only English letters.');
            isValid = false;
        }
    
        // 通过所有检查后才更新
        if (isValid) {
            updateProfile(auth.currentUser, {
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                console.log('Profile updated successfully.');
            }).catch(error => {
                showError(`Failed to update profile: ${error.message}`);
            });
        }
    
        // 错误处理函数
        function showError(message) {
            nameErrorMessage.style.display = 'block';
            nameErrorMessage.textContent = message;
        }
    }
    
      if (index === 1) {
        console.log(inputElements[0].value)
        updateEmail(auth.currentUser, inputElements[0].value)
      }
      if (index === 2) {
        updatePassword(auth.currentUser, inputElements[0].value)
      }
    }
  });

// Navigation Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
