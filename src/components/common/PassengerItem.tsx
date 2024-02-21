"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DecrementIcon, IncrementIcon } from "../icons";

interface PassengerItemProps {
  title: string;
  description: string;
  name: "adults" | "children" | "infants";
  onChangePassenger?: (passenger: number) => void;
  params: HotelParams | FlightParams;
}

export function PassengerItem({
  title,
  description,
  name,
  onChangePassenger,
  params,
}: PassengerItemProps) {
  const [passengers, setPassengers] = useState<number>(0);

  useEffect(() => {
    if (name === "adults") {
      setPassengers(params?.passenger?.adults as number);
    }
    if (name === "children") {
      setPassengers(params?.passenger?.children as number);
    }
    if (name === "infants") {
      setPassengers(params?.passenger?.infants as number);
    }
  }, []);

  useEffect(() => {
    if (onChangePassenger) {
      onChangePassenger(passengers);
    }
  }, [passengers]);

  const handleDecrementValue = () => {
    if (passengers >= 1) {
      setPassengers((prev) => prev - 1);
    }
  };

  const handleIncrementValue = () => {
    const total =
      (params.passenger?.adults as number) +
      (params.passenger?.children as number) +
      (params.passenger?.infants as number);

    if (total < 10) {
      setPassengers((prev) => prev + 1);
    } else {
      toast.warning("Passengers must be less than 10");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="mb-1 font-medium leading-6 text-gray90 dark:text-grayFD">
          {title}
        </h3>
        <p className="text-sm text-grayC3 dark:text-gray8B">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <DecrementIcon
          className={cn(
            "transition-all",
            passengers >= 1
              ? "cursor-pointer text-grayC4 dark:text-grayC3"
              : "text-grayEC dark:text-gray8B",
          )}
          onClick={handleDecrementValue}
        />
        <span className="w-3 text-center font-Roboto text-sm text-gray90">
          {passengers}
        </span>
        <IncrementIcon
          className={cn(
            "transition-all",
            passengers < 10
              ? "cursor-pointer text-grayC4 dark:text-grayC3"
              : "text-grayEC dark:text-gray8B",
          )}
          onClick={handleIncrementValue}
        />
      </div>
    </div>
  );
}
