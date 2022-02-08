import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";
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

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/moneytransfer" element={<MoneyTransfer/>} />
        <Route exact path="/allrecharge" element={<AllRecharge/>} />
        <Route exact path="/aeps" element={<Aeps/>} />
        <Route exact path="/bbps" element={<Bbps/>} />
        <Route exact path="/voterid" element={<VoterId/>} />
        <Route exact path="/nsdlbank" element={<NsdlBank/>} />
        <Route exact path="/paytmbank" element={<PaytmBank/>} />
        <Route exact path="/msme" element={<Msme/>} />
        <Route exact path="/drivinglicence" element={<DrivingLicence/>} />
      </Routes>
    <Footer />
    <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="flaticon-upload"></i></a></div>
    </>
  );
}

export default App;
