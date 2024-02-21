import Image from "next/image";
import { YellowStarIcon } from "@/components/icons";

interface LatestReviewProps {
  imageAuthor: string;
}

export function LatestReview({ imageAuthor }: LatestReviewProps) {
  return (
    <div className="rounded-2xl border border-grayF3 px-[30px] py-7 dark:border-black44 dark:bg-black29">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
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
        <div className="max-w-[444px]">
          <div className="mb-3 flex items-center gap-8">
            <div className="flex gap-2">
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
            </div>
            <span className="text-sm text-gray8B">25.5.2020</span>
          </div>
          <p className="mb-[22px] leading-6 text-gray8B dark:text-grayC3">
            We hod the most spectoculor view. Unfortunately it was very hot in
            the room from 2-8.30 pm due to no air conditioning and no shade.{" "}
          </p>
          <div className="flex gap-8">
            <div
              className="flex h-[30px] w-[126px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] text-sm 
              font-medium text-blueE6"
            >
              Comment
            </div>
            <div
              className="flex h-[30px] w-[126px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] text-sm 
              font-medium text-blueE6"
            >
              Like
            </div>
            <div
              className="flex h-[30px] w-[126px] items-center justify-center rounded-[26px] bg-[rgba(20,_92,_230,_0.10)] text-sm 
              font-medium text-blueE6"
            >
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
