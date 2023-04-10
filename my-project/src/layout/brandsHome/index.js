import { GetData } from '@/library/Api/GetData';
import El from '@/library/El';
import { brandGrid } from './brandGrid';
import { brandScroll } from './brandScroll';

export function barandsHome(params) {
  const elem = El({
    element: 'div',
    className: 'flex gap-2 flex-wrap items-center justify-evenly gap-5 ',
  });
  GetData('shoes').then((res) => {
    const data = res.data[1].brands;
    console.log(data);
    brandGrid(elem, data), brandScroll(elem, data);
  });
  return elem;
}
