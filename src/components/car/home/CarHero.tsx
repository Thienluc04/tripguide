import { PropsWithChildren } from 'react';

interface CarHeroProps {}

export function CarHero({ children }: PropsWithChildren<CarHeroProps>) {
  return (
    <div className="relative bg-[url(/images/car-hero.png)] h-[578px] pt-[140px] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h1 className="text-[64px] font-bold max-w-[595px] leading-[80px] text-black2F mb-[30px]">
          Amazing Flight To Switzerland
        </h1>
        <p className="mb-[70px] text-[34px] leading-[44px] font-bold text-black2F">
          Find and book a great experience
        </p>
        {children}
      </div>
    </div>
  );
}
