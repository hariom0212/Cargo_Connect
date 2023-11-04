
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Client from './components/Client';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
      <Navbar/>
      
    <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="client" element={<Client/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
