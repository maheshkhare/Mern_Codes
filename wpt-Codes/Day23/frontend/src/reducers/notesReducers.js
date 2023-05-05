import {
  NOTE_ADD_REQUEST,
  NOTE_ADD_SUCCESS,
  NOTE_ADD_FAIL,
  NOTE_ADD_RESET,
  NOTE_FETCH_REQUEST,
  NOTE_FETCH_SUCCESS,
  NOTE_FETCH_FAIL,
  NOTE_FETCH_RESET,
} from '../constants/notesConstants'

export const addNotesReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_ADD_REQUEST:
      return { loading: true }
    case NOTE_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case NOTE_ADD_FAIL:
      return { loading: false, error: action.payload }
    case NOTE_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchNotesReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_FETCH_REQUEST:
      return { loading: true }
    case NOTE_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case NOTE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case NOTE_FETCH_RESET:
      return {}
    default:
      return state
  }
}
