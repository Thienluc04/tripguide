import Link from "next/link";

interface FrequentlyAskedSectionProps {}

export function FrequentlyAskedSection(props: FrequentlyAskedSectionProps) {
  return (
    <div className="container">
      <h2 className="mb-12 text-center text-[40px] font-bold leading-[60px] text-black dark:text-white">
        Frequently asked questions
      </h2>
      <div className="mb-11 flex justify-center gap-[30px]">
        <div className="w-[468px] rounded-[10px] bg-grayF6 px-6 py-8 dark:bg-black29">
          <h3 className="mb-5 text-2xl font-medium leading-9 text-black29 dark:text-white">
            How is TripGuide defferent from other hotel booking website?
          </h3>
          <p className="leading-6 text-gray8B">
            The major hotel booking websites have fixed prices for rooms and
            take up to 25% commission from hotels, which considerably increases
            the final price, On TripGuide, hoteliers recieve direct
            reservations, and in turn, they’re able to offer the best room
            prices to our members.
          </p>
        </div>
        <div className="w-[468px] rounded-[10px] bg-grayF6 px-6 py-8 dark:bg-black29">
          <h3 className="mb-5 text-2xl font-medium leading-9 text-black29 dark:text-white">
            What is your policy regarding cancellations?
          </h3>
          <p className="leading-6 text-gray8B">
            If your travel plans change, you can cancel or modify your
            reservation in accordance with the hotel&apos;s cancellation policy
            as stated during the reservation process.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={""}
          className="rounded-lg border border-grayC3 px-4 py-2 font-medium leading-6 text-orange54 dark:border-orange54 dark:text-grayFD"
        >
          More FAQs
        </Link>
      </div>
    </div>
  );
}
