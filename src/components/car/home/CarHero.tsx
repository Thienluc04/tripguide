import { PropsWithChildren } from "react";

interface CarHeroProps {}

export function CarHero({ children }: PropsWithChildren<CarHeroProps>) {
  return (
    <div className="relative h-[578px] bg-[url(/images/car-hero.png)] bg-cover bg-center bg-no-repeat pt-10 xl:pt-[140px]">
      <div className="container">
        <h1 className="mb-3 px-5 text-[40px] font-bold leading-[60px] text-black2F xl:mb-[30px] xl:max-w-[595px] xl:px-0 xl:text-[64px] xl:leading-[80px]">
          Amazing Flight To Switzerland
        </h1>
        <p className="mb-[60px] px-5 text-[22px] font-bold leading-[30px] text-black2F xl:mb-[70px] xl:px-0 xl:text-[34px] xl:leading-[44px]">
          Find and book a great experience
        </p>
        {children}
      </div>
    </div>
  );
}
