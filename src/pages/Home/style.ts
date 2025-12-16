import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 100px 150px 70px 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 1200px) {
    padding: 100px 50px 70px 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 30px 50px 30px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 60px 40px 40px 20px;
    gap: 25px;
  }

  > * {
    flex: 1;
    min-width: 0;
  }

  .home-container-carbon-clearning-left-section {
    width: 100%;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
    position: relative;
    display: block;
    min-height: 400px;
    /* overflow: hidden; */

    @media (max-width: 768px) {
      height: 300px;
      min-height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
      min-height: 250px;
    }
  }

  .home-carbon-cleaning-background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.3s ease;
    border-radius: 15px;
  }

  .home-container-carbon-clearning-left-section:hover
    .home-carbon-cleaning-background-image {
    /* transform: scale(1.05); */
  }

  .home-carbon-cleaning-floating-image-container {
    position: absolute;
    bottom: -15px;
    left: -15px;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    border-image: initial;
    z-index: 2;

    @media (max-width: 450px) {
      width: 130px;
    }
  }

  .home-carbon-cleaning-floating-image {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .experience-badge {
    position: absolute;
    top: 20px;
    right: -20px;
    color: white;
    text-align: center;
    box-shadow: rgba(79, 189, 57, 0.3) 0px 5px 15px;
    background: #4fbd39;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    z-index: 3;

    @media (max-width: 450px) {
      width: 150px;
    }
  }

  .years {
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
    line-height: 1;

    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }

  .home-carbon-cleaning-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #000000;
    text-transform: uppercase;
    line-height: 45px;

    @media (max-width: 580px) {
      text-transform: capitalize;
    }
  }

  .home-carbon-cleaning-description {
    color: rgb(33, 37, 41);
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
  }

  .home-carbon-cleaning-services-container {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgb(248, 249, 250);
    border-radius: 10px;
    transition: 0.3s;

    @media (max-width: 580px) {
      width: 100%;
    }

    &:hover {
      transform: translateY(-3px);
      background: #e8f5e5;
    }
  }

  .feature-icon {
    font-size: 26px;
    color: #4fbd39;
  }
`;
