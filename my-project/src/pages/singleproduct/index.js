import { settingSwipper, swiperSingleProduct } from '@/layout';
import { detailsproduct } from '@/layout/detaillproduct';
import { GetData } from '@/library/Api/GetData';
import { getCurrentURL } from '@/library/CurrentUrl/CurrentUrl';
import El from '@/library/El';
import { TotalPrice } from '@/library/totalprice/Totalprice';
import { routerFunc } from '@/router';
// export function dataSingleProduct(params) {

// }
export function singleProduct() {

  setTimeout(() => {
    const id = getCurrentURL()[4].split(':')[1];
    GetData(`product/${id}`).then(
      (res) => render(elem, res.data),
      settingSwipper()
    );
  }, 100);
  // dataSinglePage(params)
  const elem = El({
    element: 'div',
    className: '',
  });
  return elem;
}
function render(elem, data) {
  const el = El({
    element: 'div',
    className: 'flex flex-col items-center justify-center',
    child: [swiperSingleProduct(data), detailsproduct(data)],
  });
  return elem.append(el);
}
