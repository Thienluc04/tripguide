import { BookingType } from "@/types/general";

export const getListDetailBooking = (type: BookingType) => {
  return [
    "Home",
    type === "hotel"
      ? "Hotel list"
      : type === "flight"
        ? "Flight list"
        : type === "car"
          ? "Car list"
          : "",
    type === "hotel"
      ? "Hotel details"
      : type === "flight"
        ? "Flight details"
        : type === "car"
          ? "Car details"
          : "",
  ];
};

export const getLocalToken = (name: string) => {
  if (localStorage.getItem(name)) {
    const token = localStorage.getItem(name);
    return token;
  }
};

export const setLocalToken = (array: { name: string; value: string }[]) => {
  array.forEach((item) => {
    localStorage.setItem(item.name, item.value);
  });
};
