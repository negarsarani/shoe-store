import { spinner } from '@/layout/spinner/';
import El from '@/library/El';
import { getStarted } from './getstarted';

export function onboarding() {
  setTimeout(() => {
    const onboarding = document.getElementById('onboarding');
    onboarding.classList.add('-translate-x-full');
    onboarding.innerHTML = '';
    onboarding.append(getStarted());
  }, 2000);
  return El({
    element: 'div',
    id: 'onboarding',
    className:
      'w-full h-full flex items-center justify-center transition duration-500 ease-in-out transform ',
    child: El({
      element: 'div',
      className: ' w-full h-full gap-20 flex justify-end item-center  flex-col',
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
    }),
  });
}
