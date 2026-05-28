import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { GalleryPhoto } from "@utils";
import { StyledPhotoSlider } from "./style";

export const GALLERY_SLIDER_AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD_PX = 48;

type GalleryPhotoSliderProps = {
  photos: GalleryPhoto[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
};

const GalleryPhotoSlider = ({
  photos,
  activeIndex,
  onSlideChange,
}: GalleryPhotoSliderProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [progressEpoch, setProgressEpoch] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = photos.length;

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) {
        return;
      }
      const next = ((index % count) + count) % count;
      onSlideChange(next);
    },
    [count, onSlideChange],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    setProgressEpoch((value) => value + 1);
  }, [activeIndex]);

  const onProgressComplete = useCallback(() => {
    if (!isPaused && count > 1) {
      goNext();
    }
  }, [isPaused, count, goNext]);

  const onTouchStart = (clientX: number): void => {
    touchStartX.current = clientX;
  };

  const onTouchEnd = (clientX: number): void => {
    if (touchStartX.current === null) {
      return;
    }

    const delta = clientX - touchStartX.current;
    touchStartX.current = null;

    if (delta > SWIPE_THRESHOLD_PX) {
      goPrev();
    } else if (delta < -SWIPE_THRESHOLD_PX) {
      goNext();
    }
  };

  if (count === 0) {
    return null;
  }

  const activePhoto = photos[activeIndex];

  return (
    <StyledPhotoSlider
      data-testid="section-gallery-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? 0)}
      onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
    >
      <div className="slider-main" aria-roledescription="carousel">
        <div className="slider-track">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`slider-slide ${index === activeIndex ? "is-active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <img src={photo.image} alt={photo.name} loading={index === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>

        <span className="slider-counter" aria-live="polite">
          {activeIndex + 1} / {count}
        </span>

        {activePhoto && <p className="slider-caption">{activePhoto.name}</p>}

        {count > 1 && (
          <>
            <button
              type="button"
              className="slider-nav slider-nav-prev"
              onClick={goPrev}
              aria-label="Previous photo"
              data-testid="button-gallery-prev"
            >
              <FiChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className="slider-nav slider-nav-next"
              onClick={goNext}
              aria-label="Next photo"
              data-testid="button-gallery-next"
            >
              <FiChevronRight aria-hidden />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <>
          <div
            className={`slider-dots ${isPaused ? "is-paused" : ""}`}
            role="tablist"
            aria-label="Photo slides"
          >
            {photos.map((photo, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={photo.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to ${photo.name}`}
                  className={`slider-dot ${isActive ? "is-active" : ""}`}
                  onClick={() => goTo(index)}
                >
                  {isActive && (
                    <span
                      key={`progress-${activeIndex}-${progressEpoch}`}
                      className="slider-dot-progress-fill"
                      style={{
                        animationDuration: `${GALLERY_SLIDER_AUTOPLAY_MS}ms`,
                      }}
                      onAnimationEnd={onProgressComplete}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="slider-thumbs" aria-label="Photo thumbnails">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className={`slider-thumb ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`View ${photo.name}`}
                aria-current={index === activeIndex}
              >
                <img src={photo.image} alt="" />
              </button>
            ))}
          </div>
        </>
      )}
    </StyledPhotoSlider>
  );
};

export default GalleryPhotoSlider;
