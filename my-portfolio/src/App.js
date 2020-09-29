import React from 'react';
import Nav from "./components/Nav";
// import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <Nav/>
      <Route exact path="/" component={About}/>
      {/* <Route exact path="/portfolio" component={Portfolio}/> */}
      <Route exact path="/contact" component={Contact}/>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
