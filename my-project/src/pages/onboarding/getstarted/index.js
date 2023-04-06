import El from '@/library/El';

export function getStarted() {
  return El({
    element: 'div',
    className:
      "h-full w-full bg-red-300 bg-[url('/assets/img/Wallpaper-page2.png')] bg-cover bg-center text-white",
    child: [
      El({
        element: 'div',
        className: 'flex',
        child: El({
          element: 'h1',
          // className: 'flex gap-2',
          child: [
            El({
              element: 'span',
              className: ' text-[40px]',
              child: 'Welcome to 👋',
            }),
            El({
              element: 'span',
              className: ' text-[72px]',
              child: 'Shoea',
            }),
          ],
        }),
      }),
      El({
        element: 'p',
        className: '',
        child:
          'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
      }),
    ],
  });
}
