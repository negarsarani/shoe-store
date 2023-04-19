import { GetData } from '@/library/Api/GetData';
import Cookies from 'js-cookie';
import { createData } from '../detaillproduct';
import { objSingle } from '@/pages/singleproduct';
import axios from 'axios';

export async function AddTocart() {
  if (!objSingle) {
    console.error('Invalid objSingle parameter');
    return;
  }
  const userId = Cookies.get('id');

  const response = await GetData(`users/${userId}`);
  let user = response.data;

  if (user.cart.length === 0) {
    user.cart = [objSingle];
  } else {
    user.cart.map((item) => {
      if (item.name === objSingle.name) {
        if (item.size === objSingle.size && item.color === objSingle.color) {
          null
        }  if (
          item.size !== objSingle.size ||
          item.color !== objSingle.color
        ) {
          console.log('f');
          user.cart = [...user.cart, objSingle];
        }
      } else {
        console.log('w');
      }
    });
  }
  user.cart = [...user.cart, objSingle];
  console.log(user);
  await axios.put(`http://localhost:3010/users/${userId}`, user, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
