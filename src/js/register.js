export const registerEmail = document.querySelector('#txtEmail')
export const registerPassword = document.querySelector('#txtPassword')
export const registerFirstName = document.querySelector('#txtFirstName')
export const registerLastName = document.querySelector('#txtLastName')
export const btnRegister = document.querySelector('#btnRegister')

// export const divAuthState = document.querySelector('#divAuthState')
// export const lblAuthState = document.querySelector('#lblAuthState')
// export const divRegisterError = document.querySelector('#divRegisterError')
// export const lblRegisterErrorMessage = document.querySelector('#lblRegisterErrorMessage')

// export const hideRegisterError = () => {
//   divRegisterError.style.display = 'none'
//   lblRegisterErrorMessage.innerHTML = ''
// }

// export const showRegisterError = (error) => {
//   divRegisterError.style.display = 'block'
//   lblRegisterErrorMessage.innerHTML = `Error: ${error.message}`   
//   console.log('called show register error')
//   console.log(divRegisterError, lblRegisterErrorMessage)
// }

// export const showLoginState = (user) => {
//   lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
// }
// hideRegisterError();


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