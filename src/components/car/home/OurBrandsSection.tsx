import Image from 'next/image';

import ourBrands1 from '@images/cars/our-brands-1.png';
import ourBrands2 from '@images/cars/our-brands-2.png';
import ourBrands3 from '@images/cars/our-brands-3.png';
import ourBrands4 from '@images/cars/our-brands-4.png';
import ourBrands5 from '@images/cars/our-brands-5.png';
import ourBrands6 from '@images/cars/our-brands-6.png';

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
        <Image src={ourBrands1} alt="our-brands" width={90} height={28} />
        <Image src={ourBrands2} alt="our-brands" width={90} height={28} />
        <Image src={ourBrands3} alt="our-brands" width={90} height={28} />
        <Image src={ourBrands4} alt="our-brands" width={90} height={28} />
        <Image src={ourBrands5} alt="our-brands" width={90} height={28} />
        <Image src={ourBrands6} alt="our-brands" width={90} height={28} />
      </div>
    </div>
  );
}
