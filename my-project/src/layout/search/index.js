import El from '@/library/El';

export function searchHome(params) {
  return El({
    element: 'div',
    classList: 'px-4 ',
    child: El({
      element: 'div',
      id: 'search',
      dataset: { search: 'div' },
      className:
        'flex justify-center items-center  bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ',
      onclick: function name() {
          const search = document.getElementById('search');
          search.classList.toggle('border-2');
          search.classList.toggle('border-black');
     
      },
      child: [
        El({
          element: 'img',
          src: 'assets/svg/zarebin.svg',
        }),
        El({
          element: 'input',
          dataset: { search: 'input' },
          className:
            '  text-black w-full cursor-pointer   focus:outline-none pl-2 bg-transparent',
          type: 'text',
          placeholder: 'Search',
        }),
      ],
    }),
  });
}
