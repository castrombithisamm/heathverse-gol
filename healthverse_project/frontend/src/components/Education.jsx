import React from "react";
import "../components/education.css";
import BgVideo from '../components/videos/bg.mp4'
import { Link } from "react-router-dom";


const Education = () => {
  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay"></div>

      <div className="home-text">
        <h1>Health Education</h1>
        <p>Empowering Healthcare Literacy Across Africa</p>
      </div>

      <div className="home-btn"><Link to="/video">Videos</Link></div>
      <div className="home-btn"><Link to="/articles">Articles</Link></div>
    </div>
  );
};

export default Education;
