"use client";

import { Button } from "@/components/ui";
import { ContactDetail, FlightDetailInfo, PassengerDetail } from ".";
import { useRouter } from "next/navigation";

interface FlightDetailContentProps {}

export function FlightDetailContent(props: FlightDetailContentProps) {
  const route = useRouter();
  return (
    <div className="w-[940px]">
      <div className="flex flex-col gap-10">
        <FlightDetailInfo />
        <PassengerDetail title="Passenger Details" hasBirthday />
        <PassengerDetail title="Passenger Details (adult)" />
        <ContactDetail />
        <Button
          onClick={() => route.push("/bookings/flight-1")}
          className="h-12 w-40 rounded-3xl bg-primary text-base font-bold text-grayFD"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
