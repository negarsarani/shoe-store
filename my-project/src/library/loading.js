import El from './El';

export function Loading() {
  return El({
    element: 'div',
    className: 'w-full h-full',
    child: El({
      element: 'div',
      className: 'w-full h-full ',
      id: 'loading',
      className:
        'flex items-center justify-center backdrop-blur-sm bg-slate-300 bg-opacity-30  w-full h-full',
      child: El({
        element: 'div',
        className: '',
        role: 'status',
        child: [
          El({
            element: 'img',
            className: 'w-10 h-10',
            src: 'assets/svg/ring-spinner.svg',
          }),
          El({
            element: 'span',
            className: 'text-md text-gray-800',
            child: '',
          }),
        ],
      }),
    }),
  });
//   backdrop-blur-sm bg-slate-300 bg-opacity-30 shadow-md
}
// export function openLoading() {
//   const loading = document.getElementById('loading');
//   loading.append(Loading());
//   loading.classList.remove('invisible');
// }
// export function closeLoading() {
//   const loading = document.getElementById('loading');
//   loading.append(Loading());
//   loading.classList.add('invisible');
// }
