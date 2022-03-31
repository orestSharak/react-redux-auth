import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default configureStore;