import { FaCarAlt, FaWind } from "react-icons/fa";
import { StyledHome } from "./style";
import homeCarbonClearning from "../../assets/homeCarbonClearning.png";

const Home = () => {
  return (
    <StyledHome>
      <div className="home-container-carbon-clearning-left-section">
        <img
          src={homeCarbonClearning}
          alt="Carbon Cleaning Background"
          className="home-carbon-cleaning-background-image"
        />
        <div className="experience-badge">
          <span className="years">2+</span>
          Years Experience
        </div>
        <div className="home-carbon-cleaning-floating-image-container">
          <img
            src={require("../../assets/homeCarbonCleaningFloatingImage.png")}
            alt="Carbon Cleaning Floating Image"
            className="home-carbon-cleaning-floating-image"
          />
        </div>
      </div>
      <div>
        <div>
          <h2 className="home-carbon-cleaning-title">
            Leading Tourism & Travel Specialists Since 2023
          </h2>
          <p className="home-carbon-cleaning-description">
            We ensure comfortable travel experiences with well-maintained
            vehicles and professional service with every trip smooth, and
            enjoyable for our customers
            <br />
            <br />
            Our skilled team brings together driving expertise and
            customer-focused service to provide dependable transportation.
            We&apos;ve successfully completed thousands of trips, earning the
            trust of our travelers.
          </p>
        </div>
        <div className="home-carbon-cleaning-services-container">
          <div className="feature-item">
            <FaCarAlt className="feature-icon" />
            Premium Tours and Travel Services
          </div>
          <div className="feature-item">
            <FaWind className="feature-icon" />
            Reliable & Efficient Travel Service
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
