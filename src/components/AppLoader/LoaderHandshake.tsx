import { StyledLoaderHandshake } from "./handshakeStyles";

/** Host (RT logo face) shaking hands with a guest */
const LoaderHandshake = () => (
  <StyledLoaderHandshake
    aria-hidden
    data-testid="image-loader-handshake"
  >
    <svg viewBox="0 0 320 180" role="img" aria-label="Welcome handshake">
      <defs>
        <linearGradient id="rtFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5fd648" />
          <stop offset="100%" stopColor="#2d8a47" />
        </linearGradient>
      </defs>

      <g className="person-left">
        <ellipse className="body-left" cx="68" cy="118" rx="26" ry="34" />
        <g transform="translate(68, 44)">
          <rect
            x="-24"
            y="-24"
            width="48"
            height="48"
            rx="14"
            fill="url(#rtFaceGrad)"
          />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="20"
            fontWeight="800"
            fontFamily="system-ui, sans-serif"
          >
            RT
          </text>
        </g>
        <g className="arm-left">
          <path className="arm-stroke" d="M 94 84 L 134 92" />
          <circle className="hand-circle hand-left" cx="138" cy="92" r="10" />
        </g>
      </g>

      <g className="person-right">
        <ellipse className="body-right" cx="252" cy="118" rx="26" ry="34" />
        <circle cx="252" cy="44" r="24" fill="#e2e8f0" />
        <circle className="customer-eye" cx="244" cy="40" r="2.5" />
        <circle className="customer-eye" cx="260" cy="40" r="2.5" />
        <path
          className="customer-smile"
          d="M 244 50 Q 252 56 260 50"
        />
        <g className="arm-right">
          <path className="arm-stroke" d="M 226 84 L 186 92" />
          <circle className="hand-circle hand-right" cx="182" cy="92" r="10" />
        </g>
      </g>

      <g className="clasp-hands">
        <circle className="clasp-ring" cx="160" cy="94" r="20" />
        <ellipse cx="160" cy="94" rx="16" ry="10" fill="#fde68a" />
      </g>

      <circle className="spark spark-1" cx="142" cy="74" r="3" />
      <circle className="spark spark-2" cx="178" cy="72" r="2.5" />
      <circle className="spark spark-3" cx="188" cy="108" r="2" />
    </svg>
  </StyledLoaderHandshake>
);

export default LoaderHandshake;
