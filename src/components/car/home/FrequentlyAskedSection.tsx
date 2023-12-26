import Link from 'next/link';

interface FrequentlyAskedSectionProps {}

export function FrequentlyAskedSection(props: FrequentlyAskedSectionProps) {
  return (
    <div className="container">
      <h2 className="text-black text-[40px] font-bold leading-[60px] mb-12 text-center">
        Frequently asked questions
      </h2>
      <div className="flex gap-[30px] justify-center mb-11">
        <div className="py-8 px-6 rounded-[10px] bg-grayF6 w-[468px]">
          <h3 className="text-black29 text-2xl font-medium leading-9 mb-5">
            How is TripGuide defferent from other hotel booking website?
          </h3>
          <p className="text-gray8B leading-6">
            The major hotel booking websites have fixed prices for rooms and
            take up to 25% commission from hotels, which considerably increases
            the final price, On TripGuide, hoteliers recieve direct
            reservations, and in turn, they’re able to offer the best room
            prices to our members.
          </p>
        </div>
        <div className="py-8 px-6 rounded-[10px] bg-grayF6 w-[468px]">
          <h3 className="text-black29 text-2xl font-medium leading-9 mb-5">
            What is your policy regarding cancellations?
          </h3>
          <p className="text-gray8B leading-6">
            If your travel plans change, you can cancel or modify your
            reservation in accordance with the hotel&apos;s cancellation policy
            as stated during the reservation process.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={''}
          className="text-orange54 font-medium leading-6 px-4 py-2 rounded-lg border border-grayC3"
        >
          More FAQs
        </Link>
      </div>
    </div>
  );
}
