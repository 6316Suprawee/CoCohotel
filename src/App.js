import Navbar from "./Navbar"
import About from "./pages/About"
import Booking from "./pages/Booking"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MemberRegister from "./pages/MemberRegister"
import Room from "./pages/Room"
import LiveStream from "./pages/LiveStream"

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/About":
      component = <About/>
      break
    case "/Booking":
      component = <Booking/>
      break
    case "/Login":
      component = <Login/>
      break
    case "/MemberRegister":
      component = <MemberRegister/>
      break
    case "/Room":
      component = <Room/>
      break
    case "/LiveStream":
      component = <LiveStream/>
      break
  }
  return(
    <>
    <Navbar/>
    {component}
    </>
  ) 
}

export default App;
