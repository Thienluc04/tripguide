import Image from 'next/image';

interface BestWayItemProps {
  image: string;
  title: string;
  description: string;
}

export function BestWayItem({ image, title, description }: BestWayItemProps) {
  return (
    <div className="w-[240px]">
      <div className="mb-4 w-[242px] h-[212px]">
        <Image src={image} alt="best-way" width={242} height={212} />
      </div>
      <h3 className="text-2xl text-center font-medium leading-9 mb-1">
        {title}
      </h3>
      <p className="text-gray8B text-xs mx-auto text-center">{description}</p>
    </div>
  );
}
