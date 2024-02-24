import { LatestReview } from "@/components/hotel";
import {
  CircleLoading,
  YellowEmptyStar,
  YellowStarIcon,
} from "@/components/icons";
import { Button, Textarea } from "@/components/ui";

interface FeedbackSectionProps {}

export function FeedbackSection(props: FeedbackSectionProps) {
  return (
    <div className="mx-auto mb-[70px] max-w-[970px]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[34px] font-bold leading-[44px] text-black33 dark:text-white">
          Attach your Review
        </h2>
        <div className="flex items-center gap-2">
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowEmptyStar className="text-orange42 dark:text-gray8B" />
        </div>
      </div>
      <form className="mb-[60px]">
        <Textarea
          placeholder="Write your detailed review here..."
          className="mb-5 h-[134px] w-full resize-none rounded-xl border-2 border-grayF3 bg-grayF6 px-[30px] py-6 text-lg dark:border-black29 dark:bg-black29 dark:text-gray8B"
        />
        <div className="flex justify-end gap-5">
          <Button
            variant="secondary"
            className="h-[42px] w-[100px] rounded-[10px] border border-grayF3 bg-grayF6 text-base font-medium leading-7 text-gray8B dark:border-black44 dark:bg-black29"
          >
            Cancel
          </Button>
          <Button className="h-[42px] w-[100px] rounded-[10px] text-base font-medium leading-7">
            Submit
          </Button>
        </div>
      </form>
      <h3 className="mb-9 text-2xl font-semibold leading-8 text-black33 dark:text-white">
        Latest Reviews
      </h3>
      <div className="flex flex-col gap-[30px]">
        <LatestReview imageAuthor="/images/hotels/author-review.png" />
        <LatestReview imageAuthor="/images/hotels/author-review-2.png" />
        <LatestReview imageAuthor="/images/hotels/author-review-3.png" />
      </div>
      <div className="mx-auto mt-10 flex w-[176px] items-center justify-center gap-4 rounded-3xl border border-grayC3 p-[10px]">
        <CircleLoading className="text-grayC3" />
        <span className="font-medium leading-6 text-black dark:text-white">
          View All
        </span>
      </div>
    </div>
  );
}
