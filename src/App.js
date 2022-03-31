import React, { useLayoutEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Redux
import { connect } from "react-redux";
import { fetchUser } from "./redux/actions/firebase-actions";
// Components
import Home from "./components/home";
import Header from "./components/header";
import Public from "./components/public";
import Private from "./components/private";
import Login from "./components/login";
import Register from "./components/register";
import PrivateRoute from "./components/private-route";
import PageNotFound from "./components/page-not-found";

function App({ fetchUser }) {

  useLayoutEffect(() => {
    fetchUser();
  },[fetchUser]);

  return (
    <HashRouter>
      <section>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/public" element={<Public/>} />
            <Route exact path="/private" element={<PrivateRoute><Private/></PrivateRoute>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>

          <ToastContainer autoClose={1000} hideProgressBar />
      </section>
    </HashRouter>
  );
}

export default connect(null, { fetchUser })(App);
