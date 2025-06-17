/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateEmail: () => (/* binding */ validateEmail),\n/* harmony export */   validateName: () => (/* binding */ validateName),\n/* harmony export */   validatePassword: () => (/* binding */ validatePassword)\n/* harmony export */ });\n// import {\n//     registerEmail,\n//     registerPassword,\n//     registerFirstName,\n//     registerLastName,\n//     btnRegister,\n//     // showLoginState\n//   } from './register'\n\n//   import { initializeApp } from 'firebase/app';\n//   import { \n//     getAuth,\n//     createUserWithEmailAndPassword,\n//     updateProfile,\n//     // onAuthStateChanged, \n//     // sendEmailVerification,\n//     connectAuthEmulator\n//   } from 'firebase/auth';\n\n//   const firebaseApp = initializeApp({\n//       apiKey: \"AIzaSyBobHXt_J2kNDxSHoLKKC8YP9Unuj7mCvA\",\n//       authDomain: \"rosewell-website.firebaseapp.com\",\n//       projectId: \"rosewell-website\",\n//       storageBucket: \"rosewell-website.firebasestorage.app\",\n//       messagingSenderId: \"37800874810\",\n//       appId: \"1:37800874810:web:0ffdb95d077b0f546eb603\"\n//     });\n\n//   const auth = getAuth(firebaseApp);\n\nconst validateName = (firstName, lastName) => {\n  const namePattern = /^[A-Za-z]+$/;\n  let errors = {};\n  if (!firstName || !lastName) {\n    errors.name = 'Please fill in first and last name.';\n  } else if (!namePattern.test(firstName) || !namePattern.test(lastName)) {\n    errors.name = 'Names must contain only English letters.';\n  }\n  return errors;\n};\nconst validateEmail = email => {\n  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  let errors = {};\n  if (!email) {\n    errors.email = 'Please enter an email address.';\n  } else if (!emailPattern.test(email)) {\n    errors.email = 'Invalid email format.';\n  }\n  return errors;\n};\nconst validatePassword = password => {\n  const passwordPattern = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;\n  let errors = {};\n  if (!password) {\n    errors.password = 'Please enter a password.';\n  } else if (!passwordPattern.test(password)) {\n    errors.password = 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.';\n  }\n  return errors;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdmFsaWRhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVTLE1BQU1BLFlBQVksR0FBR0EsQ0FBQ0MsU0FBUyxFQUFFQyxRQUFRLEtBQUs7RUFDbkQsTUFBTUMsV0FBVyxHQUFHLGFBQWE7RUFDakMsSUFBSUMsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUVmLElBQUksQ0FBQ0gsU0FBUyxJQUFJLENBQUNDLFFBQVEsRUFBRTtJQUMzQkUsTUFBTSxDQUFDQyxJQUFJLEdBQUcscUNBQXFDO0VBQ3JELENBQUMsTUFBTSxJQUFJLENBQUNGLFdBQVcsQ0FBQ0csSUFBSSxDQUFDTCxTQUFTLENBQUMsSUFBSSxDQUFDRSxXQUFXLENBQUNHLElBQUksQ0FBQ0osUUFBUSxDQUFDLEVBQUU7SUFDdEVFLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHLDBDQUEwQztFQUMxRDtFQUVBLE9BQU9ELE1BQU07QUFDZixDQUFDO0FBRU0sTUFBTUcsYUFBYSxHQUFJQyxLQUFLLElBQUs7RUFDdEMsTUFBTUMsWUFBWSxHQUFHLDRCQUE0QjtFQUNqRCxJQUFJTCxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBRWYsSUFBSSxDQUFDSSxLQUFLLEVBQUU7SUFDVkosTUFBTSxDQUFDSSxLQUFLLEdBQUcsZ0NBQWdDO0VBQ2pELENBQUMsTUFBTSxJQUFJLENBQUNDLFlBQVksQ0FBQ0gsSUFBSSxDQUFDRSxLQUFLLENBQUMsRUFBRTtJQUNwQ0osTUFBTSxDQUFDSSxLQUFLLEdBQUcsdUJBQXVCO0VBQ3hDO0VBRUEsT0FBT0osTUFBTTtBQUNmLENBQUM7QUFFTSxNQUFNTSxnQkFBZ0IsR0FBSUMsUUFBUSxJQUFLO0VBQzVDLE1BQU1DLGVBQWUsR0FBRyx1Q0FBdUM7RUFDL0QsSUFBSVIsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUVmLElBQUksQ0FBQ08sUUFBUSxFQUFFO0lBQ2JQLE1BQU0sQ0FBQ08sUUFBUSxHQUFHLDBCQUEwQjtFQUM5QyxDQUFDLE1BQU0sSUFBSSxDQUFDQyxlQUFlLENBQUNOLElBQUksQ0FBQ0ssUUFBUSxDQUFDLEVBQUU7SUFDMUNQLE1BQU0sQ0FBQ08sUUFBUSxHQUFHLDBHQUEwRztFQUM5SDtFQUVBLE9BQU9QLE1BQU07QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9zZXdlbGwvLi9zcmMvanMvdmFsaWRhdGlvbi5qcz8xMmVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IHtcbi8vICAgICByZWdpc3RlckVtYWlsLFxuLy8gICAgIHJlZ2lzdGVyUGFzc3dvcmQsXG4vLyAgICAgcmVnaXN0ZXJGaXJzdE5hbWUsXG4vLyAgICAgcmVnaXN0ZXJMYXN0TmFtZSxcbi8vICAgICBidG5SZWdpc3Rlcixcbi8vICAgICAvLyBzaG93TG9naW5TdGF0ZVxuLy8gICB9IGZyb20gJy4vcmVnaXN0ZXInXG4gIFxuLy8gICBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbi8vICAgaW1wb3J0IHsgXG4vLyAgICAgZ2V0QXV0aCxcbi8vICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4vLyAgICAgdXBkYXRlUHJvZmlsZSxcbi8vICAgICAvLyBvbkF1dGhTdGF0ZUNoYW5nZWQsIFxuLy8gICAgIC8vIHNlbmRFbWFpbFZlcmlmaWNhdGlvbixcbi8vICAgICBjb25uZWN0QXV0aEVtdWxhdG9yXG4vLyAgIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG4gICAgXG4vLyAgIGNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcCh7XG4vLyAgICAgICBhcGlLZXk6IFwiQUl6YVN5Qm9iSFh0X0oya05EeFNIb0xLS0M4WVA5VW51ajdtQ3ZBXCIsXG4vLyAgICAgICBhdXRoRG9tYWluOiBcInJvc2V3ZWxsLXdlYnNpdGUuZmlyZWJhc2VhcHAuY29tXCIsXG4vLyAgICAgICBwcm9qZWN0SWQ6IFwicm9zZXdlbGwtd2Vic2l0ZVwiLFxuLy8gICAgICAgc3RvcmFnZUJ1Y2tldDogXCJyb3Nld2VsbC13ZWJzaXRlLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbi8vICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3ODAwODc0ODEwXCIsXG4vLyAgICAgICBhcHBJZDogXCIxOjM3ODAwODc0ODEwOndlYjowZmZkYjk1ZDA3N2IwZjU0NmViNjAzXCJcbi8vICAgICB9KTtcbiAgICAgXG4vLyAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcblxuICBleHBvcnQgY29uc3QgdmFsaWRhdGVOYW1lID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IHtcbiAgICBjb25zdCBuYW1lUGF0dGVybiA9IC9eW0EtWmEtel0rJC87XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICBcbiAgICBpZiAoIWZpcnN0TmFtZSB8fCAhbGFzdE5hbWUpIHtcbiAgICAgIGVycm9ycy5uYW1lID0gJ1BsZWFzZSBmaWxsIGluIGZpcnN0IGFuZCBsYXN0IG5hbWUuJztcbiAgICB9IGVsc2UgaWYgKCFuYW1lUGF0dGVybi50ZXN0KGZpcnN0TmFtZSkgfHwgIW5hbWVQYXR0ZXJuLnRlc3QobGFzdE5hbWUpKSB7XG4gICAgICBlcnJvcnMubmFtZSA9ICdOYW1lcyBtdXN0IGNvbnRhaW4gb25seSBFbmdsaXNoIGxldHRlcnMuJztcbiAgICB9XG4gIFxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG4gIFxuICBleHBvcnQgY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbCkgPT4ge1xuICAgIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xuICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgXG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgZXJyb3JzLmVtYWlsID0gJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLic7XG4gICAgfSBlbHNlIGlmICghZW1haWxQYXR0ZXJuLnRlc3QoZW1haWwpKSB7XG4gICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBmb3JtYXQuJztcbiAgICB9XG4gIFxuICAgIHJldHVybiBlcnJvcnM7XG4gIH07XG4gIFxuICBleHBvcnQgY29uc3QgdmFsaWRhdGVQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkUGF0dGVybiA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKS57OCx9JC87XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICBcbiAgICBpZiAoIXBhc3N3b3JkKSB7XG4gICAgICBlcnJvcnMucGFzc3dvcmQgPSAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQuJztcbiAgICB9IGVsc2UgaWYgKCFwYXNzd29yZFBhdHRlcm4udGVzdChwYXNzd29yZCkpIHtcbiAgICAgIGVycm9ycy5wYXNzd29yZCA9ICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIGFuZCBvbmUgbnVtYmVyLic7XG4gICAgfVxuICBcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9O1xuICAiXSwibmFtZXMiOlsidmFsaWRhdGVOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJuYW1lUGF0dGVybiIsImVycm9ycyIsIm5hbWUiLCJ0ZXN0IiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwiZW1haWxQYXR0ZXJuIiwidmFsaWRhdGVQYXNzd29yZCIsInBhc3N3b3JkIiwicGFzc3dvcmRQYXR0ZXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/validation.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/validation.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;