import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ChevronRightIcon } from "../icons";

interface ArrowSlickProps extends ComponentProps<"div"> {
  currentSlide?: unknown;
  slideCount?: unknown;
}

export function NextArrowSlick({
  className,
  currentSlide,
  slideCount,
  ...props
}: ArrowSlickProps) {
  return (
    <div
      className={cn(
        "absolute right-0 top-[38px] !flex h-9 w-9 -translate-y-2/4 cursor-pointer items-center justify-center rounded-full bg-grayEC text-gray8B dark:bg-black44 dark:text-grayF3",
        currentSlide === Number(slideCount) - 1 ? " slick-disabled" : "",
        className,
      )}
      aria-hidden="true"
      aria-disabled={currentSlide === Number(slideCount) - 1 ? true : false}
      {...props}
    >
      <ChevronRightIcon />
    </div>
  );
}
