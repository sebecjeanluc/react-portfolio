import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// Pages components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      {/* <NavTabs /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projectGallery' element={<ProjectGallery />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
