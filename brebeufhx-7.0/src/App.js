import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Maker from "./Components/Maker"; // Import the Maker component


function App() {
  return (
    <Router>
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
     
      
      
    </div>
    </Router>
  );
}

export default App;
