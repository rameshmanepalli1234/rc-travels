import styled from "styled-components";

export const StyledGallery = styled.div`
  width: 100%;
  padding: 60px 0px 70px;

  .gallery-title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
    color: #000000;
  }

  .gallery-label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: center;
    color: #000000;
    display: block;
  }

  .gallery-button {
    background-color: #4fbd39;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }

  .gallery-buttons-container {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;

    .gallery-button {
      background-color: #4fbd39;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }
  }

  .gallery-images-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 0 60px;

    @media (max-width: 500px) {
      display: flex;
      justify-content: center;
    }
  }

  .gallery-image {
    width: 360px;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  }
`;
