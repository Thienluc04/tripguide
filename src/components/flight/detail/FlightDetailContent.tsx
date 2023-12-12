'use client';

import { Button } from '@/components/ui';
import { ContactDetail, FlightDetailInfo, PassengerDetail } from '.';
import { useRouter } from 'next/navigation';

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
          onClick={() => route.push('/bookings/flight-1')}
          className="h-12 rounded-3xl bg-primary font-bold text-grayFD text-base w-40"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
