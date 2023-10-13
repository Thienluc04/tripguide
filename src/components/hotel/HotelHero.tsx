import { PropsWithChildren } from 'react';

interface HotelHeroProps {}

export function HotelHero({ children }: PropsWithChildren<HotelHeroProps>) {
  return (
    <div className="relative bg-[url(/images/hotel-hero.png)] h-[578px] pt-[140px] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <h1
          className="text-[64px] font-bold max-w-[487px] leading-[80px] drop-shadow-[0px_8px_16px_rgba(51,_51,_51,_0.08)]
      mb-[70px]"
        >
          Book With Us And Enjoy your Journey !
        </h1>
        {children}
      </div>
    </div>
  );
}
