import { barandsHome } from '@/layout/brandsHome';
import { brandGrid } from '@/layout/brandsHome/brandGrid';
import { footerMenue } from '@/layout/footer';
import { headerProfile } from '@/layout/headerprofile';
import { productHome } from '@/layout/productHome';
import { searchHome } from '@/layout/search';
import El from '@/library/El';
import { SkeletonCard } from '@/library/skeleton/Skeleton';

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
      className: 'flex flex-col  gap-3 justify-between ',
      child: [
        headerProfile(),
        searchHome(),
        barandsHome(),
        productHome(),
        El({
          element: 'div',
          id: 'cardSkleton',
          className: 'grid grid-cols-2',
          child: [
            SkeletonCard(),
            SkeletonCard(),
            SkeletonCard(),
            SkeletonCard(),
          ],
        }),
        El({
          element: 'div',
          className: '',
          child: footerMenue(),
        }),
      ],
    }),
  });
}
