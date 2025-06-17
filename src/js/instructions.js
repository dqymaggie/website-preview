import '../css/instructions.css';
import '../css/header.css';
import '../css/footer.css';

document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const steps = document.querySelectorAll('.steps');

    // Function to update active dot
    function updateActiveDot(stepNumber) {
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.step === stepNumber.toString()) {
                dot.classList.add('active');
            }
        });
    }

    // Intersection Observer to detect which step is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNumber = Array.from(steps).indexOf(entry.target) + 1;
                updateActiveDot(stepNumber);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe all steps
    steps.forEach(step => observer.observe(step));

    // Click handler for dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const stepNumber = parseInt(dot.dataset.step);
            steps[stepNumber - 1].scrollIntoView({ behavior: 'smooth' });
        });
    });
});
