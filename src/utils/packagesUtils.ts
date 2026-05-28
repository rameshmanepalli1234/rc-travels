import gallery1 from "@assets/gallery1.jpg";
import gallery2 from "@assets/gallery2.jpg";
import gallery3 from "@assets/gallery3.jpg";
import gallery4 from "@assets/gallery4.jpg";
import gallery5 from "@assets/gallery5.jpg";
import gallery6 from "@assets/gallery6.jpg";

export type TravelPackage = {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  badge?: string;
};

export const packagesUtils: TravelPackage[] = [
  {
    id: 1,
    title: "Tirumala Pilgrimage Package",
    location: "Tirupati, Andhra Pradesh",
    duration: "2 Days / 1 Night",
    price: 4000,
    image: gallery1,
    badge: "Most Popular",
    highlights: [
      "AC transport from Rajamahendravaram",
      "Hotel stay with breakfast",
      "Tirumala darshan assistance",
      "Local temple visits included",
    ],
  },
  {
    id: 2,
    title: "Vizag Beach & City Tour",
    location: "Visakhapatnam, Andhra Pradesh",
    duration: "3 Days / 2 Nights",
    price: 5000,
    image: gallery2,
    badge: "Best Value",
    highlights: [
      "Beach-side hotel accommodation",
      "RK Beach & Kailasagiri sightseeing",
      "Breakfast & dinner included",
      "Private cab for entire trip",
    ],
  },
  {
    id: 3,
    title: "Araku Valley Scenic Escape",
    location: "Araku, Andhra Pradesh",
    duration: "2 Days / 1 Night",
    price: 4500,
    image: gallery3,
    highlights: [
      "Scenic train / road journey options",
      "Resort or cottage stay",
      "Coffee plantation & Borra Caves visit",
      "All meals & local guide included",
    ],
  },
  {
    id: 4,
    title: "Rajahmundry Godavari Cruise",
    location: "Rajamahendravaram",
    duration: "1 Day Trip",
    price: 3200,
    image: gallery4,
    highlights: [
      "Godavari river boat cruise",
      "Traditional lunch on board",
      "Pickup & drop within city",
      "Papikondalu viewpoint stop",
    ],
  },
  {
    id: 5,
    title: "Hyderabad Heritage Weekend",
    location: "Hyderabad, Telangana",
    duration: "3 Days / 2 Nights",
    price: 6500,
    image: gallery5,
    highlights: [
      "3-star hotel near city centre",
      "Charminar, Golconda & Hussain Sagar tour",
      "Breakfast included daily",
      "Monument entry tickets covered",
    ],
  },
  {
    id: 6,
    title: "Papikondalu Hill & River Tour",
    location: "Papikondalu, Andhra Pradesh",
    duration: "2 Days / 1 Night",
    price: 4800,
    image: gallery6,
    highlights: [
      "Resort stay amid lush hills",
      "Jeep safari & nature trails",
      "All meals included",
      "River cruise & photography spots",
    ],
  },
];

export const formatPackagePrice = (price: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
