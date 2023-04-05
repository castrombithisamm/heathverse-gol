import { Link } from "react-router-dom";
import Logo from "../images/logo...png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>

      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            HealthVerse provides easy access to medical records, medication
            reminders, and appointment scheduling. We believe that everyone
            deserves access to quality healthcare, and we are committed to using
            technology to make healthcare more accessible and affordable. Join
            us on our mission to revolutionize healthcare!
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/castro-mbithi-1129b4b8/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/castro.sammy/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/castrombithi/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/castrosammy1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/healthbot">HealthBot</Link>
          <Link to="/education">HeathAcademy</Link>
          <Link to="/healthrecord">HealthRecord</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/articles">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/video">Videos</Link>
          <Link to="/s">Communities</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/contact">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; HEALTHVERSE {new Date().getFullYear()} All Rights Reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
