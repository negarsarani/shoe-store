import { GetData } from '@/library/Api/GetData';
import { routerFunc } from '@/router';
import Cookies from 'js-cookie';
export function checkUser(email, password) {
  const form = document.getElementById('loginform');
  GetData('users').then((res) => {
    const data = res.data;
    const findUser = data.find((item) => {
      return item.email === email;
    });
    findUser !== undefined
      ? handleform(findUser, email, password)
      : notfound(form);
  });
}
function handleform(findUser, email, password) {
  const form = document.getElementById('loginform');
  if (findUser.email === email && findUser.password == password) {
    Cookies.set('user', email, { expires: 7 });
    form.reset();
    routerFunc().navigate('/home');
  } else if (findUser.email === email && findUser.password !== password) {
    form.querySelector('.alert').classList.remove('hidden');
  }
}

function notfound(form) {
  form.reset();
  form.querySelector('.notfound').classList.remove('invisible');
  setTimeout(() => {
    form.querySelector('.notfound').classList.add('invisible');
  }, 2000);
}
