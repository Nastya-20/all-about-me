// header
const modalOverlay = document.querySelector('.modal-overlay');
const burgerOpen = document.querySelector('.open-burger');
const btnClose = document.querySelector('.close-btn');
const mobileOrderBtn = document.querySelector('.order-mobile');
const navList = document.querySelector('.nav-list');
const modalClsBody = document.querySelector('body');
const modalMenu = document.querySelector('.menu-list');

export function openModalWindow() {
    modalOverlay.classList.add('is-open-header');
    burgerOpen.style.opacity = 'none';
    modalClsBody.style.overflow = '';
}

export function openMenu() {
    if (document.querySelector('.is-open-header') ) {
        modalMenu.classList.remove('is-open-header');
    }
    else {
        modalMenu.classList.add('is-open-header');
    }
}

export function closeModalWindow() {
    modalOverlay.classList.remove('is-open-header');
    burgerOpen.style.opacity = '';
    modalClsBody.style.opacity = '';
}

export function NavvMenu(evt) {
    evt.preventDefault();
    if (evt.target !== evt.currentTarget) {
        return;
    }
    else {
        modalOverlay.classList.remove('is-open-header');
        burgerOpen.style.opacity = '';
        modalClsBody.style.overflow = '';
    }
}

mobileOrderBtn.addEventListener('click', linkToFooter);

export function linkToFooter(evt) {
    evt.preventDefault();
    modalOverlay.classList.remove('is-open-header');
    burgerOpen.style.opacity = '';
    modalClsBody.style.overflow = '';

setTimeout(() => {
    document.querySelector('#worktogether').scrollIntoView({behavior: 'smooth'});
}, 100);
}

export function NavMenu(evt) {
    if (evt.target.tagName === 'A') {
        modalOverlay.classList.remove('is-open-header');
        burgerOpen.style.opacity ='';
        modalClsBody.style.overflow = '';

        const targetId = evt.target.getAttribute('href');

        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
        }, 100);
    }
}

//aboutme
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
  
export const aboutSwiper = () => {
  const swiper = new Swiper('.skills-conteiner', {
      navigation: {
      nextEl: '.my-next',
    },
    loop: true,
    speed: 400,
    mousewheel: true,
    clickable: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    },
  });
};

export function aboutme() {
  const accordion = document.querySelector('.acc-container')
  const accordions = Array.from(document.querySelectorAll('.acc-container'));
  new Accordion(accordions, {
    duration: 600,
    showMultiple: true,
    onOpen: function (currentElement) {
    },
    openOnInit: [0]
  });
}
//projects

export const swiperProjects = () => {
  const swiper = new Swiper('.projects-js', {
  slidesPerView: 1,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
    navigation: {
    nextEl: '.project-button-next',
    prevEl: '.project-button-prev',
  },
  on: {
      reachEnd: () => {
        document.querySelector('.project-button-next').classList.add('disabled');
      },
      reachBeginning: () => {
        document.querySelector('.project-button-prev').classList.add('disabled');
      },
      fromEdge: () => {
        document.querySelector('.project-button-prev').classList.remove('disabled');
        document.querySelector('.project-button-next').classList.remove('disabled');
      },
    },
});
}

//faq
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

export function faq() {
  const accordion = document.querySelector('.faq-accordion-container')

  const accordions = Array.from(document.querySelectorAll('.faq-accordion-container'));
  new Accordion(accordions, {
    duration: 600,
    showMultiple: true,
    onOpen: function (currentElement) {

    },
    //openOnInit: [0]
  });
}
//covers
export function setupCoverAnimation() {
  document.addEventListener('DOMContentLoaded', () => {
    const coversSection = document.querySelector('.cover-section');

    const options = {
      rootMargin: '0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          coversSection.classList.add('animate');
          //console.log('Animation added');
        } else {
          coversSection.classList.remove('animate');
          //console.log('Animation removed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    if (coversSection) {
      observer.observe(coversSection);
    }
  });
}
//reviews
 export const fetchReviews = async () => {
    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/reviews', {
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Not found');
        } else if (response.status === 500) {
          throw new Error('Server error');
        } else {
          throw new Error('An unknown error occurred');
        }
      }
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  export const createReviewItem = (review) => {
    return `
      <li class="swiper-slide reviews-items">
        <img class="reviews-img" src="${review.avatar_url}" alt="${review.author}" />
        <h3 class="review-author">${review.author}</h3>
        <p class="review-text">${review.review}</p>
      </li>
    `;
  };

export const initializeSlider = () => {
  const swiper = new Swiper('.reviews-swiper', {
      navigation: {
      nextEl: '.review-button-next',
      prevEl: '.review-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    on: {
      reachEnd: () => {
        document.querySelector('.review-button-next').classList.add('disabled');
      },
      reachBeginning: () => {
        document.querySelector('.review-button-prev').classList.add('disabled');
      },
      fromEdge: () => {
        document.querySelector('.review-button-prev').classList.remove('disabled');
        document.querySelector('.review-button-next').classList.remove('disabled');
      },
    },
  });
};

export const displayReviews = async () => {
  try {
    const reviews = await fetchReviews(); 
    const reviewsList = document.querySelector('.reviews-list');
    reviewsList.innerHTML = reviews.map(createReviewItem).join(''); 
    initializeSlider();
  } catch (error) {
    document.querySelector('.reviews-container').innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};
//worktogether
 export function validateEmail(email) {
        const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return emailPattern.test(email);
};
    const feedbackForm = document.querySelector('.js-form');
const modalWindow = document.querySelector('.js-modal-backdrop');
//const btnClosed = document.querySelector('.js-modal-close');

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modalWindow.classList.contains('is-open')) {
      modalWindow.classList.remove('is-open');
      document.body.style.overflow = 'auto';
  }
});

function eventHandler(e) {
  e.preventDefault();
  modalWindow.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function modalWindowClose(e) {
    const modalClose = e.target.closest('.js-modal-close');//document.querySelector('.js-modal-close');//
  if (e.target === modalWindow || modalClose) {
    modalWindow.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }
}

export { feedbackForm, modalWindow, eventHandler, modalWindowClose };
//menu
