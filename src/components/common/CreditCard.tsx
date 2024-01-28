import Image from "next/image";
import { ThreeDotsIcon, UnionIcon } from "../icons";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

interface CreditCardProps {
  cardNumber: string;
  holderName: string;
  imageCard: string | StaticImport;
  className?: string;
}

export function CreditCard({
  cardNumber,
  holderName,
  imageCard,
  className,
}: CreditCardProps) {
  return (
    <div
      className={cn(
        "flex w-[335px] flex-col justify-between rounded-[20px] bg-greenA6 p-6",
        className,
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <UnionIcon />
        <ThreeDotsIcon />
      </div>
      <div>
        <p className="font-medium leading-[30px] text-black52">{cardNumber}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium leading-[30px] text-black52">
            {holderName}
          </p>
          <Image src={imageCard} alt="credit-card" width={34} height={20} />
        </div>
      </div>
    </div>
  );
}
