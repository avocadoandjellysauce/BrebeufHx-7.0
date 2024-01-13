import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Maker from "./Components/Maker";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'




function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch ("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
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
