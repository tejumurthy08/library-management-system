
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin';
import LandingPage from './Components/landingPage';
import AdminHome from './Components/AdminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
      </Routes>
      </BrowserRouter>
      
      
   
    </div>
  );
}

export default App;
