import axios from 'axios';
import Cookies from 'js-cookie';
export function checkUser(email, password) {
  const form = document.getElementById('loginform');
  GetData().then((res) => {
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
    Cookies.set(email, 'login', { expires: 7 });
    form.reset();
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
async function GetData(params) {
  const res = await axios('http://localhost:3010/users');
  return res;
}
