import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from './notes.types';

export const fetchNotesRequest = () => {
  return {
    type: FETCH_NOTES_REQUEST,
  };
};

export const fetchNotesSuccess = (notes) => {
  return {
    type: FETCH_NOTES_SUCCESS,
    payload: notes,
  };
};
