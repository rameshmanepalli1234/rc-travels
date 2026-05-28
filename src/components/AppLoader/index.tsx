import type { CSSProperties } from "react";
import {
  FaBicycle,
  FaBus,
  FaCar,
  FaCloud,
  FaMapMarkerAlt,
  FaPlane,
} from "react-icons/fa";
import { BRAND_NAME } from "@utils";
import { StyledAppLoader } from "./style";

const PARTICLE_COUNT = 14;
const SPARKLE_COUNT = 8;
/** Sky — plane takeoff (high, left → right, climbing) */
const SKY_PATH = "M -40 130 Q 220 95 480 88 T 1040 55";
/** Upper road — bus */
const ROAD_BUS_PATH = "M 1040 310 Q 720 300 480 318 T -40 328";
/** Lower road — car */
const ROAD_CAR_PATH = "M -40 365 Q 320 358 580 362 T 1040 355";
/** Ground lane — bike from left */
const GROUND_BIKE_PATH = "M -40 410 Q 280 405 520 408 T 1040 402";

const AppLoader = () => (
  <StyledAppLoader
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="Loading application"
    data-testid="overlay-app-loader"
  >
    <div className="loader-bg" aria-hidden />
    <div className="loader-aurora" aria-hidden />
    <div className="loader-grid" aria-hidden />
    <div className="loader-scanline" aria-hidden />

    <div className="loader-orb loader-orb-1" aria-hidden />
    <div className="loader-orb loader-orb-2" aria-hidden />
    <div className="loader-orb loader-orb-3" aria-hidden />
    <div className="loader-orb loader-orb-4" aria-hidden />

    <div className="loader-clouds" aria-hidden>
      <FaCloud className="loader-cloud loader-cloud-1" />
      <FaCloud className="loader-cloud loader-cloud-2" />
      <FaCloud className="loader-cloud loader-cloud-3" />
    </div>

    <div className="loader-particles" aria-hidden>
      {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
        <span
          key={index}
          className={`loader-particle loader-particle-${index % 4}`}
          style={{ "--particle-i": index } as CSSProperties}
        />
      ))}
    </div>

    <svg className="loader-route" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden>
      <path className="loader-route-glow loader-route-sky" d={SKY_PATH} />
      <path className="loader-route-line loader-route-sky" d={SKY_PATH} />
      <path className="loader-route-line loader-route-road" d={ROAD_BUS_PATH} />
      <path className="loader-route-line loader-route-road-alt" d={ROAD_CAR_PATH} />
      <path className="loader-route-line loader-route-ground" d={GROUND_BIKE_PATH} />
    </svg>

    <div className="loader-marker loader-marker-1" aria-hidden>
      <FaMapMarkerAlt />
    </div>
    <div className="loader-marker loader-marker-2" aria-hidden>
      <FaMapMarkerAlt />
    </div>
    <div className="loader-marker loader-marker-3" aria-hidden>
      <FaMapMarkerAlt />
    </div>

    <div className="loader-vehicles" aria-hidden>
      <div className="loader-vehicle loader-vehicle-plane">
        <span className="loader-plane-trail" />
        <FaPlane />
      </div>
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

    <div className="loader-content">
      <div className="loader-emblem">
        <div className="loader-sparkles" aria-hidden>
          {Array.from({ length: SPARKLE_COUNT }, (_, index) => (
            <span
              key={index}
              className="loader-spark"
              style={{ "--spark-i": index } as CSSProperties}
            />
          ))}
        </div>
        <div className="loader-compass" aria-hidden />
        <div className="loader-ring" />
        <div className="loader-ring-inner" />
        <div className="loader-ring loader-ring-outer" />
        <span className="loader-logo">RT</span>
      </div>

      <h1 className="loader-brand">{BRAND_NAME}</h1>
      <p className="loader-tagline">Preparing your journey</p>

      <div className="loader-dots" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <div className="loader-progress-wrap">
        <div className="loader-progress-glow" aria-hidden />
        <div className="loader-progress-fill" />
      </div>
    </div>
  </StyledAppLoader>
);

export default AppLoader;
