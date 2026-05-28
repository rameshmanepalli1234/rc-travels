import { useState } from "react";
import { StyledGallery } from "./style";
import { TbPhotoFilled } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { galleryUtils } from "@utils";

type GalleryTab = "photos" | "videos";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("photos");

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
        >
          <TbPhotoFilled />
          <span>Photos</span>
        </button>
        <button
          type="button"
          className={`gallery-button ${activeTab === "videos" ? "gallery-button-active" : ""}`}
          onClick={() => setActiveTab("videos")}
        >
          <FaVideo />
          <span>Videos</span>
        </button>
      </div>

      <div className="gallery-images-container">
        {galleryUtils.map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.image} alt={item.name} className="gallery-image" />
          </div>
        ))}
      </div>
    </StyledGallery>
  );
};

export default Gallery;
