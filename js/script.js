console.log("JS loaded"); // debug line

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

console.log(hamburger, mobileMenu); // check if found

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});







/* PRODUCT MAIN CAROUSEL */

const thumbs = document.querySelectorAll(".thumb");

const trackMain =
  document.querySelector(".main-track");

const prevArrow =
  document.querySelector(".nav.prev");

const nextArrow =
  document.querySelector(".nav.next");

let currentImageIndex = 0;

function updateCarousel(index) {

  currentImageIndex = index;

  const imageWidth =
    document.querySelector(".main-image").offsetWidth;

  trackMain.style.transform =
    `translateX(-${imageWidth * currentImageIndex}px)`;

  thumbs.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  thumbs[currentImageIndex]
    .classList.add("active");
}

/* NEXT */
nextArrow.addEventListener("click", () => {

  currentImageIndex++;

  if (currentImageIndex >= thumbs.length) {
    currentImageIndex = 0;
  }

  updateCarousel(currentImageIndex);
});

/* PREV */
prevArrow.addEventListener("click", () => {

  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = thumbs.length - 1;
  }

  updateCarousel(currentImageIndex);
});

/* THUMB CLICK */
thumbs.forEach((thumb, index) => {

  thumb.addEventListener("click", () => {
    updateCarousel(index);
  });

});


const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});




const quoteModal = document.getElementById("quoteModal");

const openQuoteModal =
  document.getElementById("openQuoteModal");

const closeQuoteModal =
  document.getElementById("closeQuoteModal");


/* OPEN */
openQuoteModal.addEventListener("click", () => {
  quoteModal.classList.add("active");
});


/* CLOSE BUTTON */
closeQuoteModal.addEventListener("click", () => {
  quoteModal.classList.remove("active");
});


/* CLOSE OUTSIDE */
quoteModal.addEventListener("click", (e) => {

  if (e.target === quoteModal) {
    quoteModal.classList.remove("active");
  }

});



const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");

  });

});





const track = document.querySelector(".applications-track");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const cards = document.querySelectorAll(".application-card");

let currentIndex = 0;

function getCardWidth() {
  return cards[0].offsetWidth + 20;
}

nextBtn.addEventListener("click", () => {

  const maxIndex = cards.length - 1;

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  track.style.transform =
    `translateX(-${currentIndex * getCardWidth()}px)`;
});

prevBtn.addEventListener("click", () => {

  const maxIndex = cards.length - 1;

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }

  track.style.transform =
    `translateX(-${currentIndex * getCardWidth()}px)`;
});





/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonialTrack =
  document.querySelector(".testimonial-track");

const testimonialCards =
  document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function moveTestimonialSlider() {

  const cardWidth =
    testimonialCards[0].offsetWidth + 24;

  testimonialTrack.style.transform =
    `translateX(-${testimonialIndex * cardWidth}px)`;
}


/* AUTO SLIDE */

setInterval(() => {

  testimonialIndex++;

  if (testimonialIndex >= testimonialCards.length - 2) {
    testimonialIndex = 0;
  }

  moveTestimonialSlider();

}, 3000);