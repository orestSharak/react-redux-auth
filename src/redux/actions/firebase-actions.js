import { auth, updateProfile } from "../../auth/auth-service";
import * as types from "./action-types";

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
    currentUser: auth.currentUser.toJSON()
  };
};

export const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS,
    currentUser: auth.currentUser.toJSON()
  };
};

export const register = (email, password, name) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    dispatch(registerSuccess());
  } catch (error) {
    throw error;
  }
};

export const login = (email, password) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    dispatch(loginSuccess());
  } catch (error) {
    throw error;
  }
};

export const logout = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: types.LOGOUT, currentUser: auth.currentUser });
  } catch (error) {
    throw error;
  }
};

export const fetchUser = () => async dispatch => {
  try {
    await auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        localStorage.setItem("isAuthenticated", true);
        dispatch({
          type: types.FETCH_USER,
          currentUser: currentUser.toJSON()
        });
      } else {
        localStorage.removeItem("isAuthenticated");
        dispatch({
          type: types.FETCH_USER,
          currentUser: null
        });
      }
    });
  } catch (error) {
    throw error;
  }
};
