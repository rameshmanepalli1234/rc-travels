import { TOUR_IMAGES } from "./tourImages";
import { extendedIndiaPackages } from "./indiaTourPackagesData";

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

export type TableTravelPackage = TravelPackage & {
  available: boolean;
};

/** Fixed subset of tours shown as unavailable in the comparison table */
const UNAVAILABLE_PACKAGE_IDS = new Set([
  2, 5, 9, 13, 17, 20, 24, 27, 31, 35,
]);

const withTableAvailability = (
  packages: TravelPackage[],
): TableTravelPackage[] =>
  packages.map((pkg) => ({
    ...pkg,
    available: !UNAVAILABLE_PACKAGE_IDS.has(pkg.id),
  }));

export const packagesUtils: TravelPackage[] = [
  {
    id: 1,
    title: "Tirumala Pilgrimage Package",
    location: "Tirupati, Andhra Pradesh",
    duration: "2 Days / 1 Night",
    price: 4000,
    image: TOUR_IMAGES.tirumala,
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
    image: TOUR_IMAGES.vizag,
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
    image: TOUR_IMAGES.araku,
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
    image: TOUR_IMAGES.godavari,
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
    image: TOUR_IMAGES.hyderabad,
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
    image: TOUR_IMAGES.papikondalu,
    highlights: [
      "Resort stay amid lush hills",
      "Jeep safari & nature trails",
      "All meals included",
      "River cruise & photography spots",
    ],
  },
];

export { extendedIndiaPackages };

/** Featured cards (6) + extended all-India destinations (30) for comparison table */
export const packagesTableUtils: TableTravelPackage[] = withTableAvailability([
  ...packagesUtils,
  ...extendedIndiaPackages,
]);

export const formatPackagePrice = (price: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
