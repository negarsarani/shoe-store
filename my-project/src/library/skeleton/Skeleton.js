import El from "../El";

export function SkeletonCard() {
  return El({
    element: 'div',
    className:
      'flex flex-col gap-3 items-center justify-center p-2  overflow-hidden text-ellipsis truncate animate-pulse ',
    child: [
      El({
        element: 'div',
        className:
          'card bg-bg-card w-full flex items-center justify-center cursor-pointer  rounded-3xl ',
        child: El({
          element: 'div',
          className: 'x-36 h-36 rounded-3xl bg-bg-card',
          child:""
        }),
      }),
      El({
        element: 'div',
        className: 'card w-full flex  flex-col gap-2  ',
        child: [
          El({
            element: 'span',
            className:
              '  w-full  bg-bg-card h-5 rounded-3xl',
            child: ' ',
          }),
          El({
            element: 'div',
            className: 'font-semibold h-5  rounded-3xl bg-bg-card',
            child: ' ',
          }),
        ],
      }),
    ],
  });
}
