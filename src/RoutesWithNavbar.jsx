import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MemberRegister from "./pages/MemberRegister";
import Room from "./pages/Room";
import LiveStream from "./pages/LiveStream";
import AdminPage from './admin/Adminpage';
import Admin_login from "./admin/Admin_login";
import Admin_camera from './admin/Admin_camera';
import Admin_edit_site from './admin/Admin_edit_site';
import Adminbooking from './admin/Adminbooking';

const RoutesWithNavbar = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin'); // Check if the path starts with /admin

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/Room" element={<Room/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MemberRegister" element= {<MemberRegister/>}/>
        {/* Add other routes */}
        <Route path="/adminpage" element={<AdminPage />} />
        {/* Add admin routes */}
        <Route path="/admin_login" element={<Admin_login />} />
        <Route path="/adminbooking" element={<Adminbooking/>}/>
        <Route path="/admin_edit_site" element={<Admin_edit_site/>}/>
        <Route path="/admin_camera" element={<Admin_camera/>}/>
        {/* More admin routes */}
      </Routes>
    </>
  );
};

export default RoutesWithNavbar;
