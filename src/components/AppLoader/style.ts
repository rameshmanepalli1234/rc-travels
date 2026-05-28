import styled, { keyframes } from "styled-components";
import { zIndexValues } from "@styles/zIndex";

const skyGradient = keyframes`
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 50%; }
`;

const sunPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 24px rgba(251, 191, 36, 0.7));
  }
  50% {
    transform: scale(1.06);
    filter: drop-shadow(0 0 40px rgba(251, 191, 36, 0.95));
  }
`;

const sunRaysSpin = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const cloudDrift = keyframes`
  0% { transform: translateX(-110%) translateY(0); }
  100% { transform: translateX(110vw) translateY(var(--cloud-y, 0px)); }
`;

const planeTakeoff = keyframes`
  0% {
    offset-distance: 0%;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    opacity: 0;
  }
`;

const trailDash = keyframes`
  to { stroke-dashoffset: -80; }
`;

const roadDashMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 48px 0; }
`;

const driveLeft = keyframes`
  0% {
    left: -48px;
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  94% {
    opacity: 1;
  }
  100% {
    left: calc(100% + 48px);
    opacity: 0;
  }
`;

const driveRight = keyframes`
  0% {
    left: calc(100% + 48px);
    opacity: 0;
  }
  6% {
    opacity: 1;
  }
  94% {
    opacity: 1;
  }
  100% {
    left: -48px;
    opacity: 0;
  }
`;

const centerGlow = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.85;
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

const wordReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const taglineShimmer = keyframes`
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; }
`;

const dotBounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
  40% { transform: translateY(-5px); opacity: 1; }
