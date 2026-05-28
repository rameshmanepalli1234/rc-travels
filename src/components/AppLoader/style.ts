import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const auroraShift = keyframes`
  0%, 100% { transform: translate(-10%, -10%) rotate(0deg) scale(1); opacity: 0.5; }
  50% { transform: translate(10%, 5%) rotate(8deg) scale(1.15); opacity: 0.75; }
`;

const scanlineMove = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(24px, -18px) scale(1.08); }
  66% { transform: translate(-16px, 12px) scale(0.92); }
`;

const ringSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const ringSpinReverse = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

const emblemPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(79, 189, 57, 0.5), 0 12px 40px rgba(15, 23, 42, 0.35);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(79, 189, 57, 0), 0 18px 52px rgba(15, 23, 42, 0.45);
    transform: scale(1.04);
  }
`;

const logoFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

const travelAlong = keyframes`
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  94% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
`;

/** Horizontal travel fallback when offset-path is unsupported */
const driveFromLeft = keyframes`
  0% {
    left: -56px;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  100% {
    left: calc(100% + 56px);
    opacity: 0;
  }
`;

const driveFromRight = keyframes`
  0% {
    left: calc(100% + 56px);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  100% {
    left: -56px;
    opacity: 0;
  }
`;

const planeFlyFallback = keyframes`
  0% {
    left: -48px;
    top: 20%;
    opacity: 0;
    transform: rotate(-14deg) scale(0.88);
  }
  10% {
    opacity: 1;
  }
  100% {
    left: calc(100% + 48px);
    top: 10%;
    opacity: 0;
    transform: rotate(10deg) scale(1);
  }
`;

const routeDash = keyframes`
  to { stroke-dashoffset: -120; }
`;

const routeGlowPulse = keyframes`
  0%, 100% { stroke-opacity: 0.25; stroke-width: 6; }
  50% { stroke-opacity: 0.55; stroke-width: 10; }
`;

const markerPop = keyframes`
  0%, 100% { transform: scale(1) translateY(0); opacity: 0.7; }
  50% { transform: scale(1.2) translateY(-6px); opacity: 1; }
`;

const cloudDrift = keyframes`
  0% { transform: translateX(-120%) translateY(0); }
  100% { transform: translateX(120vw) translateY(-8px); }
`;

const particleRise = keyframes`
  0% {
    transform: translateY(20px) scale(0);
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  85% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-120px) scale(1);
    opacity: 0;
  }
`;

const sparkleBlink = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const compassPulse = keyframes`
  0%, 100% { opacity: 0.15; transform: rotate(0deg) scale(1); }
  50% { opacity: 0.35; transform: rotate(180deg) scale(1.08); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const progressFill = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const progressGlowMove = keyframes`
  0% { left: -30%; opacity: 0; }
  50% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const dotPulse = keyframes`
  0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
  40% { opacity: 1; transform: scale(1.15); }
`;

const taglineFade = keyframes`
  0%, 100% { opacity: 0.65; }
  50% { opacity: 1; }
`;

const SKY_PATH_OFFSET =
  'path("M -40 130 Q 220 95 480 88 T 1040 55")';
const ROAD_BUS_PATH_OFFSET =
  'path("M 1040 310 Q 720 300 480 318 T -40 328")';
const ROAD_CAR_PATH_OFFSET =
  'path("M -40 365 Q 320 358 580 362 T 1040 355")';
const GROUND_BIKE_PATH_OFFSET =
  'path("M -40 410 Q 280 405 520 408 T 1040 402")';

