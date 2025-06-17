export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')

export const btnLogin = document.querySelector('#btnLogin')
export const btnRegister = document.querySelector('#btnRegister')


// password toggle
export function initializeTogglePassword() {
  const showPasswordButton = document.querySelector('#show-password');
  const hidePasswordButton = document.querySelector('#hide-password');
  const passwordField = document.querySelector('#txtPassword');

  showPasswordButton.addEventListener('click', function() {
    passwordField.type = 'text';
    showPasswordButton.style.display = 'none';
    hidePasswordButton.style.display = 'inline-flex';
  });

  hidePasswordButton.addEventListener('click', function() {
    passwordField.type = 'password';
    hidePasswordButton.style.display = 'none';
    showPasswordButton.style.display = 'inline-flex';
  });
}

initializeTogglePassword();



// ------------------------------------------------------------------------------------------
// export const btnLogout = document.querySelector('#btnLogout')
// export const divAuthState = document.querySelector('#divAuthState')
// export const lblAuthState = document.querySelector('#lblAuthState')
// export const divLoginError = document.querySelector('#divLoginError')
// export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

// export const showLoginState = (user) => {
//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
// }
// export const hideLoginError = () => {
//   divLoginError.style.display = 'none'
//   lblLoginErrorMessage.innerHTML = ''
// }

// export const showLoginError = (error) => {
//   const divLoginError = document.getElementById('divLoginError')
//   const lblLoginErrorMessage = document.getElementById('lblLoginErrorMessage')

//   if (!divLoginError || !lblLoginErrorMessage) {
//     console.error('Login error elements not found in DOM')
//     return
//   }

//   divLoginError.style.display = 'block';

//   if (typeof error === 'string') {
//     lblLoginErrorMessage.innerHTML = error;
//   } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
//     lblLoginErrorMessage.innerHTML = `Wrong Password, please try again.`;
//   } else if (error.code === 'auth/invalid-email') {
//     lblLoginErrorMessage.innerHTML = `Invalid email!`;
//   } else {
//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
//   }
// };


// export const showLoginError = (error) => {
//   divLoginError.style.display = 'block'

//   if (typeof error === 'string') {
//     lblLoginErrorMessage.innerHTML = error;
//   } else if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
//     lblLoginErrorMessage.innerHTML = `Wrong Password, please try again.`;
//   } else if (error.code === 'auth/invalid-email') {
//     lblLoginErrorMessage.innerHTML = `Invalid email!`;
//   } else {
//     lblLoginErrorMessage.innerHTML = `Error: ${error.message}`      
//   }
// }

// hideLoginError();
// showLoginError('test error');

// console.log("login.js loaded");
// ------------------------------------------------------------------------------------------