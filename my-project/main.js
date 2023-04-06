import './src/styles/style.css';
import App from './src/App';

const main = document.getElementById('app');
main.appendChild(App());
// if (Cookies.get('user')) {
//     openLoading()
//   history.pushState(null, null, '/home');
// } else {
//   history.pushState(null, null, '/login');
// }
// Route();
// window.addEventListener('popstate', Route);