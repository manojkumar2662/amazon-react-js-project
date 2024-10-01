import React, { useState } from 'react';
import './Login.css'; // Create this file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Sign In:', { email, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log('Register:', { email, password });
  };

  return (
    <div className="login">
      <img
        className="login-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon Logo"
      />

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={handleSignIn} className="login-signin-button">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy
          Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={handleRegister} className="login-register-button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
