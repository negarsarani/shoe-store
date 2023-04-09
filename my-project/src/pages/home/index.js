import { headerProfile } from '@/layout/headerprofile';
import { searchHome } from '@/layout/search';
import El from '@/library/El';

export function home(params) {
  return El({
    element: 'div',
    id: 'home',
    onclick: function name(e) {
      if (!e.target.dataset.search) {
        const search = document.getElementById('search');
        search.classList.remove('border-2');
        search.classList.remove('border-black');
      } else null;
    },
    child: El({
      element: 'div',
      className: 'flex flex-col px-4 gap-3 justify-between ',
      child: [
        headerProfile(),
        searchHome(),
      ],
    }),
  });
}
