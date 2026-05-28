import styled from "styled-components";

export const StyledGallery = styled.section`
  position: relative;
  width: 100%;
  padding: 72px 0 88px;
  overflow: hidden;
  color: #ffffff;
  background: linear-gradient(
    145deg,
    #0d9488 0%,
    #059669 22%,
    #2563eb 55%,
    #7c3aed 85%,
    #5b21b6 100%
  );

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    opacity: 0.45;
  }

  &::before {
    width: 420px;
    height: 420px;
    top: -120px;
    right: -80px;
    background: #fbbf24;
  }

  &::after {
    width: 360px;
    height: 360px;
    bottom: -100px;
    left: -60px;
    background: #4fbd39;
  }

  .gallery-header {
    position: relative;
    z-index: 1;
    max-width: 640px;
    margin: 0 auto 36px;
    padding: 0 24px;
    text-align: center;
  }

  .gallery-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #fde68a;
    margin-bottom: 14px;
    padding: 6px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(253, 230, 138, 0.35);
  }

  .gallery-title {
    font-size: 44px;
    font-weight: 800;
    margin: 0 0 16px;
    line-height: 1.15;
    background: linear-gradient(90deg, #ffffff 0%, #d1fae5 50%, #fef3c7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  .gallery-label {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.9);
    display: block;
    margin: 0;
  }

  .gallery-buttons-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    gap: 14px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  .gallery-button {
    border: 2px solid rgba(255, 255, 255, 0.45);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: #ffffff;
    padding: 12px 26px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      background 0.25s ease,
      border-color 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.7);
    }

    &.gallery-button-active {
      border-color: transparent;
      background: linear-gradient(135deg, #4fbd39 0%, #22d3ee 100%);
      box-shadow:
        0 8px 28px rgba(79, 189, 57, 0.45),
        0 0 0 1px rgba(255, 255, 255, 0.2) inset;

      &:hover {
        box-shadow:
          0 12px 32px rgba(79, 189, 57, 0.55),
          0 0 0 1px rgba(255, 255, 255, 0.25) inset;
      }
    }
  }

  .gallery-images-container {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
    max-width: 1400px;
    margin: 40px auto 0;
    padding: 0 40px;

    @media (max-width: 768px) {
      padding: 0 20px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
  }

  .gallery-card {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow:
      0 16px 40px rgba(15, 23, 42, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    transition:
      transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.35s ease;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        transparent 45%,
        rgba(15, 23, 42, 0.55) 100%
      );
      opacity: 0;
      transition: opacity 0.35s ease;
      pointer-events: none;
      border-radius: 18px;
    }

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow:
        0 24px 48px rgba(15, 23, 42, 0.35),
        0 0 0 2px rgba(253, 230, 138, 0.4);

      &::after {
        opacity: 1;
      }

      .gallery-image {
        transform: scale(1.08);
      }
    }
  }

  .gallery-image {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 0.5s ease;

    @media (max-width: 500px) {
      height: 220px;
    }
  }

  .gallery-videos-container {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    max-width: 1100px;
    margin: 40px auto 0;
    padding: 0 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
      gap: 24px;
    }
  }

  .gallery-video-card {
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow:
      0 16px 40px rgba(15, 23, 42, 0.25),
      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow:
        0 24px 48px rgba(15, 23, 42, 0.35),
        0 0 0 2px rgba(253, 230, 138, 0.35);
    }
  }

  .gallery-video-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    background: #000000;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`;
