import md5 from 'md5';
import axios from 'axios';

export default name => {
  const ts = new Date().getTime();
  const key = 'cca76e5edd965e628f635422d981b29c';
  const private_key = 'd7eafb1ccbce710d165859efa51eafaa32b5f255';
  const hash = md5(`${ts}${private_key}${key}`);
  const instance = axios.create({
    baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=cca76e5edd965e628f635422d981b29c&hash=${hash}&nameStartsWith=${name}`,
    timeout: 10000,
  });
  instance
    .get()
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
