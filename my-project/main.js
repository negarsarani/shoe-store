import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './src/styles/style.css';
import App from './src/App';
import { settingSwipper } from './src/layout';


const main = document.getElementById('app');
main.appendChild(App());
settingSwipper();


// if (Cookies.get('user')) {
//     openLoading()
//   history.pushState(null, null, '/home');
// } else {
//   history.pushState(null, null, '/login');
// }
// Route();
// window.addEventListener('popstate', Route);