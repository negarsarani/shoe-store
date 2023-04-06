import Cookies from 'js-cookie';
import El from '../library/El';
const isPrivate = (routesEl, child) =>
  Cookies.get('user') && routesEl.appendChild(child);
export function Route() {
  const routes =
    document.getElementById('routes') ||
    El({
      element: 'div',
    });
  routes.innerHTML = '';
  switch (location.pathname) {
    case '/login':
      
    case '/signup':
     
    case '/home':
      
    default:
      break;
  }
}