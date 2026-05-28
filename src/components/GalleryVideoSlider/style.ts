import styled from "styled-components";

export const StyledVideoSlider = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin: 32px auto 0;
  padding-inline: clamp(12px, 4vw, 40px);

  @media (max-width: 768px) {
    margin-inline: auto;
    padding-inline: 16px;
  }

  @media (max-width: 480px) {
    padding-inline: 12px;
  }

  .video-slider-main {
    position: relative;
    width: 100%;
    margin-inline: auto;
    border-radius: 20px;
    overflow: hidden;
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: 0 24px 56px rgba(15, 23, 42, 0.35);
  }

  .video-slider-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }

  .video-slider-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .video-slider-title {
    margin: 0;
    padding: 16px 20px;
    font-size: 17px;
    font-weight: 700;
    color: #ffffff;
    background: rgba(15, 23, 42, 0.75);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .video-slider-nav {
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    z-index: 2;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #ffffff;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: background 0.2s ease;

    &:hover {
      background: rgba(79, 189, 57, 0.9);
    }

    &.video-slider-nav-prev {
      left: 12px;
    }

    &.video-slider-nav-next {
      right: 12px;
    }
  }

  .video-slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 18px;
    width: 100%;
    padding-inline: 4px;
    box-sizing: border-box;
  }

  .video-slider-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    padding: 0;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.35);
    transition: background 0.2s ease, transform 0.2s ease;

    &.is-active {
      background: #4fbd39;
      transform: scale(1.2);
    }
  }

`;
