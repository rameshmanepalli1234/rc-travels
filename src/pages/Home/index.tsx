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
          <span className="years">15+</span>
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
            Leading Carbon Cleaning Specialists Since 2008
          </h2>
          <p className="home-carbon-cleaning-description">
            We&apos;re dedicated to restoring and maintaining your engine&apos;s
            peak performance through advanced carbon cleaning technology.
            <br />
            <br />
            Our team of certified technicians combines years of experience with
            cutting-edge hydrogen cleaning technology to deliver exceptional
            results. We&apos;ve successfully serviced over 3,000 vehicles,
            helping our clients achieve better fuel efficiency and reduced
            emissions.
          </p>
        </div>
        <div className="home-carbon-cleaning-services-container">
          <div className="feature-item">
            <FaCarAlt className="feature-icon" />
            Premium Driving School
          </div>
          <div className="feature-item">
            <FaWind className="feature-icon" />
            Advanced Carbon Cleaning
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
