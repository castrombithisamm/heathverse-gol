import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Firstaid from "./pages/firstaid/Firstaid";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Home />
      <About />
      <Firstaid />
      <Services />
      <Contact />
      <Login />
      
      
    </BrowserRouter>
  );
};

export default App;
