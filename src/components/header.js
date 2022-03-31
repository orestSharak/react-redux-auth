import React, {useLayoutEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getAuthenticationStatus} from "../auth/auth-service";
import {Container, Nav, Navbar} from "react-bootstrap";
// Redux
import {connect} from "react-redux";
import {logout} from "../redux/actions/firebase-actions";


const Header = ({logout}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();


  useLayoutEffect(() => {
    setIsAuthenticated(getAuthenticationStatus());
  });

  const handleLogout = event => {
    event.preventDefault();
    logout();
    navigate("/");
    toast.success("Logout successful");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/public'>Public</Nav.Link>
          <Nav.Link as={Link} to='/private'>Private</Nav.Link>
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <>
              <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
              {/*<Nav.Link as={Link} to='/register'>Register</Nav.Link>*/}
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({currentUser}) => {
  return {currentUser};
};

export default connect(mapStateToProps, {logout})(Header);
