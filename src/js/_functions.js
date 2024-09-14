// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

Fancybox.bind();

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('products-tabs');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Autoplay } from "swiper";

// const reviewsSwiper = new Swiper(".reviews__swiper", {
//   modules: [Scrollbar, Navigation],
//   slidesPerView: 3,
//   spaceBetween: 30,
//   autoHeight: false,
//   scrollbar: {
//     el: ".reviews__scrollbar",
//     draggable: true,
//   },
// });

const gallerySwiper = new Swiper('.gallery__swiper', {
  modules: [Autoplay],
  slidesPerView: 4,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    stopOnLastSlide: false,
    pauseOnMouseEnter: false,
  },
  allowTouchMove: false,
  speed: 4500,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
});

// window.productsSwiper_1 = new Swiper(".products__swiper-1", {
//   modules: [Scrollbar, Navigation],
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: false,
//   scrollbar: {
//     el: ".swiper-scrollbar-1",
//     draggable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next-1",
//     prevEl: ".swiper-button-prev-1",
//   },
//   breakpoints: {
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 15,
//     }
//   }
// });

// import { Fancybox } from "@fancyapps/ui";
// Fancybox.bind('[data-fancybox="certificates"]', {
//   // Your custom options
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [

// ];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
