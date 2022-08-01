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
import Book from './Pages/OurPortfolio/Book';
import BookingList from './Pages/OurPortfolio/BookingList';
import Review from './Pages/OurPortfolio/Review';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/ourPortfolio' element={<RequireAuth>
          <OurPortfolio />
        </RequireAuth>}>
          <Route index element={<OrderList />} />
          <Route path=':addService' element={<AddService />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageServices' element={<ManageServices />} />
          <Route path='book' element={<Book />} />
          <Route path='bookingList' element={<BookingList />} />
          <Route path='review' element={<Review />} />
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
