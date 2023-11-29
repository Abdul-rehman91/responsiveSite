import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';



function App() {
  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='user' element={<User/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    </Routes>

  );
}

export default App;
