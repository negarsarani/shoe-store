// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
export function settingSwipper() {
  const swiper = new Swiper('.swiper', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      pagination: 'true',
      type: 'bullets',
      effect: 'fade',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      navigation: 'true',
    },
  });
  if (navigation.currentEntry.url === 'http://localhost:5173/') {
    swiper.on('slideChange', function () {
      console.log("a");
      const descpages = document.querySelector('#descpages');
      const datachange = descpages.querySelectorAll('[data-change]');
      const [description, button] = [...datachange];
      if (swiper.activeIndex === 0) {
        button.innerHTML = 'Next';
        description.innerHTML = 'We provide high quality products just for you';
      }
      if (swiper.activeIndex === 1) {
        button.innerHTML = 'Next';
        description.innerHTML = 'Your satisfaction is our number one periority';
      }
      if (swiper.activeIndex === 2) {
        description.innerHTML =
          'Let’s fulfill your fashion needs with shoearight now!';
        button.innerHTML = 'Get Started';
      }
    });
  }
}
