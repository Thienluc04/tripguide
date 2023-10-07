import Image from 'next/image';

interface BestPlaceItemProps {
  image: string;
  title: string;
  description: string;
}

export function BestPlaceItem({
  image,
  title,
  description,
}: BestPlaceItemProps) {
  return (
    <div
      className="px-[30px] py-7 border border-grayF3 rounded-lg w-[270px] hover:shadow-[0px_20px_51px_rgba(96,_96,_96,_0.10)] 
      transition-all cursor-pointer duration-300"
    >
      <Image
        src={image}
        alt="place01"
        width={70}
        height={70}
        className="mb-4"
      ></Image>
      <h3 className="text-xl font-bold text-black44 mb-3">{title}</h3>
      <p className="text-gray8B text-sm font-medium">{description}</p>
    </div>
  );
}
