import El from '@/library/El';

export function LoginForm() {
  const div = [
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
          dataset: { input: 'email' },
          className:
            ' text-black w-full cursor-pointer   focus:outline-none pl-2 bg-transparent',
          name: 'email',
          type: 'email',
          placeholder: 'Email',
        }),
      ],
    }),
    El({
      element: 'div',
      child: [
        El({
          element: 'div',
          className: `flex  justify-center items-center  bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   hover:border-black hover:border hover:border-2`,

          child: [
            El({
              element: 'img',
              className: 'hover:fill-black',
              src: 'assets/svg/lock.svg',
            }),
            El({
              element: 'input',
              dataset: { input: 'password' },
              name: 'password',
              className:
                'text-black w-full cursor-pointer   focus:outline-none pl-2 bg-transparent',
              type: 'password',
              required: true,
              placeholder: 'Password',
            }),
            El({
              element: 'img',
              className: 'cursor-pointer',
              src: 'assets/svg/eye-slash.svg',
              onclick: function name(e) {
                if (
                  e.target.src ===
                  'http://localhost:5173/assets/svg/eye-slash.svg'
                ) {
                  setTimeout(() => {
                    e.target.src = 'assets/svg/eye.svg';
                    e.target.previousSibling.type = 'text';
                  }, 0);
                }
                if (
                  e.target.src === 'http://localhost:5173/assets/svg/eye.svg'
                ) {
                  setTimeout(() => {
                    e.target.src = 'assets/svg/eye-slash.svg';
                    e.target.previousSibling.type = 'password';
                  }, 0);
                }
              },
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'alert hidden text-[.8rem] text-red-600',
          child: 'The password is wrong',
        }),
      ],
    }),

    El({
      element: 'div',
      className: 'w-full flex justify-center pt-2 gap-1 items-center',
      child: [
        El({
          element: 'input',
          id: 'remember',
          className:
            'form-checkbox remember text-black bg-black border-2 w-3 h-3 rounded-md',
          type: 'checkbox',
          checked: true
        }),
        El({
          element: 'span',
          child: 'Remember me',
        }),
      ],
    }),
    El({
      element: 'div',
      className:
        ' notfound invisible text-[.8rem] text-red-600 flex justify-center animate-bounce',
      child: El({
        element: 'span',
        child: 'User not found',
      }),
    }),
  ];
  return div;
}
