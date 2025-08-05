document.addEventListener("DOMContentLoaded", () => {
const statsSection = document.querySelector(".stats-wrapper");
const stats = document.querySelectorAll(".number");
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        stats.forEach((stat) => {
        const target = parseInt(stat.innerText.replace(/\D/g, ""), 10);
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const updateCount = () => {
            count += increment;
            if (count < target) {
            stat.innerText = Math.floor(count) + "+";
            requestAnimationFrame(updateCount);
            } else {
            stat.innerText = target + "+";
            }
        };

        updateCount();
        });
        observer.unobserve(statsSection);
    }
    });
}, options);

if (statsSection) {
    observer.observe(statsSection);
}
});



 document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const questionButton = item.querySelector('.faq-question');
            const answerDiv = item.querySelector('.faq-answer');

            questionButton.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });

                // Toggle the clicked item
                if (isActive) {
                    item.classList.remove('active');
                    answerDiv.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    // Set max-height to the scrollHeight for smooth transition
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
                }
            });

            // Handle initial state on page load for the pre-active item
            if (item.classList.contains('active')) {
                answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
            }
        });
    });