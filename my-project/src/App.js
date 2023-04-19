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
import { chechout } from './layout/chechout/checkout1';
function App() {
  settingSwipper();
  return El({
    element: 'div',
    className: 'w-full h-full font-Inter ',
    id: 'routes',
    child: chechout(),
  });
}
// function check() {
//   if (Cookies.get('user')) {
//     return home();
//   } else {
//     return onboarding();
//   }
// }
export default App;
