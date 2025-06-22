import './App.css';
import { Toaster } from 'react-hot-toast';
import UserLayout from './Components/layout/UserLayout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
