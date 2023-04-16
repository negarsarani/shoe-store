import Cookies from 'js-cookie';
import El from '../library/El';
import Navigo from 'navigo';
import { login } from '@/pages/login';
import { home } from '@/pages/home';
import { singleProduct } from '@/pages/singleproduct';
import { onboarding } from '@/pages/onboarding';
import { getCurrentURL } from '@/library/CurrentUrl/CurrentUrl';
import { settingSwipper } from '@/layout';

// Adding a route
export function routerFunc() {
  const routediv = document.getElementById('routes');
  const router = new Navigo('/');
  router
    .on('/', function () {
      onboarding();
    })
    .on('/auth', function () {
      routediv.innerHTML = '';
      routediv.append(login());
    })
    .on('/home', function () {
      routediv.innerHTML = '';
      routediv.append(home());
    })
    .on('/product:id', function () {
      routediv.innerHTML = '';
      settingSwipper()
      routediv.append(singleProduct());

  
    })
    .resolve();
   
  return router;
}
