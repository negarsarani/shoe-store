import { headerProfile } from '@/layout/headerprofile';
import El from '@/library/El';

export function home(params) {
  return El({
    element: 'div',
    child: El({
      element: 'div',
      className: 'flex justify-between ',
      child: [
        //header
        headerProfile(),
      ],
    })
  });
}
