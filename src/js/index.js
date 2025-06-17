import '../css/index.css';
import '../css/header.css';
import '../css/footer.css';


// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

if (menuIcon && mobileMenu && closeMenu) {
  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
}



// Sign in - Firebase
import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  onAuthStateChanged, 
//   updateProfile,
//   updateEmail,
//   updatePassword,
//   signOut,
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

// // Attach the function to the window object to make it globally accessible
// window.switchToSignIn = function() {
//     document.getElementById('createAccountModal').classList.remove('active');
//     document.getElementById('signInModal').classList.add('active');
// };

// // Function to close all modals
// export function closeModal() {
//     document.getElementById('signInModal').classList.remove('active');
//     document.getElementById('createAccountModal').classList.remove('active');
//     document.body.style.overflow = 'auto';
// }

// // Initialize event listeners
// function initializeEventListeners() {
//     const signInButton = document.querySelector('.sign-in');
//     const modal = document.getElementById('signInModal');
//     const closeButton = document.querySelector('.close-button');
//     const showPasswordButton = document.querySelector('.show-password');

//     signInButton?.addEventListener('click', () => {
//         modal.classList.add('active');
//         document.body.style.overflow = 'hidden';
//     });

//     closeButton?.addEventListener('click', () => {
//         modal.classList.remove('active');
//         document.body.style.overflow = 'auto';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.classList.remove('active');
//             document.body.style.overflow = 'auto';
//         }
//     });

//     showPasswordButton?.addEventListener('click', function() {
//         const passwordInput = document.getElementById('signInPassword');
//         if (passwordInput.type === 'password') {
//             passwordInput.type = 'text';
//             this.textContent = 'HIDE';
//         } else {
//             passwordInput.type = 'password';
//             this.textContent = 'SHOW';
//         }
//     });

//     document.addEventListener("DOMContentLoaded", function () {
//         document.querySelector('.book-now').addEventListener('click', function(event) {
//             event.preventDefault();
//             console.log('book now clicked');
//             window.location.href = 'pages/login.html';
//         });
//     });    
// };

// // Drop Down Menu
// const menuToggle = document.querySelector('.menu-toggle');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// menuToggle.addEventListener('click', (event) => {
//     event.stopPropagation(); // Prevent the click event from bubbling up
//     dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
// });

// // Add click event to each link in the dropdown menu
// dropdownMenu.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent default anchor behavior
//         const targetId = link.getAttribute('href'); // Get the target section ID
//         const targetSection = document.querySelector(targetId); // Find the target section

//         // Scroll to the target section smoothly
//         targetSection.scrollIntoView({ behavior: 'smooth' });

//         // Hide the dropdown menu after clicking
//         dropdownMenu.style.display = 'none';
//     });
// });

// // Close the dropdown menu if clicking outside of it
// window.addEventListener('click', (event) => {
//     if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//         dropdownMenu.style.display = 'none'; // Hide the dropdown if clicked outside
//     }
// });
// ------------------------------------------------------------------------------------------



// const monitorUserIcon = async () => {
//     onAuthStateChanged(auth, user => {
//       if (user) {
//         window.location.href = '/dashboard.html'
//       }
//       else {
//         window.location.href = '/login.html'
//       }
//     })
// }

// const iconUser = document.querySelector('#user-icon')
// iconUser.addEventListener("click", monitorUserIcon)
// document.querySelector(".book-now").addEventListener("click", monitorUserIcon)


// FAQ sections
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const icon = button.querySelector('i');

        faqItem.classList.toggle('active');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});






// Reviews Section
const reviews = [
  {
    stars: 5,
    comment: "She's the best psychiatrist I've had in a long time. I instantly felt comfortable talking to her. She has such a bright smile that you can't help but smile with her.",
    date: "May 2025",
    sessions: 2
  },
  {
    stars: 5,
    comment: "I feel that she is very nice and helpful. She makes me feel comfortable with my anxiety issues.",
    date: "April 2025",
    sessions: 5
  },
  {
    stars: 5,
    comment: "She's helped me to find medication that genuinely helps me feel better, she's always asking how things are going and reminding me to take it easy. It feels like she genuinely cares about my well-being and I'm extremely grateful to have her help!",
    date: "April 2025",
    sessions: 5
  },
  {
    stars: 5,
    comment: "Amazing listener. Gave amazing advice! I think this is the start of an amazing partnership!",
    date: "April 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "Augustina is professional and personable, and I enjoy working with her. She stayed focus to the task, was a good listener, explained the diagnoses well, and gave helpful affirmations and anecdotes to lighten the mood in a relatable manner. She seems experienced and knowledgeable about medications as well.",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "Thank you for taking the time to speak with me and help.",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "She was very understanding and listened to my issues. She also provided help and offered to help in other areas.",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "Very easy to connect with. Also easy to talk to. So glad I found her!",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "She is amazing — she listens attentively and is very understanding. She is well-connected and was able to introduce me to a plan that I believe will help me.",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "She is so kind and understanding.",
    date: "March 2025",
    sessions: 1
  },
  {
    stars: 5,
    comment: "Absolutely love meeting with Augustina.",
    date: "February 2025",
    sessions: 5
  }
];

const reviewsToShow = reviews.slice(0, 11);

const container = document.getElementById("reviews-container");
reviewsToShow.forEach(review => {
  const card = document.createElement("div");
  card.className = "review-card";

  card.innerHTML = `
    <div class="review-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
    <div class="review-comment">“${review.comment}”</div>
    <div class="review-meta">${review.date} &middot; ${review.sessions} sessions</div>
  `;
  container.appendChild(card);
});