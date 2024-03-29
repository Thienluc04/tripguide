import { CarIcon, FlightIcon, HotelIcon } from "@/components/icons";
import { TabLink } from "@/types/general";

export const tabsLink: TabLink[] = [
  {
    path: "/hotel",
    icon: <HotelIcon></HotelIcon>,
    label: "Hotel",
  },
  {
    path: "/flight",
    icon: <FlightIcon></FlightIcon>,
    label: "Flight",
  },
  {
    path: "/car-rental",
    icon: <CarIcon></CarIcon>,
    label: "Car Rental",
  },
];
