import gallery1 from "@assets/gallery1.jpg";
import gallery2 from "@assets/gallery2.jpg";
import gallery3 from "@assets/gallery3.jpg";
import gallery4 from "@assets/gallery4.jpg";
import gallery5 from "@assets/gallery5.jpg";
import gallery6 from "@assets/gallery6.jpg";

export type GalleryVideo = {
  id: number;
  title: string;
  embedUrl: string;
};

export const galleryVideosUtils: GalleryVideo[] = [
  {
    id: 1,
    title: "Travel Highlights",
    embedUrl: "https://www.youtube.com/embed/5OKl1rAx8a8",
  },
  {
    id: 2,
    title: "Journey Experience",
    embedUrl: "https://www.youtube.com/embed/pmZ0RFTdlG0",
  },
];

export const galleryUtils = [
  {
    id: 1,
    image: gallery1,
    name: "Gallery 1",
  },
  {
    id: 2,
    image: gallery2,
    name: "Gallery 2",
  },
  {
    id: 3,
    image: gallery3,
    name: "Gallery 3",
  },
  {
    id: 4,
    image: gallery4,
    name: "Gallery 4",
  },
  {
    id: 5,
    image: gallery5,
    name: "Gallery 5",
  },
  {
    id: 6,
    image: gallery6,
    name: "Gallery 6",
  },
];
