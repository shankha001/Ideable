import axios from 'axios';
import jwt_decode from 'jwt-decode';
import store from './redux/store';
import { setCurrentUser } from './redux/user/user.actions';
import {
  fetchNotesRequest,
  fetchNotesSuccess,
} from './redux/notes/notes.actions';

// @route POST auth/users/register
// @desc Register User
export const register = (user) => {
  axios
    .post('/auth/users/register', user)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
};

// @route POST auth/users/login
// @desc Login User
export const login = (user) => {
  axios
    .post('/auth/users/login', user)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
    })
    .catch((err) => console.log(err.response.data));
};

// @desc Logout User
export const logoutUser = () => {
  localStorage.removeItem('jwtToken');
  store.dispatch(setCurrentUser(null));
};
// @route POST /notes/${id}/new
// @desc add Note
export const addNote = (note, id) => {
  axios
    .post(`/notes/${id}/new`, note)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err.response.data));
};

// @route GET /notes/${id}/view
// @desc view Notes
export const viewNotes = (id) => {
  store.dispatch(fetchNotesRequest());
  axios
    .get(`/notes/${id}/view`)
    .then((res) => {
      console.log(res);
      store.dispatch(fetchNotesSuccess(res.data));
    })
    .catch((err) => console.log(err));
};
