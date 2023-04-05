import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";
const Home = () => {
  return (
    <div>
      <MainHeader />
      <Services />
      <Values/>
      <FAQs/>
      <Testimonials/>
      {/* <Footer/> */}
      
    </div>
  );
};

export default Home;
