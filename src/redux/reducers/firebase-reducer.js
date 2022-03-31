import * as types from "../actions/action-types";

export default function firebaseReducer(state = null, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT:
    case types.FETCH_USER:
      return action.currentUser;
    default:
      return state;
  }
}
