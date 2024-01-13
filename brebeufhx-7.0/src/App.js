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
    fetch ("/create_resume").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  const createDiv = () => {
    return (
      <div id="resultContainer" className="result-container">
        Results
        {data}
      </div>
    );
  };
  
  return (
    
    <Router>
    <div className="App">
      <Home />
      <About />
      <Work />
      
      <Maker />
      <br />      <br />      <br />
      <button className="secondary-button" onClick={createDiv}>Submit All</button>
      <div id="resultContainer" class="result-container">Results
      <div>Petro-Canada - Fuel Inspector <br/>
- Conducted thorough inspections of fuel quality, ensuring compliance with industry regulations and standards.<br/>
- Performed analysis and testing of fuel samples to assess quality, purity, and other essential parameters.<br/>
- Collaborated with cross-functional teams to identify and resolve fuel-related issues efficiently.<br/>
- Prepared detailed reports on fuel inspection findings and recommended appropriate corrective actions. <br/></div><br/><br/><br/>

<div>Suncor - Petroleum Engineer<br/>
- Designed and implemented innovative and cost-effective solutions to optimize oil extraction processes.<br/>
- Evaluated reservoir characteristics, conducted simulations, and performed data analysis to enhance production efficiency.<br/>
- Conducted field studies and monitored well performance to identify areas for improvement and increase profitability.<br/>
- Developed and implemented safety measures to ensure compliance with industry regulations.<br/></div><br/><br/><br/>

<div>Enbridge - Petroleum Products Transportation Engineer<br/>
- Oversaw the transportation and distribution of petroleum products, ensuring seamless and efficient operations.<br/>
- Monitored pipeline systems, identified potential issues, and implemented preventive and corrective maintenance plans.<br/>
- Utilized industry software to track product flow, analyze data, and optimize operational efficiency.<br/>
- Collaborated with internal teams and external suppliers to manage logistics and resolve transportation-related challenges.<br/></div><br/><br/><br/>


<div>Skills<br/>
- Proficient in petroleum engineering principles, practices, and industry-specific software.<br/>
- Strong analytical and problem-solving skills with the ability to assess complex data sets and make sound decisions.<br/>
- Extensive knowledge of fuel inspection techniques, quality control, and regulatory compliance.<br/>
- Experience in reservoir characterization, production optimization, and field study management.<br/>
- Ability to effectively collaborate with cross-functional teams and communicate complex technical concepts to non-technical stakeholders.<br/>        
- Strong attention to detail, organizational skills, and ability to manage multiple projects simultaneously.<br/>
- Proactive and result-driven with a strong commitment to operational excellence and continuous improvement.<br/></div>
      

      
      </div>
      <Testimonial />
      <Footer />
     
      
      
    </div>
    </Router>
  );
}

export default App;
