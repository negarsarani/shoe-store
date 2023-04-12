import El from '@/library/El';
import { parentCardsHome } from './cards';
import { GetData } from '@/library/Api/GetData';
// import { Observer } from '@/library/observer/Observer';
let page;
export function productHome() {
  const elem = El({
    element: 'div',
    className: 'w-full ',
    id: 'cardHome',
  });

  GetData(`product?_page=${(page = 1)}&_limit=4`).then((res) => {
    const data = res.data;
    parentCardsHome(elem, data);
  });

  return elem;
}

export const observer = new IntersectionObserver((entries) => {
  const cardHome = document.getElementById('cardHome');

  entries.forEach((loader) => {
    if (loader.isIntersecting) {
      GetData(`product?_page=${++page}&_limit=4`).then((res) => {
        const data = res.data;
        parentCardsHome(cardHome, data);
        if (data.lenght <= 0) {
          document.getElementById('footer').remove();
        }
      });
    }
  });
});
