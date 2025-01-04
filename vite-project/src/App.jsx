import "./App.css";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Home from "./Components/FunctionalComponents/Home";
import NavBar from "./Components/FunctionalComponents/NavBar";
import Footer from "./Components/FunctionalComponents/Footer"; 
import UseEffect from "./Components/FunctionalComponents/UseEffect";
import UseRefExample from "./Components/FunctionalComponents/UseRef"; 
import UseContext from "./Components/FunctionalComponents/UseContext"; 
import UseMemo from "./Components/FunctionalComponents/UseMemo"; 
import Login from "./Components/FunctionalComponents/Login"; 
import Signup from "./Components/FunctionalComponents/Signup"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
