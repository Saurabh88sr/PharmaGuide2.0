import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate(); // Access the navigate function

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:7000/login', {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
          handleLogin(response.data[0]); // Call the handleLogin function with user data
          navigate('/'); // Redirect to the home page after successful login
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <div className="container w-50 p-5 mt-4 cardcolor">
      <div className="container mt-5">
        <h1 className="mb-4 text-dark">Login</h1>
        <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Username/Email..."
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password..."
              className="form-control"
              id="password"
              name="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
        <div className="mt-4">
          <a href="/login">Forget Password!</a>
          <br />
          <a href="/Signup">Sign up for PharmaGuide</a>
        </div>

        <h2>{loginStatus}</h2>
      </div>
    </div>
  );
};

export default Login;
