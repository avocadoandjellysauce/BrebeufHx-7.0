import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Maker from "./Components/Maker";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <Home />
      <About />
      <Work />
      
      <Maker />
      <Testimonial />
      <Footer />
     
      
      
    </div>
    </Router>
  );
}

export default App;
