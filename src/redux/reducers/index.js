import {combineReducers} from "redux";
import currentUser from "./firebase-reducer";

const rootReducer = combineReducers({
  currentUser
});

export default rootReducer;