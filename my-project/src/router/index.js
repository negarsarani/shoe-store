import Cookies from 'js-cookie';
import El from '../library/El';
import Navigo from 'navigo';
import { login } from '@/pages/login';
import { home } from '@/pages/home';
import { singleProduct } from '@/pages/singleproduct';
import { onboarding } from '@/pages/onboarding';
import { getCurrentURL } from '@/library/CurrentUrl/CurrentUrl';
import { settingSwipper } from '@/layout';
import { cart } from '@/pages/cart';
import myOrder from '@/pages/order';
import { checkout } from '@/layout/chechout/checkout1';
import shippingAddress from '@/layout/chechout/checkout2';
import chooseShipping from '@/layout/chechout/checkout3';
import payment from '@/layout/chechout/checkout4';
import checkoutModal from '@/layout/chechout/checkoutModal';

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
      routediv.append(singleProduct());
    })
    .on('/cart', function () {
      routediv.innerHTML = '';
      routediv.append(cart());
    })
    .on('/orders', function () {
      routediv.innerHTML = '';
      routediv.append(myOrder());
    })
    .on('/wallet', function () {
      routediv.innerHTML = '';
      // routediv.append(payment());
    })
    .on('/checkout', function () {
      routediv.innerHTML = '';
      routediv.append(checkout());
    })
    .on('/shippingAddress', function () {
      routediv.innerHTML = '';
      routediv.append(shippingAddress());
    })
    .on('/chooseShipping', function () {
      routediv.innerHTML = '';
      routediv.append(chooseShipping());
    })
    .on('/payment', function () {
      routediv.innerHTML = '';
      routediv.append(payment());
    })
    .on('/checkoutModal', function () {
      routediv.innerHTML = '';
      routediv.append(checkoutModal());
    })

    .resolve();

  return router;
}
