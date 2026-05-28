import styled from "styled-components";
import testimonialsBackground from "@assets/testimonialBackgroundImage.avif";

export const StyledTestimonials = styled.section`
  padding: 60px 0 70px;
  background-color: #4fbd39;
  color: black;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${testimonialsBackground});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 500px) {
    padding: 20px 0 20px 0;
  }

  .testimonials-title {
    font-size: 35px;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
  }

  .testimonials-label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    display: block;
    color: white;
  }

  .testimonials-cards-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding: 0 120px;

    @media (max-width: 1000px) {
      padding: 0 20px;
      display: flex;
      justify-content: center;
    }
  }
`;
