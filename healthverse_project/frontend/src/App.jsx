import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Firstaid from "./pages/firstaid/Firstaid";
import Services from "./pages/services/Servicesall";
import Contact from "./pages/contact/Contact";
// import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from "./components/Login";
import Video from './components/Video'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="firstaid" element={<Firstaid />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="video" element={<Video />} />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
