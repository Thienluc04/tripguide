import { PropsWithChildren } from "react";

interface HotelHeroProps {}

export function HotelHero({ children }: PropsWithChildren<HotelHeroProps>) {
  return (
    <div className="relative h-[578px] bg-[url(/images/hotel-hero.png)] bg-cover bg-center bg-no-repeat pt-10 xl:pt-[140px]">
      <div className="container">
        <h1
          className="mb-[70px] max-w-[487px] px-6 text-[40px] font-bold leading-[60px] drop-shadow-[0px_8px_16px_rgba(51,_51,_51,_0.08)] xl:px-0 xl:text-[64px]
      xl:leading-[80px]"
        >
          Book With Us And Enjoy your Journey !
        </h1>
        {children}
      </div>
    </div>
  );
}
