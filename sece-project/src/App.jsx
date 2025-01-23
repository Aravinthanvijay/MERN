import About from "./components/FunctionalComponents/About"
import Home from "./components/FunctionalComponents/Home"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
import Navbar from "./components/FunctionalComponents/Navbar"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from "./components/FunctionalComponents/Signup"
import Login from "./components/FunctionalComponents/Login"
import UseState from "./components/FunctionalComponents/Hooks/UseState"
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect"
function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/usestate" element={<UseState/>}></Route>
          <Route path="/useeffect" element={<UseEffect/>}></Route>
          
    </Routes>
    
  </BrowserRouter>
  
  );
  }
  export default App;