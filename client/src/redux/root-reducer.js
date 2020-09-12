import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import notesReducer from './notes/notes.reducer';

export default combineReducers({ notes: notesReducer, user: userReducer });
