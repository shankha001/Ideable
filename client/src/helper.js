import axios from 'axios';

export const register = (user) => {
  axios
    .post('/auth/users/register', user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

export const login = (user) => {
  axios
    .post('/auth/users/login', user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};
