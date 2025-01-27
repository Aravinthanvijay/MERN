import About from "./components/FunctionalComponents/About"
import Home from "./components/FunctionalComponents/Home";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Signup from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
import UseState from "./components/FunctionalComponents/Hooks/UseEffect"
import UseEffect from "./components/FunctionalComponents/Hooks/UseState"
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseReducer from "./components/FunctionalComponents/Hooks/UseReducer";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import ReactLifeCycleMethods from "./components/ClassComponents/ReactLifeCycleMethods";
import Student from "./components/FunctionalComponents/Hooks/Student";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import LazyloadingWithsuspense from "./components/FunctionalComponents/Memoization/LazyloadingWithsuspense";
import UseLocalStorage from "./components/FunctionalComponents/Hooks/UseLocalStorage";
import HoC from "./components/FunctionalComponents/HoC/Hoc";
function App(){
  
  return (
    <Router>
    <Navbar/>
    
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Gallery' element={<Gallery img="SECE Logo" page="Gallery"/>}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/reactlifecyclemethods' element={<ReactLifeCycleMethods />}></Route>
        <Route path='/usestate' element={<UseState/>}></Route>
        <Route path='/useeffect' element={<UseEffect/>}></Route>
        <Route path='/useapi' element={<UseEffectAPI/>}></Route>
        <Route path='/usereducer' element={<UseReducer/>}></Route>
        <Route path='/useref' element={<UseRef/>}></Route>
        <Route path='/usememo' element={<UseMemo/>}></Route>
        <Route path='/usecallback' element={<UseCallback/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        {/* <Route path='/Coe' element={<CoE/>}></Route>
        <Route path='/examresults' element={<ExamResults/>}></Route>
        <Route path='/faculty' element={<Faculty/>}></Route>
        <Route path='/invigilator' element={<Invigilator/>}></Route> */}
        <Route path='/memo' element={<Memo/>}></Route>
        <Route path='/lazy' element={<LazyloadingWithsuspense/>}></Route>
        <Route path='/usecustom' element={<UseLocalStorage/>}></Route>
        <Route path='/hoc' element={<HoC/>}></Route>
      </Routes>
     
    </Router>
  )
}
export default App;