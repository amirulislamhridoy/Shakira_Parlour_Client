import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';
import OurTeam from './Pages/OurTeam/OurTeam';
import Register from './Pages/Login/Register';
import OrderList from './Pages/OurPortfolio/OrderList'
import AddService from './Pages/OurPortfolio/AddService'
import MakeAdmin from './Pages/OurPortfolio/MakeAdmin'
import ManageServices from './Pages/OurPortfolio/ManageServices'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ourPortfolio' element={<OurPortfolio />}>
          <Route index element={<OrderList />} />
          <Route path=':addService' element={<AddService />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageServices' element={<ManageServices />} />
        </Route>
        <Route path='/ourTeam' element={<OurTeam />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
