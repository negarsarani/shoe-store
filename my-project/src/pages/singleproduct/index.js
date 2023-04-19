import { settingSwipper, swiperSingleProduct } from '@/layout';
import { detailsproduct } from '@/layout/detaillproduct';
import { GetData } from '@/library/Api/GetData';
import { getCurrentURL } from '@/library/CurrentUrl/CurrentUrl';
import El from '@/library/El';
import { TotalPrice } from '@/library/totalprice/Totalprice';
import { routerFunc } from '@/router';
// export function dataSingleProduct(params) {

// }
export const objSingle = {
  id: '',
  Userquantity: 1,
  color: '',
  size: '',
  img: '',
  price: '',
  name: '',
  MainQuntity: '',
};
export function singleProduct() {
  setTimeout(() => {
    const id = getCurrentURL()[4].split(':')[1];
    GetData(`product/${id}`).then((res) => {
      objSingle.id = res.data.id
      objSingle.color = res.data.colors[0];
      objSingle.size = res.data.sizes[0];
      objSingle.img = res.data.image[0];
      objSingle.price = res.data.price;
      objSingle.name = res.data.name;
      objSingle.MainQuntity = res.data.quantity;
      render(elem, res.data), settingSwipper();
    });
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
