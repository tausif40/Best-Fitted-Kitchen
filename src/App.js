import './App.css';
import { Toaster } from 'react-hot-toast';
import UserLayout from './Components/layout/UserLayout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import Gallery from './Components/Gallery/Gallery';
import CategoryImages from './Components/Gallery/CategoryImages';
import AboutUs from './Components/Pages/AboutUs';
import Sale from './Components/Pages/Sale';
import Contact from './Components/Pages/Contact';

function App() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />

      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="gallery/:name" element={<CategoryImages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
