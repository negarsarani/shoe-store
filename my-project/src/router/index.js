import Cookies from 'js-cookie';
import El from '../library/El';
const isPrivate = (routesEl, child) =>
  Cookies.get('user') && routesEl.appendChild(child);
// export function Route() {
//   const routes =
//     document.getElementById('routes') ||
//     El({
//       element: 'div',
//     });
//   routes.innerHTML = '';
//   switch (location.pathname) {
//     case '/login':

//     case '/signup':

//     case '/home':

//     default:
//       break;
//   }
// }
import Navigo from 'navigo'; // When using ES modules.

const router = new Navigo('/');

// Adding a route
router
  .on('/products/list', function () {
    // display all the products
  })
  .resolve();

//   Adding a main/root handler
router
  .on(function () {
    // show home page here
  })
  .resolve();

//   Adding multiple routes

router
  .on({
    'products/:id': function () {
      setContent('Products');
    },
    products: function () {
      setContent('About');
    },
    '*': function () {
      setContent('Home');
    },
  })
  .resolve();
