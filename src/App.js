import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  const i = './images/Ellipse 90.png'
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
