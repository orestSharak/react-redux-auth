import React, {useState, useRef} from "react";
import {toast} from "react-toastify";
import {Alert, Button, Card, Container, Form} from 'react-bootstrap';
import {useNavigate, Link} from "react-router-dom";
// Redux
import {connect} from "react-redux";
import {login} from "../redux/actions/firebase-actions";

const Login = ({login}) => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      await toast.success("Login successful");
      navigate("/private");
    } catch (e) {
      setError("Failed to log in");
      console.log('handleSubmit error: ', e);
    }
    setLoading(false);
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required/>
              </Form.Group>
              <Button className="w-100 mt-4" type="submit" disabled={loading}>Log In</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </Container>
  );
};

export default connect(null, {login})(Login);