export const StyledAppLoader = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndexValues.LOADER};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0f172a;

  .loader-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      #0d9488 0%,
      #059669 18%,
      #2563eb 48%,
      #7c3aed 78%,
      #4fbd39 100%
    );
    background-size: 320% 320%;
    animation: ${gradientFlow} 6s ease infinite;
  }

  .loader-aurora {
    position: absolute;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    background: radial-gradient(
      ellipse at 30% 40%,
      rgba(34, 211, 238, 0.35) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 70% 60%,
      rgba(251, 191, 36, 0.25) 0%,
      transparent 45%
    );
    animation: ${auroraShift} 10s ease-in-out infinite;
    pointer-events: none;
  }

  .loader-scanline {
    position: absolute;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 100%
    );
    animation: ${scanlineMove} 4s linear infinite;
    pointer-events: none;
  }

  .loader-grid {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 75% 65% at 50% 50%, black 15%, transparent 78%);
    animation: ${gradientFlow} 20s linear infinite reverse;
  }

  .loader-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    animation: ${orbFloat} 6s ease-in-out infinite;

    &.loader-orb-1 {
      width: 300px;
      height: 300px;
      top: -90px;
      right: -70px;
      background: #fbbf24;
      opacity: 0.55;
    }

    &.loader-orb-2 {
      width: 340px;
      height: 340px;
      bottom: -110px;
      left: -90px;
      background: #4fbd39;
      opacity: 0.5;
      animation-delay: -2s;
    }

    &.loader-orb-3 {
      width: 220px;
      height: 220px;
      top: 38%;
      left: 58%;
      background: #22d3ee;
      opacity: 0.42;
      animation-delay: -3.5s;
    }

    &.loader-orb-4 {
      width: 180px;
      height: 180px;
      top: 12%;
      left: 8%;
      background: #a78bfa;
      opacity: 0.35;
      animation-delay: -5s;
    }
  }

  .loader-clouds {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.5;
  }

  .loader-cloud {
    position: absolute;
    color: rgba(255, 255, 255, 0.35);
    animation: ${cloudDrift} linear infinite;

    &.loader-cloud-1 {
      font-size: 64px;
      top: 12%;
      animation-duration: 22s;
    }

    &.loader-cloud-2 {
      font-size: 48px;
      top: 28%;
      animation-duration: 28s;
      animation-delay: -8s;
      opacity: 0.7;
    }

    &.loader-cloud-3 {
      font-size: 56px;
      bottom: 18%;
      animation-duration: 25s;
      animation-delay: -14s;
    }
  }

  .loader-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .loader-particle {
    position: absolute;
    bottom: -10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    left: calc(8% + (var(--particle-i) * 6.5%));
    animation: ${particleRise} 3.5s ease-in-out infinite;
    animation-delay: calc(var(--particle-i) * -0.28s);

    &.loader-particle-1 {
      width: 4px;
      height: 4px;
      background: #fde68a;
    }

    &.loader-particle-2 {
      width: 8px;
      height: 8px;
      background: #4fbd39;
      box-shadow: 0 0 12px #4fbd39;
    }

    &.loader-particle-3 {
      width: 5px;
      height: 5px;
      background: #22d3ee;
    }
  }

  .loader-route {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .loader-route-glow {
      fill: none;
      stroke: rgba(79, 189, 57, 0.4);
      stroke-linecap: round;
      animation: ${routeGlowPulse} 2.5s ease-in-out infinite;
    }

    .loader-route-line {
      fill: none;
      stroke-width: 2;
      stroke-dasharray: 10 14;
      stroke-linecap: round;
      animation: ${routeDash} 2s linear infinite;

      &.loader-route-sky {
        stroke: rgba(254, 243, 199, 0.55);
        stroke-width: 2.5;
        animation-duration: 2.5s;
      }

      &.loader-route-road {
        stroke: rgba(255, 255, 255, 0.42);
      }

      &.loader-route-road-alt {
        stroke: rgba(34, 211, 238, 0.4);
        stroke-dasharray: 8 18;
        animation-duration: 2.8s;
        animation-direction: reverse;
      }

      &.loader-route-ground {
        stroke: rgba(79, 189, 57, 0.5);
        stroke-dasharray: 6 12;
        animation-duration: 1.8s;
      }
    }

    .loader-route-glow.loader-route-sky {
      stroke: rgba(254, 243, 199, 0.35);
    }
  }

  .loader-vehicles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }

  .loader-marker {
    position: absolute;
    color: #4fbd39;
    font-size: 22px;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
    animation: ${markerPop} 2s ease-in-out infinite;

    &.loader-marker-1 {
      left: 14%;
      bottom: 28%;
      animation-delay: 0s;
    }

    &.loader-marker-2 {
      left: 50%;
      top: 22%;
      color: #fde68a;
      animation-delay: -0.7s;
    }

    &.loader-marker-3 {
      right: 12%;
      top: 18%;
      animation-delay: -1.4s;
    }
  }

  .loader-vehicle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 3px 12px rgba(0, 0, 0, 0.45));

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    &.loader-vehicle-plane {
      width: 34px;
      height: 34px;
      color: #fef3c7;
      offset-path: ${SKY_PATH_OFFSET};
      offset-rotate: auto;
      animation: ${travelAlong} 5.5s ease-in-out infinite;
      filter: drop-shadow(-6px 4px 10px rgba(254, 243, 199, 0.55))
        drop-shadow(0 2px 8px rgba(0, 0, 0, 0.35));

      .loader-plane-trail {
        position: absolute;
        right: 70%;
        top: 50%;
        width: 28px;
        height: 3px;
        margin-top: -1px;
        border-radius: 2px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(254, 243, 199, 0.7)
        );
        animation: ${taglineFade} 0.4s ease-in-out infinite;
      }
    }

    &.loader-vehicle-bus {
      width: 30px;
      height: 30px;
      color: #ffffff;
      offset-path: ${ROAD_BUS_PATH_OFFSET};
      offset-rotate: auto;
      animation: ${travelAlong} 7s linear infinite;
      animation-delay: -1.5s;
    }

    &.loader-vehicle-car {
      width: 28px;
      height: 28px;
      color: #22d3ee;
      offset-path: ${ROAD_CAR_PATH_OFFSET};
      offset-rotate: auto;
      animation: ${travelAlong} 6s linear infinite;
      animation-delay: -3s;
    }

    &.loader-vehicle-bike {
      width: 26px;
      height: 26px;
      color: #4fbd39;
      offset-path: ${GROUND_BIKE_PATH_OFFSET};
      offset-rotate: auto;
      animation: ${travelAlong} 4.5s ease-in-out infinite;
      animation-delay: -0.8s;
    }
  }

  @supports not (offset-path: path("M 0 0")) {
    .loader-vehicle-plane,
    .loader-vehicle-bus,
    .loader-vehicle-car,
    .loader-vehicle-bike {
      offset-path: none;
    }

    .loader-vehicle-plane {
      animation: ${planeFlyFallback} 5.5s ease-in-out infinite;
    }

    .loader-vehicle-bus {
      top: 62%;
      animation: ${driveFromRight} 7s linear infinite;
      animation-delay: -1.5s;
    }

    .loader-vehicle-car {
      top: 70%;
      animation: ${driveFromLeft} 6s linear infinite;
      animation-delay: -3s;
    }

    .loader-vehicle-bike {
      top: 78%;
      animation: ${driveFromLeft} 4.5s ease-in-out infinite;
      animation-delay: -0.8s;
    }
  }

  .loader-content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px;
    max-width: 420px;
    animation: ${fadeInUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .loader-emblem {
    position: relative;
    width: 128px;
    height: 128px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader-sparkles {
    position: absolute;
    inset: -8px;
    pointer-events: none;
  }

  .loader-spark {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fde68a;
    top: 50%;
    left: 50%;
    margin: -3px 0 0 -3px;
    transform: rotate(calc(var(--spark-i) * 45deg)) translateY(-58px);
    animation: ${sparkleBlink} 1.8s ease-in-out infinite;
    animation-delay: calc(var(--spark-i) * -0.22s);
    box-shadow: 0 0 10px #fde68a;
  }

  .loader-compass {
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(79, 189, 57, 0.2) 90deg,
      transparent 180deg,
      rgba(34, 211, 238, 0.15) 270deg,
      transparent 360deg
    );
    animation: ${compassPulse} 4s ease-in-out infinite;
  }

  .loader-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #4fbd39;
    border-right-color: rgba(255, 255, 255, 0.55);
    animation: ${ringSpin} 1s linear infinite;

    &.loader-ring-outer {
      inset: -8px;
      border-width: 2px;
      border-top-color: rgba(34, 211, 238, 0.8);
      border-left-color: rgba(253, 230, 138, 0.5);
      border-right-color: transparent;
      border-bottom-color: transparent;
      animation: ${ringSpinReverse} 2.8s linear infinite;
    }
  }

  .loader-ring-inner {
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    border: 2px dashed rgba(255, 255, 255, 0.4);
    animation: ${ringSpinReverse} 2s linear infinite;
  }

  .loader-logo {
    position: relative;
    z-index: 1;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #ffffff;
    background: linear-gradient(145deg, #5fd648 0%, #2d8a47 100%);
    animation:
      ${emblemPulse} 2s ease-in-out infinite,
      ${logoFloat} 2.5s ease-in-out infinite;
  }

  .loader-brand {
    margin: 0 0 10px;
    font-size: clamp(1.35rem, 4vw, 1.75rem);
    font-weight: 800;
    line-height: 1.25;
    background: linear-gradient(
      90deg,
      #ffffff 0%,
      #d1fae5 35%,
      #fef3c7 50%,
      #d1fae5 65%,
      #ffffff 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 2s linear infinite;
  }

  .loader-tagline {
    margin: 0 0 8px;
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    animation: ${taglineFade} 2s ease-in-out infinite;
  }

  .loader-dots {
    display: flex;
    gap: 8px;
    margin-bottom: 28px;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(180deg, #4fbd39, #22d3ee);
      animation: ${dotPulse} 1s ease-in-out infinite;
      box-shadow: 0 0 12px rgba(79, 189, 57, 0.6);

      &:nth-child(2) {
        animation-delay: 0.12s;
      }

      &:nth-child(3) {
        animation-delay: 0.24s;
      }
    }
  }

  .loader-progress-wrap {
    position: relative;
    width: min(300px, 78vw);
    height: 6px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
    box-shadow:
      0 0 0 1px rgba(255, 255, 255, 0.12) inset,
      0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .loader-progress-glow {
    position: absolute;
    top: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: ${progressGlowMove} 1.5s ease-in-out infinite;
    pointer-events: none;
  }

  .loader-progress-fill {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #4fbd39, #22d3ee, #fde68a, #4fbd39);
    background-size: 200% 100%;
    transform-origin: left center;
    animation:
      ${progressFill} 1.4s ease-in-out infinite,
      ${gradientFlow} 2s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
