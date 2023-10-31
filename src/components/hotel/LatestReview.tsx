import Image from 'next/image';
import { YellowStarIcon } from '@/components/icons';

interface LatestReviewProps {
  imageAuthor: string;
}

export function LatestReview({ imageAuthor }: LatestReviewProps) {
  return (
    <div className="px-[30px] py-7 rounded-2xl border border-grayF3">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Image src={imageAuthor} alt="author-review" width={58} height={58} />
          <div>
            <h3 className="text-black2F font-medium leading-6">
              Patricia W. Fenster
            </h3>
            <p className="text-gray8B text-sm">Kuwait</p>
            <span className="text-grayC3 text-xs leading-[18px]">
              45 Follower, 68 Reviews
            </span>
          </div>
        </div>
        <div className="max-w-[444px]">
          <div className="flex gap-8 items-center mb-3">
            <div className="flex gap-2">
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
              <YellowStarIcon />
            </div>
            <span className="text-gray8B text-sm">25.5.2020</span>
          </div>
          <p className="text-gray8B leading-6 mb-[22px]">
            We hod the most spectoculor view. Unfortunately it was very hot in
            the room from 2-8.30 pm due to no air conditioning and no shade.{' '}
          </p>
          <div className="flex gap-8">
            <div
              className="text-blueE6 h-[30px] w-[126px] bg-[rgba(20,_92,_230,_0.10)] rounded-[26px] flex items-center justify-center 
              text-sm font-medium"
            >
              Comment
            </div>
            <div
              className="text-blueE6 h-[30px] w-[126px] bg-[rgba(20,_92,_230,_0.10)] rounded-[26px] flex items-center justify-center 
              text-sm font-medium"
            >
              Like
            </div>
            <div
              className="text-blueE6 h-[30px] w-[126px] bg-[rgba(20,_92,_230,_0.10)] rounded-[26px] flex items-center justify-center 
              text-sm font-medium"
            >
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
