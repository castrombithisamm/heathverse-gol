import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import Values from "../../components/Values";
import "./home.css";
const Home = () => {
  return (
    <div>
      <MainHeader />
      <Services />
      <Values/>
      <FAQs/>
      
    </div>
  );
};

export default Home;
