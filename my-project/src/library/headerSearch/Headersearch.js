import El from '../El';

export function HeaderSearch(params) {
  return El({
    element: 'div',
    className: 'flex justify-between items-center px-4 py-3',
    child: [
      El({
        element: 'div',
        className: 'flex gap-4 items-center justify-center',
        child: [
          El({
            element: 'div',
            className: 'cursor-pointer',
            child: El({
              element: 'img',
              className: 'w-4',
              src: params.icon,
            }),
          }),
          El({
            element: 'div',
            className: 'font-semibold text-xl cursor-pointer',
            child: params.text,
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' cursor-pointer',
        child: El({
          element: 'img',
          className: 'w-6',
          src: 'assets/svg/zarebin.svg',
        }),
      }),
    ],
  });
}
