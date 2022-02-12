import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoneyTransfer from './components/Services/MoneyTransfer';
import AllRecharge from './components/Services/AllRecharge';
import Aeps from './components/Services/Aeps';
import Bbps from './components/Services/Bbps';
import VoterId from './components/Services/VoterId';
import NsdlBank from './components/Services/NsdlBank';
import PaytmBank from './components/Services/PaytmBank';
import Msme from './components/Services/Msme';
import DrivingLicence from './components/Services/DrivingLicence';
import { useEffect } from 'react';
import PhotoGallery from './components/Gallery/PhotoGallery';
import VideoGallery from './components/Gallery/VideoGallery';
import CommissionChart from './components/Benefit/CommissionChart';

function App() {

  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/photogallery' element={<PhotoGallery/>} />
        <Route path='/videogallery' element={<VideoGallery/>} />
        <Route path="/commissionchart" element={<CommissionChart/>} />
        <Route path="/moneytransfer" element={<MoneyTransfer/>} />
        <Route path="/allrecharge" element={<AllRecharge/>} />
        <Route path="/aeps" element={<Aeps/>} />
        <Route path="/bbps" element={<Bbps/>} />
        <Route path="/voterid" element={<VoterId/>} />
        <Route path="/nsdlbank" element={<NsdlBank/>} />
        <Route path="/paytmbank" element={<PaytmBank/>} />
        <Route path="/msme" element={<Msme/>} />
        <Route path="/drivinglicence" element={<DrivingLicence/>} />
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    <Footer />
    <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="flaticon-upload"></i></a></div>
    </>
  );
}

export default App;