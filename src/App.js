import './styles.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';

const mockUsers = {};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [action, setAction] = useState('');

  const handleLogin = (user, pass) => {
    if (mockUsers[user] && mockUsers[user] === pass) {
      setUsername(user);
      setIsLoggedIn(true);
      setAction('logged in');
    } else {
      alert('Invalid credentials.');
    }
  };

  const handleRegister = (user, pass) => {
    if (mockUsers[user]) {
      alert('Username already exists.');
    } else {
      mockUsers[user] = pass;
      setUsername(user);
      setIsLoggedIn(true);
      setAction('registered');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setAction('');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} onRegister={handleRegister} />
      ) : (
        <Welcome username={username} action={action} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;