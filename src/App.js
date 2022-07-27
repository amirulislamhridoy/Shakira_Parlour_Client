import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import OurTeam from './Pages/OurTeam/OurTeam';

function App() {
  const i = './images/Ellipse 90.png'
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ourPortfolio' element={<OurPortfolio />} />
        <Route path='/ourTeam' element={<OurTeam />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
