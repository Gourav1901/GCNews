import './App.css';
import NewsApp from './NewsApp';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
function App() {
  
    return (
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsApp />} />
          <Route path="/contact" element={<ContactUs />} /> 
          <Route path ="/about" element={<AboutUs/>} />
          <Route path ="/login" element={<LoginSignup/>} />
          
        </Routes>
        <Footer/>
      </Router>
    );

}

export default App;