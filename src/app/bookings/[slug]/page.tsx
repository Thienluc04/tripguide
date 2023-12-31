'use client';

import {
  BookingDetailContent,
  BookingDetailSidebar,
} from '@/components/booking';
import { Breadcrumb } from '@/components/common';
import { BookingType } from '@/types/general';
import { getListDetailBooking } from '@/utils/general.util';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BookingDetail() {
  const [bookingType, setBookingType] = useState<BookingType>('');

  const { slug } = useParams();

  useEffect(() => {
    if (slug.includes('hotel')) {
      setBookingType('hotel');
    }
    if (slug.includes('flight')) {
      setBookingType('flight');
    }
    if (slug.includes('car')) {
      setBookingType('car');
    }
  }, [slug]);

  return (
    <div className="container">
      <Breadcrumb
        list={getListDetailBooking(bookingType)}
        last="Confirm and pay"
        className="mb-12"
      />
      <div className="flex justify-between items-start">
        <BookingDetailContent />
        <BookingDetailSidebar bookingType={bookingType} />
      </div>
    </div>
  );
}
