import styled from "styled-components";

export const StyledAboutUs = styled.div`
  width: 100%;
  background-color: black;
  /* padding: 0 30px; */

  .about-us-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;
    margin-right: 100px;

    @media (max-width: 450px) {
      width: 86%;
      height: 400px;
      margin: 20px auto 0 auto;
    }
  }

  .about-us-main-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: white;
    margin-top: 30px;

    @media (max-width: 450px) {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }

  .about-us-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: white;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .about-us-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 60px 0 30px;

    @media (max-width: 450px) {
      padding: 0;
    }
  }

  .about-us-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    padding: 0 100px;

    @media (max-width: 450px) {
      padding: 0 10px;
      gap: 0;
    }
  }

  .about-us-description {
    padding: 0 40px;
    text-align: justify;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .about-us-contact-us {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
    background-color: white;
    margin-top: 20px;
    padding: 20px;
  }

  .about-us-contact-us-title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: black;

    @media (max-width: 450px) {
      font-size: 30px;
    }
  }

  .about-us-contact-us-subtitle {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: black;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .about-us-contact-us-button {
    width: 200px;
    height: 35px;
    background-color: #4fbd39;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
  }

  .about-us-vision-mission-title {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    color: white;
    margin: 40px 0;

    @media (max-width: 450px) {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }

  .vission-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;

    @media (max-width: 450px) {
      flex-direction: column-reverse;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  }

  .vision-image {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;

    @media (max-width: 450px) {
      width: 90%;
      height: 300px;
      margin: 0 auto;
    }
  }

  .vision-content {
    color: white;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .vision-content-title {
    font-size: 25px;
    font-weight: 600;
  }

  .mission-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 100px;
    margin-bottom: 70px;

    @media (max-width: 450px) {
      flex-direction: column;
      padding: 0 20px;
    }
  }

  .mission-image {
    width: 500px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: white(0, 0, 0, 0.1) 0px 5px 15px;

    @media (max-width: 450px) {
      width: 90%;
      height: 300px;
      margin: 0 auto;
    }
  }

  .mission-content {
    color: white;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 450px) {
      padding: 0 20px;
    }
  }

  .mission-content-title {
    font-size: 25px;
    font-weight: 600;
  }

  .about-us-main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 450px) {
      flex-direction: column;
    }
  }
`;
