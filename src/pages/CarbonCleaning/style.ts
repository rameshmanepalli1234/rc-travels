import styled from "styled-components";

const carbonCleaningBg = require("@assets/CarbonCleaning.png");

export const StyledCarbonCleaning = styled.div`
  width: 100%;
  height: 100%;
  background: url(${carbonCleaningBg}) no-repeat center / cover;
  color: white;
  background:
    linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${carbonCleaningBg}) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 70px;

  @media (max-width: 1640px) {
    padding: 70px 30px;
  }

  @media (max-width: 670px) {
    padding: 70px 0;
  }

  .carbon-cleaning-container-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    /* gap: 30px; */
  }

  .carbon-cleaning-container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 120px;

    @media (max-width: 1570px) {
      padding: 0 30px;
    }

    @media (max-width: 1400px) {
      padding: 0 20px;
    }

    @media (max-width: 710px) {
      padding: 0;
    }
  }

  .carbon-cleaning-our-specialty {
    font-size: 18px;
    font-weight: 700;
    color: #4fbd39;
    text-transform: uppercase;
    text-align: center;
  }

  .carbon-cleaning-process {
    font-size: 40px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;

    @media (max-width: 670px) {
      text-transform: capitalize;
      word-break: break-word;
      padding: 0 20px;
      text-align: center;
      font-size: 28px;
    }

    @media (max-width: 575px) {
      text-transform: capitalize;
      word-break: break-word;
      padding: 0 20px;
      text-align: center;
      font-size: 26px;
    }
  }

  .carbon-cleaning-advanced-technology {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    margin-top: 5px;

    @media (max-width: 670px) {
      font-size: 1.1rem;
      word-break: break-word;
    }

    @media (max-width: 575px) {
      font-size: 1rem;
      word-break: break-word;
    }
  }
`;
