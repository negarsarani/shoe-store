import El from '@/library/El';
import { EachScrollEl } from '@/library/brand/brandscroll';

export function brandScroll(elem, data) {
  const arr = data.map((item) => (item.name ? item.name : item));

  const el = El({
    element: 'div',
    className: '  menu-scroll-x overflow-x-auto  w-screen',
    child: El({
      element: 'div',
      className: 'flex p-3 gap-3 text-ms items-center w-full flex-shrink-0',
      id: 'divscroll',
      child: [EachScrollEl('All')],
    }),
  });
  elem.append(el);
  const divscroll = document.getElementById('divscroll');
  arr.map((item) =>
    divscroll.insertAdjacentElement('beforeend', EachScrollEl(item))
  );
}
