import { TOUR_IMAGES } from "./tourImages";

export type GalleryPhoto = {
  id: number;
  image: string;
  name: string;
};

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

export const galleryUtils: GalleryPhoto[] = [
  {
    id: 1,
    image: TOUR_IMAGES.tirumala,
    name: "Tirumala Pilgrimage Tour",
  },
  {
    id: 2,
    image: TOUR_IMAGES.vizag,
    name: "Vizag Beach & City Tour",
  },
  {
    id: 3,
    image: TOUR_IMAGES.araku,
    name: "Araku Valley Scenic Escape",
  },
  {
    id: 4,
    image: TOUR_IMAGES.godavari,
    name: "Rajahmundry Godavari Cruise",
  },
  {
    id: 5,
    image: TOUR_IMAGES.hyderabad,
    name: "Hyderabad Heritage Weekend",
  },
  {
    id: 6,
    image: TOUR_IMAGES.papikondalu,
    name: "Papikondalu Hill & River Tour",
  },
];
