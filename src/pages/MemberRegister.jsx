import React, { useState } from 'react';
import './MemberRegister.css';
import axios from 'axios'; // เพิ่มการนำเข้า Axios สำหรับทำ HTTP requests
//import {Routes, Route, useNavigate} from 'react-router-dom';

const MemberRegister = () => {
//  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    Name: '',
    Lastname: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  
    // ตรวจสอบรูปแบบของอีเมลที่ถูกต้อง
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        console.error('Invalid email format');
      }
    }
  };
  
  const handleRegister = async () => {
    console.log(userData);
    try {
      if (userData.password !== userData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
  
      // ตรวจสอบรหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัว และประกอบด้วยตัวเลขและตัวอักษรผสมกัน
      // const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
      // if (!passwordPattern.test(userData.password)) {
      //   console.error('Password must be at least 8 characters long and contain a combination of numbers and letters');
      //   return;
      // }
  
      // ส่งข้อมูลไปยัง MongoDB โดยใช้ Axios
      let res = await axios.post('http://localhost:3001/api/register', {
        email: userData.email,
        password: userData.password,
        Name: userData.Name,
        Lastname: userData.Lastname,
      });
      console.log(res.data);
      
      if (res.data.err == "")
      {
        window.location.href = "/Booking";
      }
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  

  return (
    <div className='container'>
      <div className="header">
        <div className="text"> Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/user_1144760.png')} alt="" />
          <input type="text" name="Name" placeholder="Name" value={userData.Name} onChange={handleInputChange} />
        </div>
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/user_1144760.png')} alt="" />
          <input type="text" name="Lastname" placeholder="Lastname" value={userData.Lastname} onChange={handleInputChange} />
        </div>
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/mail_646094.png')} alt="" />
          <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/padlock_2889676.png')} alt="" />
          <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInputChange} />
        </div>
        <div className="input">
          <img style={{ width: 40, height: 30 }} src={require('./image/padlock_2889676.png')} alt="" />
          <input type="password" name="confirmPassword" placeholder="Confirm password" value={userData.confirmPassword} onChange={handleInputChange} />
        </div>
      </div>
      <div className='summit-container'>
        <button className='submit' onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default MemberRegister;