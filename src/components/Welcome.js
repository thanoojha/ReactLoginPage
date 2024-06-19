import React from 'react';

function Welcome({ username, action, onLogout }) {
  return (
    <div>
      <h2>Welcome to HomePage, {username}!</h2>
      <p>You have successfully {action}.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Welcome;