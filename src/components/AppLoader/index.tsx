import type { CSSProperties } from "react";
import { FaBicycle, FaBus, FaCar, FaCloud, FaPlane, FaSun } from "react-icons/fa";
import { BRAND_NAME } from "@utils";
import { StyledAppLoader } from "./style";

export const APP_LOADER_DURATION_MS = 4000;

const CLOUD_COUNT = 10;
const PLANE_TAKEOFF_PATH = "M 60 470 Q 200 360 420 240 T 920 100";

const AppLoader = () => (
  <StyledAppLoader
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="Loading application"
    data-testid="overlay-app-loader"
  >
    {/* Sky */}
    <div className="loader-sky" aria-hidden>
      <div className="loader-sun">
        <FaSun />
        <span className="loader-sun-glow" />
        <span className="loader-sun-rays" />
      </div>

      <div className="loader-clouds">
        {Array.from({ length: CLOUD_COUNT }, (_, index) => (
          <FaCloud
            key={index}
            className={`loader-cloud loader-cloud-${(index % 5) + 1}`}
            style={{ "--cloud-i": index } as CSSProperties}
          />
        ))}
      </div>

      <svg
        className="loader-plane-path"
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path className="loader-plane-trail-line" d={PLANE_TAKEOFF_PATH} />
      </svg>

      <div className="loader-plane" aria-hidden>
        <span className="loader-plane-contrail" />
        <FaPlane />
      </div>
    </div>

    {/* Center — logo & loading text */}
    <div className="loader-center">
      <div className="loader-center-glow" aria-hidden />
      <div className="loader-emblem">
        <div className="loader-ring" />
        <div className="loader-ring loader-ring-reverse" />
        <span className="loader-logo">RT</span>
      </div>

      <h1 className="loader-brand">
        {BRAND_NAME.split(" ").map((word, index) => (
          <span
            key={word}
            className="loader-brand-word"
            style={{ "--word-i": index } as CSSProperties}
          >
            {word}{" "}
          </span>
        ))}
      </h1>

      <p className="loader-tagline">
        <span className="loader-tagline-text">Preparing your journey</span>
        <span className="loader-tagline-dots" aria-hidden>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>

      <div className="loader-progress-wrap">
        <div
          className="loader-progress-fill"
          style={{ animationDuration: `${APP_LOADER_DURATION_MS}ms` }}
        />
      </div>
    </div>

    {/* Ground — road & vehicles */}
    <div className="loader-ground" aria-hidden>
      <div className="loader-road">
        <div className="loader-road-surface" />
        <div className="loader-road-dash" />
        <div className="loader-road-dash loader-road-dash-offset" />
      </div>

      <div className="loader-road-vehicles">
        <div className="loader-vehicle loader-vehicle-bus">
          <FaBus />
        </div>
        <div className="loader-vehicle loader-vehicle-car">
          <FaCar />
        </div>
        <div className="loader-vehicle loader-vehicle-bike">
          <FaBicycle />
        </div>
      </div>
    </div>
  </StyledAppLoader>
);

export default AppLoader;
