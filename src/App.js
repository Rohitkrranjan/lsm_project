
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Notfound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login'


function App() {
       return(
        <>
        
        <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='*' element={<Notfound/>}/>
              <Route path='/Login' element={<Login/>}/>
        </Routes>
       
        </>
       )
}

export default App;
