import { GetData } from '@/library/Api/GetData';
import { routerFunc } from '@/router';
import Cookies from 'js-cookie';
export function checkUser(email, password, checked) {
  const form = document.getElementById('loginform');
  GetData('users').then((res) => {
    const data = res.data;
    const findUser = data.find((item) => {
      getID(item);
      return item.email === email;
    });
    findUser !== undefined
      ? handleform(findUser, email, password, checked)
      : notfound(form);
  });
}
function handleform(findUser, email, password, checked) {
  const form = document.getElementById('loginform');
  if (findUser.email === email && findUser.password == password) {
    if (checked.checked === true) {
      Cookies.set('user', email, { expires: 7 });
    }
    if (checked.checked === false) {
      Cookies.set('user', email);
    }
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
function getID(item) {
  Cookies.set('id', item.id);
}
