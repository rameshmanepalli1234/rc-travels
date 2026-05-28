import { TOUR_IMAGES } from "./tourImages";
import type { TravelPackage } from "./packagesUtils";

const TOUR_IMAGE_LIST = Object.values(TOUR_IMAGES);

const imageForId = (id: number): string =>
  TOUR_IMAGE_LIST[(id - 1) % TOUR_IMAGE_LIST.length] ?? TOUR_IMAGE_LIST[0];

type PackageDraft = Omit<TravelPackage, "id" | "image">;

const extendedIndiaTours: PackageDraft[] = [
  {
    title: "Kashmir Paradise Package",
    location: "Srinagar, Jammu & Kashmir",
    duration: "5 Days / 4 Nights",
    price: 18500,
    highlights: ["Dal Lake houseboat stay", "Gulmarg & Pahalgam sightseeing", "Shikara ride included"],
  },
  {
    title: "Leh Ladakh Adventure",
    location: "Leh, Ladakh",
    duration: "6 Days / 5 Nights",
    price: 22000,
    highlights: ["Nubra Valley & Pangong Lake", "Monastery visits", "Oxygen support kit on request"],
  },
  {
    title: "Goa Beach Holiday",
    location: "North & South Goa",
    duration: "4 Days / 3 Nights",
    price: 9800,
    highlights: ["Beach resort stay", "Water sports add-on", "North Goa nightlife tour"],
  },
  {
    title: "Kerala Backwaters Retreat",
    location: "Alleppey, Kerala",
    duration: "4 Days / 3 Nights",
    price: 12500,
    highlights: ["Houseboat cruise", "Ayurveda spa session", "Munnar day excursion"],
  },
  {
    title: "Jaipur Pink City Tour",
    location: "Jaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 8900,
    highlights: ["Amber Fort & City Palace", "Chokhi Dhani cultural evening", "Heritage hotel stay"],
  },
  {
    title: "Udaipur Lake City Escape",
    location: "Udaipur, Rajasthan",
    duration: "3 Days / 2 Nights",
    price: 9200,
    highlights: ["Lake Pichola boat ride", "City Palace & Jag Mandir", "Sunset at Sajjangarh"],
  },
  {
    title: "Agra Taj Mahal Special",
    location: "Agra, Uttar Pradesh",
    duration: "2 Days / 1 Night",
    price: 7500,
    highlights: ["Taj Mahal sunrise visit", "Agra Fort & Mehtab Bagh", "AC cab from Delhi NCR"],
  },
  {
    title: "Varanasi Spiritual Journey",
    location: "Varanasi, Uttar Pradesh",
    duration: "3 Days / 2 Nights",
    price: 8200,
    highlights: ["Ganga Aarti experience", "Boat ride at dawn", "Sarnath Buddhist site tour"],
  },
  {
    title: "Rishikesh Yoga & Rafting",
    location: "Rishikesh, Uttarakhand",
    duration: "3 Days / 2 Nights",
    price: 7800,
    highlights: ["Ganga river rafting", "Laxman Jhula & temples", "Yoga session by the river"],
  },
  {
    title: "Manali Snow & Solang",
    location: "Manali, Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: 11200,
    highlights: ["Solang Valley activities", "Hadimba Temple visit", "Rohtang Pass (seasonal)"],
  },
  {
    title: "Shimla Heritage Hills",
    location: "Shimla, Himachal Pradesh",
    duration: "3 Days / 2 Nights",
    price: 9500,
    highlights: ["Mall Road & Ridge walk", "Kufri excursion", "Toy train ride option"],
  },
  {
    title: "Darjeeling Tea Garden Tour",
    location: "Darjeeling, West Bengal",
    duration: "4 Days / 3 Nights",
    price: 11800,
    highlights: ["Tiger Hill sunrise", "Tea estate visit", "Darjeeling Himalayan Railway"],
  },
  {
    title: "Andaman Island Getaway",
    location: "Port Blair & Havelock",
    duration: "5 Days / 4 Nights",
    price: 24500,
    highlights: ["Cellular Jail light show", "Radhanagar Beach", "Snorkelling at Elephant Beach"],
  },
  {
    title: "Rameswaram Temple Pilgrimage",
    location: "Rameswaram, Tamil Nadu",
    duration: "2 Days / 1 Night",
    price: 6200,
    highlights: ["Ramanathaswamy Temple darshan", "Dhanushkodi day trip", "Pamban Bridge viewpoint"],
  },
  {
    title: "Madurai Temple & Culture",
    location: "Madurai, Tamil Nadu",
    duration: "2 Days / 1 Night",
    price: 5800,
    highlights: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Local cuisine trail"],
  },
  {
    title: "Ooty Nilgiri Hills",
    location: "Ooty, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: 8400,
    highlights: ["Botanical Garden & Lake", "Toy train to Coonoor", "Tea factory visit"],
  },
  {
    title: "Munnar Tea Hills",
    location: "Munnar, Kerala",
    duration: "3 Days / 2 Nights",
    price: 9100,
    highlights: ["Tea plantations & waterfalls", "Eravikulam National Park", "Spice garden tour"],
  },
  {
    title: "Kodaikanal Misty Mountains",
    location: "Kodaikanal, Tamil Nadu",
    duration: "3 Days / 2 Nights",
    price: 8600,
    highlights: ["Coaker's Walk & Bryant Park", "Silver Cascade Falls", "Lake boating"],
  },
  {
    title: "Mysore Palace & Heritage",
    location: "Mysuru, Karnataka",
    duration: "2 Days / 1 Night",
    price: 6900,
    highlights: ["Mysore Palace lighting", "Chamundi Hills", "Devaraja Market visit"],
  },
  {
    title: "Hampi UNESCO Heritage",
    location: "Hampi, Karnataka",
    duration: "3 Days / 2 Nights",
    price: 8800,
    highlights: ["Virupaksha Temple", "Stone chariot & ruins tour", "Tungabhadra coracle ride"],
  },
  {
    title: "Coorg Coffee Country",
    location: "Coorg, Karnataka",
    duration: "3 Days / 2 Nights",
    price: 9300,
    highlights: ["Coffee estate homestay", "Abbey & Iruppu Falls", "Raja's Seat sunset"],
  },
  {
    title: "Rann of Kutch Festival",
    location: "Kutch, Gujarat",
    duration: "3 Days / 2 Nights",
    price: 10200,
    highlights: ["White desert safari", "Handicraft villages", "Cultural folk performances"],
  },
  {
    title: "Statue of Unity & Vadodara",
    location: "Gujarat",
    duration: "2 Days / 1 Night",
    price: 7200,
    highlights: ["Statue of Unity visit", "Sardar Sarovar viewpoint", "Vadodara palace tour"],
  },
  {
    title: "Amritsar Golden Temple",
    location: "Amritsar, Punjab",
    duration: "2 Days / 1 Night",
    price: 6800,
    highlights: ["Golden Temple visit", "Wagah Border ceremony", "Langar experience"],
  },
  {
    title: "Dalhousie & Khajjiar",
    location: "Himachal Pradesh",
    duration: "4 Days / 3 Nights",
    price: 10900,
    highlights: ["Khajjiar mini Switzerland", "Panchpula waterfalls", "Colonial hill town walks"],
  },
  {
    title: "Nainital Lake District",
    location: "Nainital, Uttarakhand",
    duration: "3 Days / 2 Nights",
    price: 8100,
    highlights: ["Naini Lake boating", "Snow View & Tiffin Top", "Mall Road shopping"],
  },
  {
    title: "Mussoorie Queen of Hills",
    location: "Mussoorie, Uttarakhand",
    duration: "3 Days / 2 Nights",
    price: 8300,
    highlights: ["Kempty Falls", "Gun Hill ropeway", "Camel's Back Road"],
  },
  {
    title: "Gangtok & Tsomgo Lake",
    location: "Gangtok, Sikkim",
    duration: "4 Days / 3 Nights",
    price: 13500,
    highlights: ["Tsomgo Lake & Baba Mandir", "Rumtek Monastery", "MG Marg evening walk"],
  },
  {
    title: "Shillong & Cherrapunji",
    location: "Meghalaya",
    duration: "4 Days / 3 Nights",
    price: 12800,
    highlights: ["Living root bridge trek", "Nohkalikai Falls", "Mawlynnong clean village"],
  },
  {
    title: "Ajanta & Ellora Caves",
    location: "Aurangabad, Maharashtra",
    duration: "3 Days / 2 Nights",
    price: 9400,
    highlights: ["Ajanta Buddhist caves", "Ellora rock-cut temples", "Bibi Ka Maqbara visit"],
  },
];

export const extendedIndiaPackages: TravelPackage[] = extendedIndiaTours.map(
  (draft, index) => {
    const id = index + 7;
    return {
      id,
      image: imageForId(id),
      ...draft,
    };
  },
);
