
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import HomeLayout from './Layouts/HomeLayout';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Notfound from './Pages/NotFound';
import Signup from './Pages/Signup';

function App() {
       return(
        <>
        
        <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='*' element={<Notfound/>}/>
        </Routes>
       
        </>
       )
}

export default App;
