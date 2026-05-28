import styled, { keyframes } from "styled-components";

const leftArmReach = keyframes`
  0%, 12% {
    transform: rotate(48deg);
  }
  38%, 72% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(48deg);
  }
`;

const rightArmReach = keyframes`
  0%, 12% {
    transform: rotate(-48deg);
  }
  38%, 72% {
    transform: rotate(-6deg);
  }
  100% {
    transform: rotate(-48deg);
  }
`;

const handshakeBob = keyframes`
  0%, 38% {
    transform: translateY(0);
  }
  48%, 58% {
    transform: translateY(-3px);
  }
  68%, 78% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(0);
  }
`;

const claspPulse = keyframes`
  0%, 32% {
    opacity: 0;
    transform: scale(0.65);
  }
  42%, 68% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.15);
  }
`;

const handMeetHide = keyframes`
  0%, 34% {
    opacity: 1;
  }
  40%, 72% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledLoaderHandshake = styled.div`
  position: relative;
  width: 100%;
  max-width: 260px;
  height: 130px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .person-left,
  .person-right {
    animation: ${handshakeBob} 2.4s ease-in-out infinite;
  }

  .arm-left {
    transform-origin: 94px 86px;
    animation: ${leftArmReach} 2.4s ease-in-out infinite;
  }

  .arm-right {
    transform-origin: 226px 86px;
    animation: ${rightArmReach} 2.4s ease-in-out infinite;
  }

  .body-left {
    fill: #4fbd39;
  }

  .body-right {
    fill: #38bdf8;
  }

  .arm-stroke {
    fill: none;
    stroke-width: 9;
    stroke-linecap: round;
  }

  .arm-left .arm-stroke {
    stroke: #86efac;
  }

  .arm-right .arm-stroke {
    stroke: #7dd3fc;
  }

  .hand-circle {
    animation: ${handMeetHide} 2.4s ease-in-out infinite;
  }

  .hand-left {
    fill: #fde68a;
  }

  .hand-right {
    fill: #fde68a;
  }

  .clasp-ring {
    fill: rgba(253, 224, 71, 0.35);
    transform-origin: 160px 94px;
    animation: ${claspPulse} 2.4s ease-in-out infinite;
  }

  .clasp-hands {
    transform-origin: 160px 94px;
    animation: ${handshakeBob} 2.4s ease-in-out infinite;
  }

  .spark {
    fill: #fde047;
    animation: ${sparkle} 1.8s ease-in-out infinite;

    &.spark-1 {
      animation-delay: 0.5s;
    }
    &.spark-2 {
      animation-delay: 0.7s;
    }
    &.spark-3 {
      animation-delay: 0.85s;
    }
  }

  .customer-eye {
    fill: #1e293b;
  }

  .customer-smile {
    fill: none;
    stroke: #1e293b;
    stroke-width: 2;
    stroke-linecap: round;
  }

  @media (max-width: 480px) {
    height: 112px;
    margin-bottom: 14px;
    max-width: 220px;
  }
`;
