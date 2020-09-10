import axios from "axios";
import jwt_decode from "jwt-decode";

// @route POST auth/users/register
// @desc Register User
export const register = (user) => {
  axios
    .post("/auth/users/register", user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

// @route POST auth/users/login
// @desc Login User
export const login = (user) => {
  axios
    .post("/auth/users/login", user)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      const decoded = jwt_decode(token);
      console.log(decoded);
    })
    .catch((err) => console.log(err.response.data));
};
