import El from '@/library/El';

export function home(params) {
  return El({
    element: 'div',
    child: El({
      element: 'div',
      className: '',
      child: [
        //header
        El({
          element: 'header',
          className: 'header',
          child: [
            El({
              element: 'div',
              className: '',
              child: [
                El({
                  element: 'div',
                  className: '',
                  child: El({
                    element: 'img',
                    className: '',
                    src: '',
                  }),
                }),
                El({
                  element: 'div',
                  className: '',
                  child: El({
                    element: 'img',
                    className: '',
                    src: '',
                  }),
                }),
              ],
            }),
            El({
              element: 'div',
              className: '',
              child: [
                El({
                  element: 'div',
                  element: 'div',
                  className: 'profile',
                  child: El({
                    element: 'div',
                    className: '',
                    child: El({
                      element: 'img',
                      className: '',
                      src: '',
                    }),
                  }),
                }),
                El({
                  element: 'div',
                  className: 'text',
                  child: [
                    El({
                      element: 'span',
                      className: '',
                      child: '',
                    }),
                    El({
                      element: 'span',
                      className: 'name',
                      child: '',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
