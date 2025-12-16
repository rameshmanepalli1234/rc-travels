import styled from "styled-components";

export const StyledProcessCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 320px;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: #4fbd39;

    .process-card-icon-image {
      transform: scaleX(-1);
    }
  }

  .process-card-icon {
    position: relative;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    background: #4fbd39;
    border-radius: 50%;
    /* transition: 0.3s; */
  }

  .process-card-icon-image {
    font-size: 28px;
    /* font-weight: 700; */
    color: white;
    transition: transform 0.3s ease;
  }

  .process-card-icon-step-number {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
    background: black;
    border-radius: 50%;
  }

  .process-card-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    color: white;
    /* text-align: center; */
  }

  .process-card-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0px;
    font-size: 15px;
    line-height: 1.6;
    text-align: center;
    font-weight: 600;
  }
`;
