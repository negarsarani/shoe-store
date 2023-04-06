import El from '@/library/El';

export function spinner() {
  return El({
    element: 'div',
    className: 'flex justify-center item-end ',
    child: El({
      element: 'img',
      className: 'h-16 w-16',
      src: 'assets/svg/ring-spinner.svg',
    }),
  });
}
