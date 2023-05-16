import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserData from "./UserData.json"

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateCredentials = () => {
    const user = UserData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoginError(false);
      // Redirect to home page
      history.push("/home");
    } else {
      setLoginError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateCredentials();
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        {loginError && <p className="error">Invalid username or password</p>}
      </form>
    </div>
  );
};

export default LoginPage;
