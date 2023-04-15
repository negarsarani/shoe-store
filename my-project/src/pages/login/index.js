import { LoginForm } from '@/layout/form';
import { validationForm } from '@/layout/form/validation';
import El from '@/library/El';
import { routerFunc } from '@/router';

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
          onclick: function name() {
            console.log('s');
          },
          src: 'assets/svg/arrow.svg',
          onclick: function name() {
            routerFunc().navigate('/');
          },
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
                id: 'loginform',
                className: ' flex flex-col gap-3 px-5',
                child: LoginForm(),
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
          eventListener: [
            {
              event: 'click',
              callback: validationForm,
            },
          ],
        }),
      }),
    ],
  });
}
