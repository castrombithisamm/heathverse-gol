import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
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
   const [showChatbot, setShowChatbot] = useState(true);

  const toggleChatbot = () => {
    setShowChatbot((prevShowChatbot) => !prevShowChatbot);
  };
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
        <Route path=":id" element={<Detail />}></Route>
        {/* <Route path="/newblog" element={<Create />}></Route> */}
      </Routes>
      {showChatbot && (
        <iframe
          src="https://web.powerva.microsoft.com/environments/Default-259007e7-c741-440b-aadf-4522cc354038/bots/new_bot_9239433a581544d1a35a30de79d4554f/webchat"
          title="Chatbot"
          frameborder="0"
          style={{
            position: "fixed",
            backgroundColor: "#f1f1f1",
            color: "#333",
            bottom: "0",
            right: "0",
            width: "20%",
            height: "60%",
            zIndex: "999",
          }}
        ></iframe>
      )}
      <button onClick={toggleChatbot}>Toggle chatbot</button>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
