import { spinner } from '@/layout/spinner/';
import El from '@/library/El';

export function onboarding() {
  return El({
    element: 'div',
    className: 'w-full h-full gap-20 flex justify-end item-center  flex-col',
    child: [
      El({
        element: 'div',
        className: 'flex justify-center items-center  gap-2  ',
        child: [
          El({
            element: 'img',
            className: ' w-12 h-12',
            src: 'assets/img/ondoarding icon.png',
          }),
          El({
            element: 'div',
            className: 'text-shoea text-[52px] font-bold  ',
            child: 'shoea',
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' my-24',
        child: spinner(),
      }),
    ],
  });
}
