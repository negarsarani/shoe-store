import { settingSwipper, swiperSingleProduct } from '@/layout';
import { detailsproduct } from '@/layout/detaillproduct';
import { GetData } from '@/library/Api/GetData';
import El from '@/library/El';
import { TotalPrice } from '@/library/totalprice/Totalprice';
import { routerFunc } from '@/router';

export function singleProduct(params) {
  return El({
    element: 'div',
    className: 'flex flex-col items-center justify-center',
    child: [swiperSingleProduct(), detailsproduct(), TotalPrice()],
  });
}

GetData()