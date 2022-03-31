import React from "react";
import { getAuthenticationStatus } from "../auth/auth-service";
import {Navigate} from 'react-router-dom';

function PrivateRoute({children}) {

  return getAuthenticationStatus() ? children : <Navigate to="/login"/>;
}

export default PrivateRoute;
