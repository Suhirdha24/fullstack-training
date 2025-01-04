import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/FunctionalComponents/NavBar.jsx";
import Gallery from "./Components/FunctionalComponents/Gallery.jsx";
import Home from "./Components/FunctionalComponents/Home.jsx";
import About from "./Components/FunctionalComponents/About.jsx";
import Contact from "./Components/FunctionalComponents/Contact.jsx";
import Footer from "./Components/FunctionalComponents/Footer.jsx";
import UseEffect from "./Components/FunctionalComponents/UseEffect.jsx";
import UseRefExample from "./Components/FunctionalComponents/UseRef.jsx";
import UseContext from "./Components/FunctionalComponents/UseContext.jsx";
import UseMemo from "./Components/FunctionalComponents/UseMemo.jsx";
import Login from "./Components/FunctionalComponents/Login.jsx";
import Signup from "./Components/FunctionalComponents/Signup.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                college="Kongu Engineering"
                clg1="Kongu Arts"
                clg2="Naturopathy"
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-ref" element={<UseRefExample />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
