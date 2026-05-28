import styled from "styled-components";

export const StyledPhotoSlider = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  max-width: 1100px;
  margin: 32px auto 0;
  padding-inline: clamp(12px, 4vw, 40px);

  @media (max-width: 768px) {
    margin-inline: auto;
    padding-inline: 16px;
  }

  @media (max-width: 480px) {
    padding-inline: 12px;
  }

  .slider-main {
    position: relative;
    width: 100%;
    margin-inline: auto;
    border-radius: 20px;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: 0 24px 56px rgba(15, 23, 42, 0.35);
    aspect-ratio: 16 / 9;
    min-height: 280px;
    max-height: 520px;
  }

  .slider-track {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slider-slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.55s ease;
    pointer-events: none;

    &.is-active {
      opacity: 1;
      pointer-events: auto;
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .slider-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 48px 24px 20px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(15, 23, 42, 0.85) 100%
    );
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.02em;

    @media (max-width: 768px) {
      font-size: 15px;
      padding: 40px 16px 14px;
    }
  }

  .slider-counter {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 3;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    color: #ffffff;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #ffffff;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: rgba(79, 189, 57, 0.9);
      transform: translateY(-50%) scale(1.06);
    }

    &:focus-visible {
      outline: 2px solid #fde68a;
      outline-offset: 2px;
    }

    &.slider-nav-prev {
      left: 14px;
    }

    &.slider-nav-next {
      right: 14px;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 18px;

      &.slider-nav-prev {
        left: 8px;
      }

      &.slider-nav-next {
        right: 8px;
      }
    }
  }

  @keyframes slider-dot-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .slider-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    flex-wrap: wrap;
    width: 100%;
    padding-inline: 4px;
    box-sizing: border-box;
  }

  .slider-dot {
    position: relative;
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    border: none;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.4);
    transition:
      width 0.3s ease,
      height 0.3s ease,
      background 0.25s ease;

    &.is-active {
      width: 52px;
      height: 8px;
      background: rgba(255, 255, 255, 0.35);
      box-shadow: none;
      transform: none;
    }

    &:not(.is-active):hover {
      background: rgba(255, 255, 255, 0.65);
      transform: scale(1.15);
    }

    &:focus-visible {
      outline: 2px solid #fde68a;
      outline-offset: 2px;
    }
  }

  .slider-dot-progress-fill {
    position: absolute;
    inset: 0;
    display: block;
    background: linear-gradient(90deg, #4fbd39 0%, #22d3ee 100%);
    transform: scaleX(0);
    transform-origin: left center;
    animation-name: slider-dot-progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    will-change: transform;
  }

  .slider-dots.is-paused .slider-dot-progress-fill {
    animation-play-state: paused;
  }

  .slider-thumbs {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    padding-bottom: 8px;
    padding-inline: 2px;
    box-sizing: border-box;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.35);
      border-radius: 3px;
    }
  }

  .slider-thumb {
    flex: 0 0 auto;
    width: 112px;
    height: 72px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid transparent;
    padding: 0;
    cursor: pointer;
    scroll-snap-align: start;
    opacity: 0.65;
    transition:
      opacity 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &.is-active {
      opacity: 1;
      border-color: #4fbd39;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(79, 189, 57, 0.4);
    }

    &:focus-visible {
      outline: 2px solid #fde68a;
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      width: 88px;
      height: 58px;
    }
  }
`;
