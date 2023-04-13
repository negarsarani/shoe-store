import { routerFunc } from '@/router';
import El from '../El';

export function EachcardHome(item) {
  return El({
    element: 'div',
    
    className:
      'flex flex-col items-center justify-center p-2  overflow-hidden text-ellipsis truncate ',
    child: [
      El({
        element: 'div',
        onclick:function name(params) {
          routerFunc().navigate(`product:${item.id}`)
        },
        className:
          'card bg-bg-card w-full flex items-center justify-center cursor-pointer  rounded-3xl ',
        child: El({
          element: 'img',
          className: 'aspect-[3/4] rounded-3xl',
          src: `${item.image[0]}`,
        }),
      }),
      El({
        element: 'div',
        className: 'card w-full text-ellipsis truncate  overflow-ellipsis ',
        child: [
          El({
            element: 'span',
            className:
              ' text-ellipsis truncate  overflow-ellipsis font-semibold',
            child: `${item.name}`,
          }),
          El({
            element: 'div',
            className: 'font-semibold',
            child: `$ ${item.price}`,
          }),
        ],
      }),
    ],
  });
}
