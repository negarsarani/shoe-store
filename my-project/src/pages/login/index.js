import El from '@/library/El';

export function login(params) {
  return El({
    element: 'div',
    className: 'login flex flex-col justify-between  h-full',
    child: [
      El({
        element: 'div',
        className: 'pl-5 pt-3',
        child: El({
          element: 'img',
          className: 'cursor-pointer',
          src: 'assets/svg/arrow.svg',
        }),
      }),

      El({
        element: 'div',
        className: 'w-full flex flex-col',
        child: [
          El({
            element: 'div',
            className: 'w-full flex justify-center pb-20',
            child: El({
              element: 'img',
              src: 'assets/img/login-icon.png',
            }),
          }),
          El({
            element: 'div',
            className: 'w-full flex flex-col gap-5 ',
            child: [
              El({
                element: 'h1',
                className: 'w-full  flex justify-center items-center ',
                child: El({
                  element: 'span',
                  className: 'text-2xl font-bold ',
                  child: 'Login to Your Account',
                }),
              }),
              El({
                element: 'form',
                className: ' flex flex-col gap-3 px-5',
                child: [
                  El({
                    element: 'div',
                    className:
                      'flex  justify-center items-center  bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:border-black hover:border hover:border-2',
                    child: [
                      El({
                        element: 'img',
                        src: 'assets/svg/email.svg',
                      }),
                      El({
                        element: 'input',
                        className:
                          ' text-black w-full cursor-pointer   focus:outline-none pl-2 bg-transparent',
                        type: 'email',
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      ' flex  justify-center items-center  bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 hover:border-black hover:border hover:border-2 ',
                    child: [
                      El({
                        element: 'div',
                        className: 'hover:fill-black',
                        innerHTML: `<svg   width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_14_9822)">
                        <path d="M2.1875 8.375C2.1875 7.91087 2.37187 7.46575 2.70006 7.13756C3.02825 6.80937 3.47337 6.625 3.9375 6.625H10.0625C10.5266 6.625 10.9717 6.80937 11.2999 7.13756C11.6281 7.46575 11.8125 7.91087 11.8125 8.375V12.75C11.8125 13.2141 11.6281 13.6592 11.2999 13.9874C10.9717 14.3156 10.5266 14.5 10.0625 14.5H3.9375C3.47337 14.5 3.02825 14.3156 2.70006 13.9874C2.37187 13.6592 2.1875 13.2141 2.1875 12.75V8.375Z" fill="#6C757D"  />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9375 4C3.9375 3.18777 4.26016 2.40882 4.83449 1.83449C5.40882 1.26016 6.18777 0.9375 7 0.9375C7.81223 0.9375 8.59118 1.26016 9.16551 1.83449C9.73984 2.40882 10.0625 3.18777 10.0625 4V6.625H9.1875V4C9.1875 3.41984 8.95703 2.86344 8.5468 2.4532C8.13656 2.04297 7.58016 1.8125 7 1.8125C6.41984 1.8125 5.86344 2.04297 5.4532 2.4532C5.04297 2.86344 4.8125 3.41984 4.8125 4V6.625H3.9375V4Z" fill="#6C757D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_14_9822">
                        <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>`
                      }),
                      El({
                        element: 'input',
                        className:
                          'ext-black w-full cursor-pointer   focus:outline-none pl-2 bg-transparent',
                        type: 'password',
                      }),
                      El({
                        element: 'img',
                        className: 'cursor-pointer',
                        src: 'assets/svg/eye.svg',
                      }),
                    ],
                  }),

                  El({
                    element: 'div',
                    className:
                      'w-full flex justify-center pt-2 gap-1 items-center',
                    child: [
                      El({
                        element: 'input',
                        className:
                          'form-checkbox text-black bg-black border-2 w-3 h-3 rounded-md',
                        type: 'checkbox',
                      }),
                      El({
                        element: 'span',
                        child: 'Remember me',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full p-5  ',
        child: El({
          element: 'button',
          className: 'bg-btn-black w-full rounded-3xl text-white p-2',
          child: 'Sign In',
        }),
      }),
    ],
  });
}
