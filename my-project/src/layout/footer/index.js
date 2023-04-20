import El from '@/library/El';
import { routerFunc } from '@/router';

export function footerMenue(params = '') {
  return El({
    element: 'footer',
    className: ` ${params} block xl:hidden w-full z-[1000] bg-[#ffff] px-4 `,
    child: [
      El({
        element: 'div',
        className: 'flex items-center justify-evenly md:p-4 p-[5px] gap-3',
        child: [
          El({
            element: 'div',
            className:
              'flex flex-col md:flex-row items-center justify-center  md:gap-2  cursor-pointer ',
            onclick: function name() {
              routerFunc().navigate('/home');
            },
            child: [
              El({
                element: 'div',
                child: El({
                  element: 'img',
                  className: '',
                  src: 'assets/svg/home.svg',
                }),
              }),
              El({
                element: 'span',
                child: 'Home',
                className: '',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col md:flex-row items-center justify-center  md:gap-2  cursor-pointer ',
            onclick: function name() {
              routerFunc().navigate('/cart');
            },
            child: [
              El({
                element: 'div',
                child: El({
                  element: 'img',
                  src: 'assets/svg/cart.svg',
                }),
              }),
              El({
                element: 'span',
                child: 'Cart',
                className: '',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col md:flex-row items-center justify-center  md:gap-2  cursor-pointer ',
            onclick: function name() {
              routerFunc().navigate('/orders');
            },
            child: [
              El({
                element: 'div',
                child: El({
                  element: 'img',
                  src: 'assets/svg/orders.svg',
                }),
              }),
              El({
                element: 'span',
                child: 'Orders',
                className: '',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col md:flex-row items-center justify-center  md:gap-2   cursor-pointer',
            onclick: function name() {
              routerFunc().navigate('/wallet');
            },
            child: [
              El({
                element: 'div',
                child: El({
                  element: 'img',
                  src: 'assets/svg/wallet.svg',
                }),
              }),
              El({
                element: 'span',
                child: 'Wallet ',
                className: '',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col md:flex-row items-center justify-center  md:gap-2   cursor-pointer',
            onclick: function name() {
              routerFunc().navigate('/profile');
            },
            child: [
              El({
                element: 'div',
                child: El({
                  element: 'img',
                  src: 'assets/svg/user.svg',
                }),
              }),
              El({
                element: 'span',
                child: 'profile',
                className: '',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export default footerMenue;
