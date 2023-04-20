import El from '@/library/El';
import { routerFunc } from '@/router';

const payment = () => {
  return El({
    element: 'div',
    className: ' items-center grid grid-cols-1 gap-3',
    child: [
      El({
        element: 'div',
        className: 'p-4 pb-40',
        child: [
          El({
            element: 'div',
            className: 'p-4 flex justify-between mb-5',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'img',
                    name: 'arrow-back',
                    className: 'text-3xl',
                    src: 'assets/svg/arrow.svg',
                    onclick: function name(params) {
                      routerFunc().navigate("/chooseShipping")
                    },
                  }),
                  El({
                    element: 'h1',
                    child: 'Payment Methods',
                    className: 'text-2xl font-bold',
                  }),
                ],
              }),

              El({
                element: 'ion-icon',
                name: 'add-circle-outline',
                className: 'text-3xl',
              }),
            ],
          }),
          El({
            element: 'p',
            child: 'Select the payment method you want to use.',
            className: 'mb-6 text-sm text-gray-600',
          }),
          /// my wallet
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-4 shadow-md rounded mb-9',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'img',
                    name: 'wallet',
                    className: 'text-2xl w-6',
                    src: 'assets/svg/wallets.svg',
                  }),
                  El({
                    element: 'p',
                    child: 'My Wallet',
                    className: 'font-bold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',

                    child: '$9.379',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'payment',
                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          // paypal////
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-4 shadow-md rounded mb-9',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'div',
                    innerHTML: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="24px" height="24px" viewBox="-23 0 302 302" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765" fill="#27346A"/><path d="M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z" fill="#27346A"/><path d="M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z" fill="#2790C3"/><path d="M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865" fill="#1F264F"/></svg>`,
                  }),
                  El({
                    element: 'p',
                    child: 'Pay Pal',
                    className: 'font-bold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',

                    // child: '$9.379',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'payment',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          /// google///
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-4 shadow-md rounded mb-9',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'div',
                    innerHTML: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <svg width="24px" height="24px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>`,
                    className: 'text-2xl',
                  }),
                  El({
                    element: 'p',
                    child: 'Google Pay',
                    className: 'font-bold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',

                    // child: '$9.379',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'payment',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          /// /apple
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-4 shadow-md rounded mb-9',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'img',
                    name: 'logo-apple',
                    className: 'text-3xl w-6',
                    src: 'assets/svg/apple.svg',
                  }),
                  El({
                    element: 'p',
                    child: 'Apple Pay',
                    className: 'font-bold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',

                    // child: '$9.379',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'payment',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
          /// mastercard
          El({
            element: 'div',
            className:
              'flex items-center justify-between text-left p-4 shadow-md rounded',
            child: [
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'img',
                    className: 'w-6',
                    src: 'assets/svg/mastercard.svg',
                  }),
                  El({
                    element: 'p',
                    child: '.... .... .... .... 4679',
                    className: 'font-bold',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex gap-3',
                child: [
                  El({
                    element: 'span',
                    className: 'font-bold',

                    child: '',
                  }),
                  El({
                    element: 'input',
                    type: 'radio',
                    name: 'payment',

                    // className: 'after:bg-black',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'bg-white border fixed px-3 bottom-0 w-full py-10 flex items-center justify-center rounded-t-3xl',
        onclick: function name(params) {
          routerFunc().navigate('/checkoutModal');
        },
        child: [
          El({
            element: 'button',
            className: 'bg-btn-black rounded-full w-full px-6 py-2',
            child: [
              El({
                element: 'div',
                className: 'flex items-center text-white justify-center',
                child: [
                  El({
                    element: 'p',
                    className: 'self-center text-md font-bold',
                    child: 'Confirm Payment',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],

    //     /// //////button black ///////
  });
};
export default payment;
