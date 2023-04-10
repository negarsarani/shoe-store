import El from '../El';

export function EachGrideEL(item) {
  return El({
    element: 'div',
    className: 'flex flex-col gap-2 items-center justify-center ',
    child: [
      El({
        element: 'div',
        className: 'bg-bg-gary p-3 rounded-full w-12 h-12 flex items-center justify-center sm:w-14 sm:h-14 cursor-pointer ',
        child: El({
          element: 'img',
          className: ' w-8  ',
          src: `${item.image}`,
        }),
      }),
      El({
        element: 'div',
        className: 'cursor-pointer',
        child: El({
          element: 'span',
          className: 'font-Inter_semibold font-bold text-[.8rem] sm:text-lg',
          child: `${item.name}`,
        }),
      }),
    ],
  });
}
