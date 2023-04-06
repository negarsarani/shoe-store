import El from '@/library/El';

export function getStarted(style) {
  return El({
    element: 'div',
    className:
      "transition duration-500 ease-in-out transform bg-fixed translate-x-full h-full w-full flex flex-col justify-end bg-[url('/assets/img/Wallpaper-page2.png')]  bg-cover bg-center text-white",
    child: El({
      element: 'div',
      className: 'w-full w-full  pl-5 pr-2 pb-14 ',
      child: [
        El({
          element: 'div',
          className: 'flex sm:gap-2 sm:justify-center',
          child: El({
            element: 'h1',
            child: [
              El({
                element: 'span',
                className: ' text-bold text-[40px] ',
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
          className: 'sm:flex sm:justify-center sm:text-xl',
          child:
            'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
        }),
      ],
    }),
  });
}
