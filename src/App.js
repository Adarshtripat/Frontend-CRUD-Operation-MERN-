import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddStudent from './component/AddStudent';
import Home from './component/Home';
import Login from './component/Login';
import ViewStudent from './component/ViewStudent';
import UpdateStudentFrom from './component/UpdateStudentFrom';
import Navbar from './component/Navbar';
function App() {
  return (<>
  <Navbar/>
  <Routes>
    {/* <Home/> matlab ki ese Home page pa pahucha duga */}
    <Route path= '/' element={<Home/>}/> 
    <Route path= '/addStudent' element={<AddStudent/>}/>
    <Route path= '/loginStudent' element={<Login/>}/>
    <Route path= '/viewStudents' element={<ViewStudent/>}/>
    <Route path= '/updateStudentFrom' element={<UpdateStudentFrom/>}/>
    <Route path= '/logout' element={<Login/>}/>

  </Routes>
  </>);
}

export default App;
