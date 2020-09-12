import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from './notes.types';

const INITIAL_STATE = {
  notes: {},
  loading: false,
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
