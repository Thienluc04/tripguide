import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TopTourItemProps {
  image: string | StaticImport;
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
    <div className="relative rounded-2xl">
      <Image
        src={image}
        alt="tour"
        width={369}
        height={495}
        className="mx-auto w-[calc(100%-40px)] xl:mx-0 xl:w-auto"
      />
      <div className="absolute inset-0 inline-flex flex-col justify-between p-7 px-12 xl:px-7">
        <div>
          <div className="inline-block rounded-3xl bg-[rgba(20,_20,_22,_0.20)] px-7 py-3 text-xl font-bold text-grayF3">
            {name}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="inline text-[34px] font-bold text-grayFD drop-shadow-[0px_6px_20px_rgba(0,_0,_0,_0.40)]">
            {title}
          </h3>
          <p className="text-grayFD">{description}</p>
        </div>
      </div>
    </div>
  );
}
