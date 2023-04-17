import Colorpicker from '@/library/Colorpicker';
import El from '@/library/El';

export function renderSize(params) {
  return params.map((item) => {
    return El({
      element: 'div',
      dataset: { sizeParent: item },
      className:
        'flex items-center rounded-full justify-center w-10 h-10 text-text-gray border border-2  cursor-pointer border-text-gray',
      child: El({
        dataset: { size: item },
        element: 'div',
        className: '',
        child: item,
      }),
    });
  });
}
export function renderColor(params) {
  // console.log(params);
  
  return params.map((item) => {
    return El({
      element: 'div',
      dataset: { color: item },
      classList: `flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10  ${Colorpicker(item)}`,
    });
  });
}
