import El from '@/library/El';

export function descpages() {
  return El({
    element: 'div',
    className: 'bg-red-200 h-full w-full',
    child: [
      El({}),
      El({}),
      El({element:"div", }),
      El({ element: 'button', className: 'text-white', child: 'Next' }),
    ],
  });
}

// swiper.activeIndex
