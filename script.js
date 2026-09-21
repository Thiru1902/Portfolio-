document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Modal Logic
    const projectCards = document.querySelectorAll('.project-card');
    const overlay = document.getElementById('modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    // Open modal
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                overlay.classList.add('active');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal function
    const closeModal = () => {
        overlay.classList.remove('active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close via button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close via overlay click
    overlay.addEventListener('click', closeModal);

    // Close via Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
