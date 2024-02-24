import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentProps } from "react";

interface ChooseTypeItemProps extends ComponentProps<"div"> {
  image: string | StaticImport;
  name: string;
  active?: boolean;
}

export function ChooseTypeItem({
  image,
  name,
  active,
  ...props
}: ChooseTypeItemProps) {
  return (
    <div
      className={cn(
        "flex h-[124px] cursor-pointer flex-col rounded-md border border-white shadow-[-8px_10px_45px_0px_rgba(165,_165,_165,_0.20)] transition-all dark:border-black29 dark:shadow-none",
        active && "border-blueE6 dark:border-blueE6",
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-1 items-center justify-center rounded-t-md bg-grayF2 px-[30px] py-3 transition-all dark:bg-black44",
          active && "bg-[rgba(59,_113,_254,_0.10)]",
        )}
      >
        <Image src={image} alt="type-car" width={120} height={70} />
      </div>
      <div
        className={cn(
          "rounded-b-md bg-white py-1 transition-all dark:bg-black29",
          active && "bg-[rgba(59,_113,_254,_0.20)]",
        )}
      >
        <p className="text-center font-medium leading-6 text-black45 dark:text-grayF3">
          {name}
        </p>
      </div>
    </div>
  );
}
