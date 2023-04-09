import axios from 'axios';
export async function GetData(endpoint) {
  const res = await axios(`http://localhost:3010/${endpoint}`);
  return res;
}
