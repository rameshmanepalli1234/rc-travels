import JourneyLoader from "./JourneyLoader";
import { StyledAppLoader } from "./style";

export const APP_LOADER_DURATION_MS = 4000;

const AppLoader = () => (
  <StyledAppLoader
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="Loading application"
    data-testid="overlay-app-loader"
  >
    <JourneyLoader progressDurationMs={APP_LOADER_DURATION_MS} />
  </StyledAppLoader>
);

export default AppLoader;
