import styled from "styled-components";

export const StyledMenuBar = styled.div`
  display: flex;
  align-items: center;
  /* background: grey; */
  /* border-radius: 12px; */
  padding: 10px;
  /* margin: 10px; */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .menu-bar-item {
    flex: 1;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 8px;
    margin: 0 4px;
    position: relative;
    overflow: hidden;
    /* background: rgba(255, 255, 255, 0.1); */
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: grey;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background: grey;
      transform: translateY(-2px);
      /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); */
      color: white;
    }

    &.active {
      background: #4fbd39;
      color: white;
      transform: translateY(-2px);
      /* box-shadow: 0 8px 25px rgba(238, 90, 36, 0.3); */
      border: 1px solid rgba(255, 255, 255, 0.3);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 70%
        );
        animation: shimmer 2s infinite;
      }
    }

    .tab-icon {
      font-size: 20px;
      margin-bottom: 4px;
      display: block;
      transition: transform 0.3s ease;

      ${(props) =>
        props.className?.includes("active") &&
        `
        transform: scale(1.1);
      `}
    }

    .tab-text {
      font-size: 12px;
      text-align: center;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      padding: 0 4px;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    /* Tablet styles */
    @media (max-width: 768px) {
      height: 50px;

      .tab-icon {
        font-size: 18px;
        margin-bottom: 2px;
      }

      .tab-text {
        font-size: 11px;
      }
    }

    /* Mobile styles */
    @media (max-width: 480px) {
      height: 45px;
      margin: 0 2px;

      .tab-icon {
        font-size: 16px;
        margin-bottom: 1px;
      }

      .tab-text {
        font-size: 10px;
        padding: 0 2px;
      }
    }

    /* Small mobile styles */
    @media (max-width: 360px) {
      height: 40px;

      .tab-icon {
        font-size: 14px;
        margin-bottom: 0;
      }

      .tab-text {
        font-size: 9px;
      }
    }
  }

  /* Container responsive adjustments */
  @media (max-width: 768px) {
    margin: 12px;
    padding: 6px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    margin: 8px;
    padding: 4px;
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    margin: 6px;
    padding: 3px;
  }
`;
