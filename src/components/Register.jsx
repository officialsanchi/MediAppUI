import React, { useState } from 'react';
import './Auth.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.dob || !formData.gender) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('Registration successful!');
        setError('');
        // You can redirect or store token here
      } else {
        setError(data.message || 'Registration failed.');
        setSuccess('');
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
      setSuccess('');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">MediApp</div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}

      <div className="auth-links">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Register;
