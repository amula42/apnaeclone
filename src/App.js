import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MoneyTransfer from './components/Services/MoneyTransfer';

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
      </Routes>
    <Footer />
    <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="flaticon-upload"></i></a></div>
    </>
  );
}

export default App;
