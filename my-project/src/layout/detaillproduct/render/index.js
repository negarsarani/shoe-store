import El from '@/library/El';

export function renderSize(params) {
  return params.map((item) => {
    return El({
      element: 'div',
      dataset: { sizeParent: item },
      className:
        'flex items-center rounded-full justify-center w-10 h-10 text-text-gray border border-2  cursor-pointer border-text-gray',
      child: El({
        dataset: { size: item },
        element: 'div',
        className: '',
        child: item,
      }),
    });
  });
}
export function renderColor(params) {
  // console.log(params);
  const obj = {
    yellow: 'bg-yellow-300',
    blue: 'bg-blue-300',
    rose: 'bg-rose-300',
    cyan: 'bg-cyan-300',
    red: 'bg-red-300',
    green: 'bg-green-300',
    pink: 'bg-pink-300',
    violet: 'bg-violet-300',
    amber: 'bg-amber-300',
    purple: 'bg-purple-300',
  };

  return params.map((item) => {
    return El({
      element: 'div',
      dataset: { color: item },
      classList: `flex items-center rounded-full flex-shrink-0 cursor-pointer justify-center w-10 h-10  ${obj[item]}`,
    });
  });
}
