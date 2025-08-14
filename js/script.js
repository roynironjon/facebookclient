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


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all others
    faqItems.forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    // Toggle this one
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      item.classList.remove('active');
      answer.style.maxHeight = null;
    }
  });
});



// Testing Swiper with autoplay and dots only
var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 3000, 
    //     disableOnInteraction: false, 
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// dropdowan menu js code here
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const buttonColumn = document.querySelector('.button-column');
const overlay = document.getElementById('menu-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    buttonColumn.classList.toggle('active');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    buttonColumn.classList.remove('active');
    overlay.classList.remove('active');
});


// contact form input field js code here
document.querySelectorAll('.form-group select').forEach(select => {
    select.addEventListener('focus', () => {
        select.parentElement.classList.add('active');
    });

    select.addEventListener('blur', () => {
        // Jodi kichu select na kora hoy
        if (!select.value) {
            select.parentElement.classList.remove('active');
        }
    });

    // Page load e jodi value thake
    if (select.value) {
        select.parentElement.classList.add('active');
    }
});

