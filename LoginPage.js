import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check user credentials
    if (username === 'admin' && password === 'admin123') {
      // If user is admin, redirect to admin dashboard
      window.location.href = '/admin';
    } else if (username === 'user' && password === 'user123') {
      // If user is regular user, redirect to user dashboard
      window.location.href = '/user';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;