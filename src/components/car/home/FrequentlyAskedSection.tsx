import Link from "next/link";

interface FrequentlyAskedSectionProps {}

export function FrequentlyAskedSection(props: FrequentlyAskedSectionProps) {
  return (
    <div className="container px-5 xl:px-0">
      <h2 className="mb-[30px] text-center text-[30px] font-bold leading-[45px] text-black dark:text-white xl:mb-12 xl:text-[40px] xl:leading-[60px]">
        Frequently asked questions
      </h2>
      <div className="mb-[30px] flex flex-col justify-center gap-[30px] xl:mb-11 xl:flex-row">
        <div className="rounded-[10px] bg-grayF6 px-4 py-5 dark:bg-black29 xl:w-[468px] xl:px-6 xl:py-8">
          <h3 className="mb-3 text-lg font-medium leading-7 text-black29 dark:text-white xl:mb-5 xl:text-2xl xl:leading-9">
            How is TripGuide deferent from other hotel booking website?
          </h3>
          <p className="text-xs leading-5 text-gray8B xl:text-base xl:leading-6">
            The major hotel booking websites have fixed prices for rooms and
            take up to 25% commission from hotels, which considerably increases
            the final price, On TripGuide, hoteliers recieve direct
            reservations, and in turn, they’re able to offer the best room
            prices to our members.
          </p>
        </div>
        <div className="rounded-[10px] bg-grayF6 px-4 py-5 dark:bg-black29 xl:w-[468px] xl:px-6 xl:py-8">
          <h3 className="mb-3 text-lg font-medium leading-7 text-black29 dark:text-white xl:mb-5 xl:text-2xl xl:leading-9">
            What is your policy regarding cancellations?
          </h3>
          <p className="text-xs leading-5 text-gray8B xl:text-base xl:leading-6">
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
