import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserData from './UserData.json';
import Card from '../../Component/Card';
import News from '../About';
import MyList from '../MyList/MyList';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginError, setShowLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the provided email and password match with a user in the user data
    const user = UserData.find((user) => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
      navigate('/');
    } else {
      setShowLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform any other necessary logout actions
    navigate('/');
  };

  return (
    <div className="container mt-5 w-50 p-5 cardcolor">
      <h1 className="mb-4 text-dark">Login</h1>
      {showLoginError && (
        <Alert variant="danger" onClose={() => setShowLoginError(false)} dismissible>
          Invalid email or password.
        </Alert>
      )}
      {isLoggedIn ? (
        <>
          <div className="mb-3">
            <span>Welcome, {username}!</span>
            <Button variant="dark ml-3" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <div className="board-row">
            <a className="nav-link" href="/MyList">
              <Card feature="My Medicine List" src={MyList} alt="My Image" />
            </a>
            <a className="nav-link" href="/MainNews">
              <Card feature="Health News" imageSrc="img/syringe.png" src={News} alt="My Image" />
            </a>
          </div>
        </>
      ) : (
        <Form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
          <div className="mt-4">
            <a href="/forgot-password">Forgot Password?</a>
            <br />
            <a href="/signup">Sign up for PharmaGuide</a>
          </div>
        </Form>
      )}
    </div>
  );
}

export default Login;
