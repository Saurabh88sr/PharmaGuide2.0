import { useState } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [signupStatus, setSignupStatus] = useState('');
  const [showModal, setShowModal] = useState(false); // State for controlling the popup modal
  const navigate = useNavigate(); // Create the navigate function for redirection

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setShowPasswordError(true);
      return;
    }

    Axios.post('http://localhost:7000/register', {
      username: email,
      password: password,
    })
      .then((response) => {
        console.log(response);

        if (response.data.success) {
          setSignupStatus('Registration successful!');
          setShowModal(true); // Show the popup modal
          // Reset the form fields
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else {
          setSignupStatus('Registration failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Registration error:', error);
        setSignupStatus('Registration failed. Please try again.');
      });
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the popup modal
    navigate('/login'); // Redirect to the login page using navigate
  };

  return (
    <div className="container mt-5 w-50 p-5 cardcolor">
      <h1 className="mb-4 text-dark">Signup</h1>
      {showPasswordError && (
        <Alert variant="danger" onClose={() => setShowPasswordError(false)} dismissible>
          Passwords do not match.
        </Alert>
      )}
      {signupStatus && (
        <Alert variant="success" onClose={() => setSignupStatus('')} dismissible>
          {signupStatus}
        </Alert>
      )}
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="email" className="p-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Form.Text className="text-primary">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId="password" className="p-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="confirm-password" className="p-2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </Form.Group>

        <Button variant="dark mt-3" type="submit">
          Signup
        </Button>
      </Form>
      <div className="mt-4 p-1">
        <span>Already have an account? </span>
        <a href="/login">Login</a>
      </div>

      {/* Popup Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{signupStatus}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
