import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Main from './Layout/Main';
import DashboardLayOut from './Layout/DashboardLayOut';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashboardLayOut></DashboardLayOut>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
