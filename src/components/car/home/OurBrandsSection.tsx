import Image from 'next/image';

interface OurBrandsSectionProps {}

export function OurBrandsSection(props: OurBrandsSectionProps) {
  return (
    <div className="max-w-[970px] mx-auto">
      <h2 className="text-black20 text-[32px] font-semibold text-center mb-[14px]">
        Our Brands
      </h2>
      <p className="text-gray6F text-sm text-center max-w-[520px] mx-auto mb-[60px]">
        All of these place are becoming your ideal workplaces for your team
        meetings, corporate events, press & influencers
      </p>
      <div className="flex items-center gap-[80px]">
        <Image
          src={'/images/cars/our-brands-1.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
        <Image
          src={'/images/cars/our-brands-2.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
        <Image
          src={'/images/cars/our-brands-3.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
        <Image
          src={'/images/cars/our-brands-4.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
        <Image
          src={'/images/cars/our-brands-5.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
        <Image
          src={'/images/cars/our-brands-6.png'}
          alt="our-brands"
          width={90}
          height={28}
        />
      </div>
    </div>
  );
}
