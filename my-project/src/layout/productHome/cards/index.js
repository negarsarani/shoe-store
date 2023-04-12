import El from '@/library/El';
import { EachcardHome } from '@/library/productHome/CardHome';
import { observer } from '..';

export function parentCardsHome(elem, data) {
  const footer = document.getElementById('footer');
  console.log(footer);
  observer.observe(footer)
  const arr = data.map((item) => EachcardHome(item));
  const el = El({
    element: 'div',
    className: 'grid grid-cols-2  gap-1 px-2 overflow-hidden',
  });
  arr.map((item) => el.insertAdjacentElement('beforeend', item));
  return elem.append(el);
}
