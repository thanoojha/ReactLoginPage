// src/components/Login.js
import React, { useState } from 'react';

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (validateForm()) {
      onLogin(username, password);
    }
  };

  const handleRegister = () => {
    if (validateForm()) {
      onRegister(username, password);
    }
  };

  const validateForm = () => {
    if (!username || !password) {
      setError('Both fields are required.');
      return false;
    }
    if (username.length < 4) {
      setError('Username must be at least 4 characters long.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div>
      <h2>{isRegister ? 'Register' : 'Login'} Page</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={isRegister ? handleRegister : handleLogin}>
        {isRegister ? 'Register' : 'Login'}
      </button>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Login' : 'Register'}
      </button>
    </div>
  );
}

export default Login;