import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Both fields are required!',
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome, ${email}!`,
      });
    }, 1200);
  };

  return (
    <div className="login-container">
      <img
        src="/Bugflow.png"
        alt="Bugflows Logo"
        className="logo"
      />
      <h2>Login to Bugflows</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder=" "
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder=" "
          />
          <label>Password</label>
          <span
            className="toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
