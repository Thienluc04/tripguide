import { PropsWithChildren } from "react";

interface FlightHeroProps {}

export function FlightHero({ children }: PropsWithChildren<FlightHeroProps>) {
  return (
    <div className="relative h-[578px] bg-[url(/images/flight-hero.png)] bg-cover bg-center bg-no-repeat pt-10 xl:pt-[140px]">
      <div className="container">
        <h1 className="mx-5 mb-3 max-w-[595px] text-[34px] font-bold leading-[48px] text-white xl:mx-0 xl:mb-[30px] xl:text-[64px] xl:leading-[80px]">
          Amazing Flight To Switzerland
        </h1>
        <p className="mx-5 mb-10 text-lg font-bold leading-6 text-white xl:mx-0 xl:mb-[70px] xl:text-[34px] xl:leading-[44px]">
          Find and book a great experience
        </p>
        {children}
      </div>
    </div>
  );
}
