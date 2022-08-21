import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactUs from './Pages/ContactUs/ContactUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import OurTeam from './Pages/OurTeam/OurTeam';
import Register from './Pages/Login/Register';
import OrderList from './Pages/Dashboard/OrderList'
import AddService from './Pages/Dashboard/AddService'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import ManageServices from './Pages/Dashboard/ManageServices'
import Book from './Pages/Dashboard/Book';
import BookingList from './Pages/Dashboard/BookingList';
import Review from './Pages/Dashboard/Review';
import RequireAuth from './Shared/RequireAuth/RequireAuth';
import SingleServiceRoute from './Pages/LandingPage/SingleServiceRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/service/:id' element={<SingleServiceRoute />} />
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
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
