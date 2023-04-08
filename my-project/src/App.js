import { swiperFunc } from './layout';
import El from './library/El';
import { onboarding } from './pages/onboarding';
import { getStarted } from './pages/onboarding/getstarted';
import Swiper from 'swiper/bundle';
import { descpages } from './pages/onboarding/getstarted/descpages';
import { login } from './pages/login';

function App() {
  return El({
    element: 'div',
    className: 'w-full h-full font-Inter ',
    id:"routes",
    child: onboarding()
  });
}
export default App;
