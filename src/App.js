import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/work" element={<Work/>}/>
          <Route exact path="/testimonials" element={<Testimonials/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
