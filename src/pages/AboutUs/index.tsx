import { StyledAboutUs } from "./styles";
import AboutUsImage from "@assets/AboutUsImage.jpg";
import VisionImage from "@assets/vision.jpg";
import MissionImage from "@assets/mission.jpg";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1 className="about-us-main-title">About Us</h1>
      <div className="about-us-main-container">
        <div>
          <div className="about-us-container">
            <div className="about-us-content">
              <h1 className="about-us-title">Welcome to RC Tours & Travels</h1>
              <p className="about-us-description">
                Experience the ultimate travel comfort with our expertly crafted
                tours and travel services. We specialize in creating
                unforgettable journeys using carefully planned itineraries,
                trusted partners, and seamless logistics. Whether it&apos;s a
                relaxing getaway, an adventurous expedition, or a business trip,
                our professional team ensures every detail is handled with
                precision and care. Your journey deserves the best, and we
                deliver exceptional experiences that turn every trip into a
                lasting memory.
              </p>
              <p className="about-us-description">
                Whether you&apos;re planning a short weekend escape or a
                complete international tour, we&apos;ve got you covered! From
                flights and accommodations to sightseeing and guided tours, our
                experienced travel experts take care of everything. We work with
                high-quality service providers to ensure comfort, safety, and
                value at every step. Your satisfaction is our top priority, and
                we&apos;re committed to making your travel smooth, enjoyable,
                and truly unforgettable—start your next adventure with us today!
                🌍✈️
              </p>
            </div>
          </div>
        </div>

        <img src={AboutUsImage} alt="About Us" className="about-us-image" />
      </div>
      <div className="about-us-contact-us">
        <label className="about-us-contact-us-title">
          First Time Ever in Rajahmundry
        </label>
        <label className="about-us-contact-us-subtitle">
          Premium Tours and Travel Services
        </label>
        <button className="about-us-contact-us-button">Contact Us</button>
      </div>
      <div className="about-us-vision-mission-title">VISION & MISSION</div>

      <div className="vission-container">
        <div className="vision-content">
          <label className="vision-content-title">Vision</label>
          <p>
            Our vision is to become a trusted leader in the tours and travel
            industry by creating meaningful, memorable, and enriching travel
            experiences for every traveler. We aim to inspire people to explore
            the world with confidence, comfort, and curiosity, while promoting
            sustainable tourism and cultural understanding. Through innovation,
            personalized service, and a passion for travel, we strive to connect
            people to destinations in a way that leaves lasting impressions and
            lifelong memories.
          </p>
        </div>
        <img src={VisionImage} alt="Vision" className="vision-image" />
      </div>

      <div className="mission-container">
        <img src={MissionImage} alt="Mission" className="mission-image" />
        <div className="mission-content">
          <label className="mission-content-title">Mission</label>
          <p>
            Our mission is to provide exceptional tours and travel services that
            combine comfort, safety, and value for our customers. We are
            committed to designing well-planned itineraries, offering reliable
            transportation and accommodations, and delivering personalized
            support at every step of the journey. By focusing on customer
            satisfaction, quality service, and ethical travel practices, we aim
            to make every trip smooth, enjoyable, and unforgettable for
            individuals, families, and groups alike.
          </p>
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
