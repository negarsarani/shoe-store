import { settingSwipper, swiperFunc } from './layout';
import El from './library/El';
import { onboarding } from './pages/onboarding';
import { getStarted } from './pages/onboarding/getstarted';
import Swiper from 'swiper/bundle';
import { descpages } from './pages/onboarding/getstarted/descpages';
import { login } from './pages/login';
import { home } from './pages/home';
import { Loading } from './library/loading';
import { singleProduct } from './pages/singleproduct';
import { cart } from './pages/cart';
import { checkUser } from './layout/form/functions';
import Cookies from 'js-cookie';
import chooseShipping from './layout/chechout/checkout3';
import shippingAddress from './layout/chechout/checkout2';
import payment from './layout/chechout/checkout4';
import checkoutModal from './layout/chechout/checkoutModal';
import myOrder from './pages/order';
function App() {
  settingSwipper();
  return El({
    element: 'div',
    className: 'w-full h-full font-Inter ',
    id: 'routes',
    child: check(),
  });
}
function check() {
  if (Cookies.get('user') && Cookies.get('id')) {
    return home();
  } else {
    return onboarding();
  }
}
export default App;
