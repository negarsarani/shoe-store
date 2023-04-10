import El from '@/library/El';
import { EachGrideEL } from '@/library/brand/brandgrid';

export function brandGrid() {
  return El({
    element: 'div',
    className: 'brand',
    child: [
      EachGrideEL({
        name: 'Converse',
        image:
          'https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png',
      }),
    ],
  });
}
