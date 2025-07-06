import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    console.log({ username, password });
    alert('Login Successful!');
  };

  return (
    <div style={{ backgroundColor: '#7FFF00', minHeight: '100vh', paddingTop: '60px' }}>
      <Container style={{ maxWidth: '400px', paddingTop: '40px' }}>
        <h2 className="mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
