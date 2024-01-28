import { cn } from "@/lib/utils";
import Image from "next/image";
import { CircleTickIcon } from "../icons/CircleTickIcon";
import { ComponentProps } from "react";

interface CreditCardProps extends ComponentProps<"div"> {
  active?: boolean;
  type: "mastercard" | "paypal" | "visa" | "americanExpress" | "discover";
  heightImage: number;
  widthImage: number;
}

export function PaymentItem({
  active = false,
  type,
  heightImage,
  widthImage,
  ...props
}: CreditCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-[96px] cursor-pointer items-center justify-center rounded-md border border-grayE6 bg-white transition-all",
        active &&
          "border-primary bg-[rgba(47,_128,_237,_0.05)] shadow-[0px_3px_24px_0px_rgba(0,_0,_0,_0.10)]",
      )}
      {...props}
    >
      {active && <CircleTickIcon className="absolute -right-1 -top-1" />}
      <Image
        src={`/images/${type}.png`}
        alt="credit-card"
        loading="lazy"
        width={widthImage}
        height={heightImage}
      />
    </div>
  );
}
