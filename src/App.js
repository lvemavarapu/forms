
import './App.css';
import AccordionUsage  from "./components/AccordionUsage";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Gallery from "./pages/Gallery";
import Signup from "./pages/Signup";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import React from "react";




function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
     {/*<AccordionUsage/>*/}

      <Footer />
    </>
  );
}

export default App;