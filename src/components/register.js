import React, {useRef, useState} from "react";
import {toast} from "react-toastify";
import {Alert, Button, Card, Container, Form} from 'react-bootstrap';
import {useNavigate, Link} from "react-router-dom";
// Redux
import {connect} from "react-redux";
import {register} from "../redux/actions/firebase-actions";

const Register = ({register}) => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      await toast.success("Registration successful");
      navigate("/private");
    } catch (e) {
      setError("Failed to create an account");
      console.log('handleSubmit error: ', e);
    }
    setLoading(false);

  }
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "calc(100vh - 68px)"}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required/>
              </Form.Group>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required/>
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required/>
              </Form.Group>
              <Button className="w-100 mt-4" type="submit" disabled={loading}>Sign Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
};

export default connect(null, {register})(Register);
