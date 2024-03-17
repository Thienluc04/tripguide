"use client";

import { Button } from "@/components/ui";
import { ContactDetail, FlightDetailInfo, PassengerDetail } from ".";
import { useRouter } from "next/navigation";

interface FlightDetailContentProps {}

export function FlightDetailContent(props: FlightDetailContentProps) {
  const route = useRouter();
  return (
    <div className="px-5 xl:w-[940px] xl:px-0">
      <div className="flex flex-col items-start gap-10 xl:items-stretch">
        <FlightDetailInfo />
        <PassengerDetail title="Passenger Details" hasBirthday />
        <PassengerDetail title="Passenger Details (adult)" />
        <ContactDetail />
        <Button
          onClick={() => route.push("/bookings/flight-1")}
          className="h-12 w-full rounded-xl bg-primary text-base font-bold text-grayFD xl:w-40 xl:rounded-3xl"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
