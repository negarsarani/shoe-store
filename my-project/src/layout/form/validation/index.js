import { checkUser } from '../functions';
export function validationForm(e) {
  e.preventDefault();
  const form = document.getElementById('loginform');
  const input = form.querySelectorAll('[data-input]');
  //   console.log(form);
  const checkbox = form.querySelector('#remember');
  const [email, password] = [...input].map((el) => el.value);
  checkUser(email, password);
}
