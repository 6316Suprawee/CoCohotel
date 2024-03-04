import React from 'react';
import Navbar from "./Navbar"
import About from "./pages/About"
import Booking from "./pages/Booking"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MemberRegister from "./pages/MemberRegister"
import Room from "./pages/Room"
import LiveStream from "./pages/LiveStream"
import Adminpage from "./admin/Adminpage"
import Admin_login from "./admin/Admin_login";
import Admin_camera from './admin/Admin_camera';
import Admin_edit_site from './admin/Admin_edit_site';
import Adminbooking from './admin/Adminbooking';

function App() {
  let component;
  let adminComponent;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Booking":
      component = <Booking />;
      break;
    case "/Login":
      component = <Login />;
      break;
    case "/MemberRegister":
      component = <MemberRegister />;
      break;
    case "/Room":
      component = <Room />;
      break;
    case "/LiveStream":
      component = <LiveStream />;
      break;
    case "/Admin_login":
      adminComponent = <Admin_login />;
      break;
    case "/Adminpage":
      adminComponent = <Adminpage />;
      break;
    case "/Admin_camera":
      adminComponent = <Admin_camera/>;
      break;
    default:
      component = null; // Handle default case
  }

  return (
    <>
      {adminComponent ? null : <Navbar />}
      {adminComponent || component}
    </>
  );
}

export default App;