`;

const progressGrow = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const PLANE_PATH = 'path("M 60 470 Q 200 360 420 240 T 920 100")';

export const StyledAppLoader = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndexValues.LOADER};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #0c4a6e;

  /* ─── Sky (top ~58%) ─── */
  .loader-sky {
    position: relative;
    flex: 1 1 58%;
    min-height: 0;
    background: linear-gradient(
      180deg,
      #38bdf8 0%,
      #7dd3fc 28%,
      #bae6fd 55%,
      #e0f2fe 100%
    );
    background-size: 200% 200%;
    animation: ${skyGradient} 12s ease infinite;
    overflow: hidden;
  }

  .loader-sun {
    position: absolute;
    top: 14%;
    right: 12%;
    z-index: 4;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fde047;
    font-size: 52px;
    animation: ${sunPulse} 3s ease-in-out infinite;

    svg {
      position: relative;
      z-index: 2;
    }
  }

  .loader-sun-glow {
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(253, 224, 71, 0.55) 0%,
      transparent 70%
    );
  }

  .loader-sun-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin: -60px 0 0 -60px;
    border-radius: 50%;
    background: repeating-conic-gradient(
      from 0deg,
      rgba(253, 224, 71, 0.2) 0deg 8deg,
      transparent 8deg 18deg
    );
    animation: ${sunRaysSpin} 20s linear infinite;
    z-index: 1;
  }

  .loader-clouds {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
  }

  .loader-cloud {
    position: absolute;
    color: rgba(255, 255, 255, 0.92);
    filter: drop-shadow(0 4px 12px rgba(255, 255, 255, 0.35));
    animation: ${cloudDrift} linear infinite;
    left: 0;
    top: calc(8% + (var(--cloud-i) * 7.5%));

    &.loader-cloud-1 {
      font-size: clamp(48px, 8vw, 72px);
      animation-duration: 28s;
      animation-delay: calc(var(--cloud-i) * -2.8s);
      --cloud-y: 4px;
    }

    &.loader-cloud-2 {
      font-size: clamp(36px, 6vw, 56px);
      animation-duration: 34s;
      animation-delay: calc(var(--cloud-i) * -3.2s);
      opacity: 0.88;
      --cloud-y: -6px;
    }

    &.loader-cloud-3 {
      font-size: clamp(56px, 9vw, 80px);
      animation-duration: 32s;
      animation-delay: calc(var(--cloud-i) * -2.2s);
      --cloud-y: 8px;
    }

    &.loader-cloud-4 {
      font-size: clamp(40px, 7vw, 60px);
      animation-duration: 26s;
      animation-delay: calc(var(--cloud-i) * -4s);
      opacity: 0.8;
    }

    &.loader-cloud-5 {
      font-size: clamp(44px, 7.5vw, 64px);
      animation-duration: 30s;
      animation-delay: calc(var(--cloud-i) * -1.5s);
      --cloud-y: -4px;
    }
  }

  .loader-plane-path {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;

    .loader-plane-trail-line {
      fill: none;
      stroke: rgba(255, 255, 255, 0.35);
      stroke-width: 2;
      stroke-dasharray: 8 12;
      stroke-linecap: round;
      animation: ${trailDash} 1.5s linear infinite;
    }
  }

  .loader-plane {
    position: absolute;
    z-index: 5;
    width: 32px;
    height: 32px;
    color: #ffffff;
    offset-path: ${PLANE_PATH};
    offset-rotate: auto;
    animation: ${planeTakeoff} 4.2s ease-in-out infinite;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25));

    svg {
      width: 100%;
      height: 100%;
    }

    .loader-plane-contrail {
      position: absolute;
      right: 85%;
      top: 50%;
      width: 24px;
      height: 3px;
      margin-top: -1px;
      border-radius: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8));
    }
  }

  /* ─── Center — RT + text ─── */
  .loader-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -52%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 36px 28px;
    width: min(92vw, 400px);
    border-radius: 28px;
    background: rgba(15, 23, 42, 0.45);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-shadow:
      0 24px 64px rgba(15, 23, 42, 0.35),
      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  }

  .loader-center-glow {
    position: absolute;
    left: 50%;
    top: 38%;
    width: 220px;
    height: 220px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(79, 189, 57, 0.35) 0%,
      transparent 70%
    );
    animation: ${centerGlow} 2.5s ease-in-out infinite;
    pointer-events: none;
  }

  .loader-greeting {
    margin: 0 0 4px;
    font-size: clamp(1.5rem, 5vw, 1.85rem);
    font-weight: 800;
    color: #fde047;
    letter-spacing: -0.02em;
    animation: ${wordReveal} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(var(--text-i, 0) * 0.1s);
  }

  .loader-welcome-line {
    margin: 0 0 6px;
    font-size: clamp(0.95rem, 3.5vw, 1.1rem);
    font-weight: 600;
    color: rgba(255, 255, 255, 0.92);
    animation: ${wordReveal} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(var(--text-i, 1) * 0.1s);
  }

  .loader-brand {
    margin: 0 0 14px;
    font-size: clamp(1.15rem, 4.2vw, 1.5rem);
    font-weight: 800;
    line-height: 1.4;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 0.2em;
    row-gap: 0.1em;
  }

  .loader-brand-word {
    display: inline-block;
    animation: ${wordReveal} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(0.2s + var(--word-i) * 0.12s);
  }

  .loader-brand-phrase {
    display: inline-flex;
    align-items: center;
    gap: 0.12em;
    white-space: nowrap;
  }

  .loader-brand-amp {
    display: inline-block;
    color: #4ade80;
  }

  .loader-status {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    animation: ${wordReveal} 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
    animation-delay: calc(var(--text-i, 4) * 0.1s);
  }

  .loader-status-text {
    animation: ${taglineShimmer} 2s ease-in-out infinite;
  }

  .loader-status-dots span {
    animation: ${dotBounce} 1.2s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.15s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }

  .loader-progress-wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    width: 100%;
    height: 4px;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }

  .loader-progress-fill {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #4fbd39, #22d3ee, #fde047);
    transform-origin: left center;
    animation: ${progressGrow} linear forwards;
  }

  /* ─── Ground — road & vehicles ─── */
  .loader-ground {
    position: relative;
    flex: 0 0 22%;
    min-height: 120px;
    z-index: 6;
  }

  .loader-road {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .loader-road-surface {
    flex: 1;
    background: linear-gradient(
      180deg,
      #86efac 0%,
      #4ade80 12%,
      #374151 12%,
      #1f2937 100%
    );
  }

  .loader-road-dash {
    position: absolute;
    left: 0;
    right: 0;
    top: 22%;
    height: 4px;
    background: repeating-linear-gradient(
      90deg,
      #fde047 0,
      #fde047 20px,
      transparent 20px,
      transparent 40px
    );
    background-size: 48px 4px;
    animation: ${roadDashMove} 0.8s linear infinite;
  }

  .loader-road-dash-offset {
    top: 26%;
    opacity: 0.5;
    animation-duration: 1.1s;
  }

  .loader-road-vehicles {
    position: absolute;
    left: 0;
    right: 0;
    top: 38%;
    height: 36px;
    pointer-events: none;
  }

  .loader-vehicle {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));

    svg {
      width: 100%;
      height: 100%;
    }

    &.loader-vehicle-bus {
      width: 32px;
      height: 32px;
      color: #fff;
      animation: ${driveRight} 8s linear infinite;
      animation-delay: -0.2s;
    }

    &.loader-vehicle-car {
      width: 28px;
      height: 28px;
      color: #22d3ee;
      animation: ${driveLeft} 4.2s linear infinite;
      animation-delay: -2s;
    }

    &.loader-vehicle-bike {
      width: 24px;
      height: 24px;
      color: #4fbd39;
      animation: ${driveLeft} 4.8s linear infinite;
      animation-delay: -3.2s;
    }
  }

  @supports (offset-path: path("M 0 0")) {
    .loader-plane {
      /* plane uses offset-path in sky layer */
    }
  }

  @supports not (offset-path: path("M 0 0")) {
    .loader-plane {
      offset-path: none;
      top: 55%;
      left: -40px;
      animation: ${driveLeft} 4.2s ease-in-out infinite;
    }
  }

  @media (max-width: 480px) {
    .loader-sun {
      width: 56px;
      height: 56px;
      font-size: 40px;
      top: 10%;
      right: 8%;
    }

    .loader-center {
      padding: 22px 24px 26px;
      transform: translate(-50%, -54%);
    }
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
