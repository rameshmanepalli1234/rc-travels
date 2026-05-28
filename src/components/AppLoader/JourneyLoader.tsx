import type { CSSProperties } from "react";
import {
  FaBicycle,
  FaBus,
  FaCar,
  FaCloud,
  FaPlane,
  FaSun,
} from "react-icons/fa";
import { BRAND_NAME } from "@utils";
import LoaderHandshake from "./LoaderHandshake";

const LOADER_BRAND_LEAD = BRAND_NAME.split(/\s+/)[0] ?? "Ramesh";
const LOADER_BRAND_TAIL = BRAND_NAME.replace(
  new RegExp(`^${LOADER_BRAND_LEAD}\\s+`),
  "",
);
const LOADER_BRAND_TAIL_WORDS = LOADER_BRAND_TAIL.split(/\s+/);

const CLOUD_COUNT = 10;
const PLANE_TAKEOFF_PATH = "M 60 470 Q 200 360 420 240 T 920 100";

type JourneyLoaderProps = {
  progressDurationMs: number;
};

const JourneyLoader = ({ progressDurationMs }: JourneyLoaderProps) => (
  <>
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

    <div className="loader-center">
      <div className="loader-center-glow" aria-hidden />
      <LoaderHandshake />

      <p
        className="loader-greeting"
        style={{ "--text-i": 0 } as CSSProperties}
      >
        Hi!
      </p>
      <p
        className="loader-welcome-line"
        style={{ "--text-i": 1 } as CSSProperties}
      >
        Welcome to
      </p>

      <h1 className="loader-brand">
        <span
          className="loader-brand-word loader-brand-lead"
          style={{ "--word-i": 0 } as CSSProperties}
        >
          {LOADER_BRAND_LEAD}
        </span>
        <span
          className="loader-brand-word loader-brand-phrase"
          style={{ "--word-i": 1 } as CSSProperties}
        >
          {LOADER_BRAND_TAIL_WORDS.map((word, index) =>
            word === "&" ? (
              <span key={`amp-${index}`} className="loader-brand-amp">
                &
              </span>
            ) : (
              <span key={`${word}-${index}`}>{word}</span>
            ),
          )}
        </span>
      </h1>

      <p
        className="loader-status"
        style={{ "--text-i": 4 } as CSSProperties}
      >
        <span className="loader-status-text">Preparing your journey</span>
        <span className="loader-status-dots" aria-hidden>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
    </div>

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

    <div className="loader-progress-wrap" aria-hidden>
      <div
        className="loader-progress-fill"
        style={{ animationDuration: `${progressDurationMs}ms` }}
      />
    </div>
  </>
);

export default JourneyLoader;
