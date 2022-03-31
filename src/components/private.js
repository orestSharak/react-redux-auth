import React from "react";
import {connect} from "react-redux";


const Private = ({currentUser}) => {
  return (
    <div className="container">
      <div className="p-5 mb-4 mt-5 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Hello {currentUser && currentUser.displayName}</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one
            in
            previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
            liking.</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({currentUser}) => ({
  currentUser
});

export default connect(mapStateToProps)(Private);