import React, { useState } from 'react';
import './Admin_login.css';
import AdminPage from './Adminpage';
import axios from 'axios';

const Admin_login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // เพิ่ม state สำหรับตรวจสอบการล็อกอิน

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/admin/login', { username, password });
      console.log(response.data.message);
      setIsLoggedIn(true); // ตั้งค่า state เป็น true เมื่อล็อกอินสำเร็จ
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      // Display error message to the user
      // You can update state to show an error message on the login form
    }
  };

  if (isLoggedIn) {
    return <AdminPage />; // เมื่อล็อกอินสำเร็จแล้วให้แสดงหน้า AdminPage
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Admin_login;