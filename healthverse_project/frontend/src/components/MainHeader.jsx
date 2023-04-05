import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header...svg";

const MainHeader = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [banners, setBanners] = useState([]);

  // useEffect(() => {
  // 	fetch("http://127.0.0.1:8000/api1/banners/")
  // 		.then(res => res.json())
  // 		.then(
  // 			(result) => {
  // 				setIsLoaded(true);
  // 				setBanners(result);
  // 			},
  // 			(error) => {
  // 				setIsLoaded(true);
  // 				setError(error);
  // 			}
  // 		);
  // }, []);

  // if (error) {
  // 	return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  // 	return <div>Loading...</div>;
  // } else {

  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#AccessToPrimaryHealthcare</h4>
          <h1>Empowering Healthcare Literacy</h1>
          <p>
            Everyone deserves easy access to quality primary healthcare for a
            healthy life.{" "}
          </p>
          <Link to="/education" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            {/* {banners.map(({ img, id, alt_text }) => (
              <img src={Image} alt={alt_text} />
            ))} */}

            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};
// };

export default MainHeader;
