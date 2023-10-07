import Image from 'next/image';

interface TopTourItemProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

export function TopTourItem({
  name,
  title,
  image,
  description,
}: TopTourItemProps) {
  return (
    <div className="rounded-2xl relative">
      <Image src={image} alt="tour" width={369} height={495}></Image>
      <div className="absolute inset-0 p-7 inline-flex flex-col justify-between">
        <div>
          <div className="inline-block bg-[rgba(20,_20,_22,_0.20)] text-grayF3 text-xl font-bold py-3 px-7 rounded-3xl">
            {name}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-grayFD drop-shadow-[0px_6px_20px_rgba(0,_0,_0,_0.40)] text-[34px] font-bold inline">
            {title}
          </h3>
          <p className="text-grayFD">{description}</p>
        </div>
      </div>
    </div>
  );
}
