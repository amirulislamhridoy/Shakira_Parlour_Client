import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Register from "./Pages/Login/Register";
import OrderList from "./Pages/Dashboard/OrderList";
import AddService from "./Pages/Dashboard/AddService";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageServices from "./Pages/Dashboard/ManageServices";
import Book from "./Pages/Dashboard/Book";
import BookingList from "./Pages/Dashboard/BookingList";
import Review from "./Pages/Dashboard/Review";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import SingleServiceRoute from "./Pages/LandingPage/SingleServiceRoute";
import OurPortfolio from "./Pages/OurPortfolio/OurPortfolio";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import useAdmin from "./hook/useAdmin";
import { useState } from "react";

function App() {
  
  const [date, setDate] = useState(new Date());
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/service/:id" element={<SingleServiceRoute date={date} setDate={setDate} />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {admin ? (
            <Route index element={<OrderList />} />
          ) : (
            <Route index element={<Book />} />
          )}
          <Route path=":addService" element={<AddService />} />
          <Route path="makeAdmin" element={<MakeAdmin />} />
          <Route path="manageServices" element={<ManageServices />} />
          <Route path="bookingList" element={<BookingList date={date} setDate={setDate} />} />
          <Route path="review" element={<Review />} />
        </Route>

        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/ourPortfolio" element={<OurPortfolio />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
