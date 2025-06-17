import headerHtml from '../components/header.html';
import footerHtml from '../components/footer.html';
import '../css/index.css';

document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHtml;
        // // Add click handlers after header is loaded
        // setupModalHandlers();
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHtml;
    }
});

// Modal functionality
// function setupModalHandlers() {
//     window.openModal = function() {
//         const modal = document.getElementById('signInModal');
//         if (modal) {
//             modal.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         }
//     };

//     window.closeModal = function() {
//         const modal = document.getElementById('signInModal');
//         if (modal) {
//             modal.classList.remove('active');
//             document.body.style.overflow = 'auto';
//         }
//     };

//     // Close modal when clicking outside
//     window.onclick = function(event) {
//         const modal = document.getElementById('signInModal');
//         if (event.target === modal) {
//             closeModal();
//         }
//     };
// } 