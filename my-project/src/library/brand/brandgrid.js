import El from '../El';

export function EachGrideEL(item) {
  return El({
    Element: 'div',
    className: 'flex flex-col',
    child: [
      El({
        element: 'div',
        className: '',
        child: El({
          element: 'img',
          className: '',
          src: `${item.image}`,
        }),
      }),
      El({
        element: 'div',
        className: '',
        child: El({
          element: 'span',
          className: '',
          child: `${item.name}`,
        }),
      }),
    ],
  });
}
