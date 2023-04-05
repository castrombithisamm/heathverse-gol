import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3..jpg";
import StoryImage from "../../images/about1.svg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3..svg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="body-color">

      <Header title="About Us" image={HeaderImage}>
        HealthVerse is a digital health platform that aims to improve access to
        quality primary healthcare in Africa through affordable and innovative
        technology solutions. Our team is dedicated to creating a more
        accessible and efficient healthcare system for everyone, regardless of
        location or socio-economic status.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              HealthVerse was founded with the aim of improving access to
              quality primary healthcare in Africa using affordable digital
              technology. Our team recognized the need for a solution that could
              educate people about primary healthcare, promote health literacy,
              and improve health-seeking behaviors.
            </p>
            <p>
              We also identified the need for a platform that could provide
              people with easy access to first aid approaches to certain medical
              conditions, even before the arrival of a professional healthcare
              practitioner.
            </p>
            <p>
              With this in mind, we set out to develop a digital solution that
              could revolutionize primary healthcare access in Africa.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Our vision at HealthVerse is to create a more accessible and
              efficient healthcare system for everyone in Africa. We envision a
              future where people can easily access high-quality primary
              healthcare services from the comfort of their homes using their
              smartphones or other digital devices.
            </p>
            <p>
              We see a world where healthcare providers can connect with
              patients in real-time, offer personalized healthcare services, and
              share medical records securely. We aim to be at the forefront of
              this healthcare revolution, providing innovative solutions that
              empower individuals and communities to take control of their
              health and well-being.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              At HealthVerse, our mission is to ensure that everyone in Africa
              has access to quality primary healthcare, regardless of their
              location or socio-economic status.
            </p>
            <p>
              We aim to achieve this by leveraging the latest digital technology
              to develop solutions that are affordable, accessible, and
              culturally sensitive. We believe that healthcare is a basic human
              right and are committed to overcoming the obstacles that prevent
              people from receiving high-quality healthcare.
            </p>
            <p>
              Our solutions are designed to address some of the most important
              issues in healthcare today, such as underdeveloped infrastructure,
              shortage of healthcare personnel, limited access to essential
              medicine, low health literacy, and poor health-seeking behavior.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
