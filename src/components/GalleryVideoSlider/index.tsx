import { useCallback, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { GalleryVideo } from "@utils";
import { StyledVideoSlider } from "./style";

type GalleryVideoSliderProps = {
  videos: GalleryVideo[];
};

const GalleryVideoSlider = ({ videos }: GalleryVideoSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = videos.length;

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) {
        return;
      }
      setActiveIndex(((index % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  if (count === 0) {
    return null;
  }

  const activeVideo = videos[activeIndex];

  return (
    <>
      <StyledVideoSlider data-testid="section-gallery-video-slider">
        <div className="video-slider-main" aria-roledescription="carousel">
          <div className="video-slider-wrap">
            <iframe
              key={activeVideo.id}
              src={activeVideo.embedUrl}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="video-slider-title">{activeVideo.title}</p>

          {count > 1 && (
            <>
              <button
                type="button"
                className="video-slider-nav video-slider-nav-prev"
                onClick={goPrev}
                aria-label="Previous video"
              >
                <FiChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                className="video-slider-nav video-slider-nav-next"
                onClick={goNext}
                aria-label="Next video"
              >
                <FiChevronRight aria-hidden />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="video-slider-dots" role="tablist" aria-label="Video slides">
            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Play ${video.title}`}
                className={`video-slider-dot ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        )}
      </StyledVideoSlider>

      <h3 className="gallery-subsection-title gallery-subsection-all">All videos</h3>
      <div className="video-slider-grid" data-testid="section-gallery-video-grid">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`gallery-video-card ${index === activeIndex ? "is-active-video" : ""}`}
          >
            <button
              type="button"
              className="gallery-video-select"
              onClick={() => goTo(index)}
              aria-label={`Select ${video.title}`}
            >
              <div className="gallery-video-wrap">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <span className="gallery-video-label">{video.title}</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryVideoSlider;
