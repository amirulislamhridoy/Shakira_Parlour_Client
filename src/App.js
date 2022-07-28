import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import OurTeam from './Pages/OurTeam/OurTeam';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ourPortfolio' element={<OurPortfolio />} />
        <Route path='/ourTeam' element={<OurTeam />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
