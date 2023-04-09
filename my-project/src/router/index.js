import Cookies from 'js-cookie';
import El from '../library/El';
import Navigo from 'navigo';
import { login } from '@/pages/login';

// Adding a route
export function routerFunc() {
  const routediv = document.getElementById('routes');
  const router = new Navigo('/');
  router
    .on('/wellcome', function () {
      // display all the products
    })
    .on('/auth', function () {
      (routediv.innerHTML = ''), routediv.append(login());
      // show home page here
    })
    .on('/home', function () {
      // show home page here
    })
    .resolve();
  return router;
}
