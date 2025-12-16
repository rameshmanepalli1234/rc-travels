import { StyledGallery } from "./style";
import { TbPhotoFilled } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { galleryUtils } from "@utils";

const Gallery = () => {
  return (
    <StyledGallery>
      <h4 className="gallery-title">GALLERY</h4>
      <label className="gallery-label">
        Explore our portfolio of successful transformations
      </label>
      <div className="gallery-buttons-container">
        <button className="gallery-button">
          <TbPhotoFilled />
          <span>Photos</span>
        </button>
        <button className="gallery-button">
          <FaVideo />
          <span>Videos</span>
        </button>
      </div>

      <div className="gallery-images-container">
        {galleryUtils.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} className="gallery-image" />
          </div>
        ))}
      </div>
    </StyledGallery>
  );
};

export default Gallery;
