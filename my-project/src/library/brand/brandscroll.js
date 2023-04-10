import El from '../El';

export function EachScrollEl(brand) {
  return El({
    element: 'div',
    className:
      'flex items-center border flex-shrink-0 border-bg-dark border-2 rounded-3xl px-3 py-1  ',
    onclick: function name(e) {
      e.currentTarget.classList.toggle('bg-bg-dark');
      e.currentTarget.classList.toggle('text-white');
    },
    child: El({
      element: 'span',
      className: 'pr-1 ',
      child: brand,
    }),
  });
}
