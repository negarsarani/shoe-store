import axios from 'axios';

export function validationForm(e) {
  e.preventDefault();
  const form = document.getElementById('loginform');
  const input = form.querySelectorAll('[data-input]');
  const [email, password] = [...input].map((el) => el.value);
  GetData().then((res) => {
    const data = res.data;
    data.map((item) => {
      if (item.email === email && item.password === password) {
      }
     else if (item.email === email && item.password !== password) {
        form.querySelector('.alert').classList.remove('hidden');
      }
     else if (item.email !== email || item.password !== password) {
        form.querySelector('.notfound').classList.remove('invisible');
        setTimeout(() => {
          form.querySelector('.notfound').classList.add('invisible');
        }, 2000);
      }
    });
  });
}
async function GetData(params) {
  const res = await axios('http://localhost:3010/users');
  return res;
}
// let regexEmail = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
// let regexEmail = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
