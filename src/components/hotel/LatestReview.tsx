import Image from "next/image";
import { YellowStarIcon } from "@/components/icons";

interface LatestReviewProps {
  imageAuthor: string;
}

export function LatestReview({ imageAuthor }: LatestReviewProps) {
  return (
    <div className="rounded-2xl border border-grayF3 px-6 py-10 dark:border-black44 dark:bg-black29 xl:px-[30px] xl:py-7">
      <div className="flex flex-col items-start justify-between xl:flex-row">
        <div className="mb-6 flex items-center gap-3 xl:mb-0">
          <Image src={imageAuthor} alt="author-review" width={58} height={58} />
          <div>
            <h3 className="font-medium leading-6 text-black2F dark:text-grayFD">
              Patricia W. Fenster
            </h3>
            <p className="text-sm text-gray8B dark:text-grayF6">Kuwait</p>
            <span className="text-xs leading-[18px] text-grayC3">
              45 Follower, 68 Reviews
            </span>
          </div>
        </div>
        <div className=" xl:max-w-[444px]">
          <div className="mb-4 flex items-center justify-between xl:mb-3 xl:justify-start xl:gap-8">
            <div className="flex gap-2">
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
            </div>
            <span className="text-sm text-gray8B">25.5.2020</span>
          </div>
          <p className="mb-6 text-xs leading-5 text-gray8B dark:text-grayC3 xl:mb-[22px] xl:text-base xl:leading-6">
            We hod the most spectacular view. Unfortunately it was very hot in
            the room from 2-8.30 pm due to no air conditioning and no shade.{" "}
          </p>
          <div className="flex gap-3 xl:gap-8">
            <div
              className="flex h-[30px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] px-5 text-sm font-medium text-blueE6 
              xl:w-[126px] xl:px-0"
            >
              Comment
            </div>
            <div
              className="flex h-[30px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] px-5 text-sm font-medium text-blueE6 
              xl:w-[126px] xl:px-0"
            >
              Like
            </div>
            <div
              className="flex h-[30px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] px-5 text-sm font-medium text-blueE6 
              xl:w-[126px] xl:px-0"
            >
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
