import El from '../El';

export function cardHome() {
  return El({
    element: 'div',
    className: 'felx flex-col items-center justify-center',
    child: [
      El({
        element: 'div',
        className: 'card bg-bg-card ',
        child: El({
          element: 'img',
          className: '',
          src: 'https://img01.ztat.net/article/spp-media-p1/2a8e292b23d64352a1b6d1d7e254fbd9/f57b3ce758e74b8bbfbeda3daf78a4c0.jpg?imwidth=1800&filter=packshot',
        }),
      }),
      El({
        element: 'div',
        className: 'card',
        child: [
          El({
            element: 'span',
            className: '',
            child: 'Nike new lkwlwjHDIEHA',
          }),
          El({
            element: 'div',
            className: '',
            child: `$ 100.42`,
          }),
        ],
      }),
    ],
  });
}
