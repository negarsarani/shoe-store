import El from '@/library/El';
import { GetData } from '@/library/Api/GetData';
import axios from 'axios';
import Cookies from 'js-cookie';
export function headerProfile() {
  const el = El({
    element: 'div',
    className: ' w-full ',
  });
  GetData('users').then((res) => {
    const data = res.data;
    const findUser = data.find((item) => {
      return item.email === Cookies.get('user');
    });
    renderHeaderProfile(findUser, el);
  });

  return el;
}
export function renderHeaderProfile(item, elem) {
  elem.innerHTML = '';
  const el = El({
    element: 'header',
    className: 'header w-full',
    child: [
      El({
        element: 'div',
        className: 'flex justify-between p-2 px-4',
        child: [
          El({
            element: 'div',
            className: 'flex gap-2',
            child: [
              El({
                element: 'div',
                element: 'div',
                className: 'profile',
                child: El({
                  element: 'div',
                  className: ' w-12 ',
                  child: El({
                    element: 'img',
                    className: 'rounded-full',
                    src: `${item.image}`,
                  }),
                }),
              }),
              El({
                element: 'div',
                className: 'text flex flex-col',
                child: [
                  El({
                    element: 'span',
                    className: '',
                    child: 'Good morning 👋 ',
                  }),
                  El({
                    element: 'span',
                    className: 'name font-bold',
                    child: `${item.name}`,
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-3',
            child: [
              El({
                element: 'div',
                className: 'cursor-pointer',
                child: El({
                  element: 'img',
                  className: '',
                  src: 'assets/svg/notif.svg',
                }),
              }),
              El({
                element: 'div',
                className: 'cursor-pointer',
                onclick:function name(params) {
                  
                },
                child: El({
                  element: 'img',
                  className: '',
                  src: 'assets/svg/heart.svg',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return elem.append(el);
}
