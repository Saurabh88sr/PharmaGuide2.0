import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowPasswordError(true);
      return;
    }
    // Here you can implement your authentication logic
  };

  return (
    <div className="container mt-5 w-50 p-5 cardcolor ">
      <h1 className="mb-4 text-dark">Signup</h1>
      {showPasswordError && (
        <Alert variant="danger" onClose={() => setShowPasswordError(false)} dismissible>
          Passwords do not match.
        </Alert>
      )}
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="email" className='p-2'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Form.Text className="text-primary">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
       
        <Form.Group controlId="password" className='p-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
     
        <Form.Group controlId="confirm-password" className='p-2'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>

        <Button variant="dark mt-3" type="submit" >Signup</Button>
      </Form>
      <div className="mt-4 p-1">
        <span>Already have an account? </span>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Signup;
