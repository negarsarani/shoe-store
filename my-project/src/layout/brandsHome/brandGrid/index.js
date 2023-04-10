import El from '@/library/El';
import { EachGrideEL } from '@/library/brand/brandgrid';

export function brandGrid(elem, data) {
  elem.innerHTML = '';
  const dataSplice = [...data].splice(0, 7);

  const elitem = El({
    element: 'div',
    className: 'grid grid-cols-4 sm:flex lg:grid-cols-4 gap-4',
    child: EachGrideEL({ name: 'More', image: 'assets/svg/more.svg' }),
  });
  dataSplice.forEach((item) => {
    elitem.insertAdjacentElement('afterbegin', EachGrideEL(item)); 
  });
return elem.append(elitem);
}