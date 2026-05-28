import { useState } from "react";
import { StyledGallery } from "./style";
import { TbPhotoFilled } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import GalleryPhotoSlider from "@components/GalleryPhotoSlider";
import GalleryVideoSlider from "@components/GalleryVideoSlider";
import { galleryUtils, galleryVideosUtils } from "@utils";

type GalleryTab = "photos" | "videos";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("photos");
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePhotoSelect = (index: number): void => {
    setPhotoIndex(index);
    document
      .querySelector("[data-testid='section-gallery-slider']")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <StyledGallery>
      <header className="gallery-header">
        <span className="gallery-eyebrow">Travel Memories</span>
        <h2 className="gallery-title">GALLERY</h2>
        <p className="gallery-label">
          Stunning journeys, happy travellers, and unforgettable destinations
          captured by Ramesh Tours &amp; Travels.
        </p>
      </header>

      <div className="gallery-buttons-container">
        <button
          type="button"
          className={`gallery-button ${activeTab === "photos" ? "gallery-button-active" : ""}`}
          onClick={() => setActiveTab("photos")}
          aria-pressed={activeTab === "photos"}
        >
          <TbPhotoFilled />
          <span>Photos</span>
        </button>
        <button
          type="button"
          className={`gallery-button ${activeTab === "videos" ? "gallery-button-active" : ""}`}
          onClick={() => setActiveTab("videos")}
          aria-pressed={activeTab === "videos"}
        >
          <FaVideo />
          <span>Videos</span>
        </button>
      </div>

      {activeTab === "photos" ? (
        <>
          <h3 className="gallery-subsection-title">Featured highlights</h3>
          <GalleryPhotoSlider
            photos={galleryUtils}
            activeIndex={photoIndex}
            onSlideChange={setPhotoIndex}
          />

          <h3 className="gallery-subsection-title gallery-subsection-all">
            All photos
          </h3>
          <div className="gallery-images-container" data-testid="section-gallery-photos">
            {galleryUtils.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-card ${index === photoIndex ? "is-active-card" : ""}`}
                onClick={() => handlePhotoSelect(index)}
                aria-label={`View ${item.name} in slider`}
                aria-current={index === photoIndex}
              >
                <img src={item.image} alt={item.name} className="gallery-image" loading="lazy" />
                <span className="gallery-card-caption">{item.name}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="gallery-subsection-title">Featured videos</h3>
          <GalleryVideoSlider videos={galleryVideosUtils} />
        </>
      )}
    </StyledGallery>
  );
};

export default Gallery;
