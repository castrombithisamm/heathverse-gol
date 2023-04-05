import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Firstaid from "./pages/firstaid/Firstaid";
import Services from "./pages/services/Servicesall";
import Contact from "./pages/contact/Contact";
// import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Video from "./components/Video";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Detail from "./components/Detail";
// import Create from "./components/Create";
import Article from "./components/Article";

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
        <Route path="article" element={<Article />} />
        <Route path="education" element={<Education />} />
        <Route path="articles" element={<Posts />}></Route>
        <Route path="/read/:id" element={<Detail />}></Route>
        {/* <Route path="/newblog" element={<Create />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
