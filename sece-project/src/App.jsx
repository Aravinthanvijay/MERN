import About from "./components/FunctionalComponents/About"
import Home from "./components/FunctionalComponents/Home"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
import Navbar from "./components/FunctionalComponents/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from "./components/FunctionalComponents/Signup"
import Login from "./components/FunctionalComponents/Login"
import UseState from "./components/FunctionalComponents/Hooks/UseState"
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect"
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI"
import UseReducer from "./components/FunctionalComponents/Hooks/UseReducer.jsx"
import UseRef from "./components/FunctionalComponents/Hooks/UseRef.jsx"
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo.jsx"
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback.jsx"
import ReactLifecycleMethods from "./components/ClassComponents/ReactLifecycleMethods.jsx"
import Student from "./components/FunctionalComponents/Hooks/Student.jsx"
import Memo from "./components/FunctionalComponents/Memoization/Memo.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery" />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/usestate" element={<UseState />}></Route>
        <Route path="/useeffect" element={<UseEffect />}></Route>
        <Route path="/useeffectapi" element={<UseEffectAPI />}></Route>
        <Route path="/usereducer" element={<UseReducer />}></Route>
        <Route path="/useref" element={<UseRef />}></Route>
        <Route path="/usememo" element={<UseMemo />}></Route>
        <Route path="/callback" element={<UseCallback />}></Route>
        <Route path="/reactlifecycle" element={<ReactLifecycleMethods />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
       


      </Routes>

    </BrowserRouter>

  );
}
export default App;