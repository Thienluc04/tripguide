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
        <h2 className="text-[34px] font-bold leading-[44px] text-black33">
          Attach your Review
        </h2>
        <div className="flex items-center gap-2">
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowStarIcon />
          <YellowEmptyStar />
        </div>
      </div>
      <form className="mb-[60px]">
        <Textarea
          placeholder="Write your detailed review here..."
          className="mb-5 h-[134px] w-full resize-none rounded-xl border-2 border-grayF3 bg-grayF6 px-[30px] py-6 text-lg"
        />
        <div className="flex justify-end gap-5">
          <Button
            variant="secondary"
            className="h-[42px] w-[100px] rounded-[10px] border border-grayF3 bg-grayF6 text-base font-medium leading-7 text-gray8B"
          >
            Cancel
          </Button>
          <Button className="h-[42px] w-[100px] rounded-[10px] text-base font-medium leading-7">
            Submit
          </Button>
        </div>
      </form>
      <h3 className="mb-9 text-2xl font-semibold leading-8 text-black33">
        Latest Reviews
      </h3>
      <div className="flex flex-col gap-[30px]">
        <LatestReview imageAuthor="/images/hotels/author-review.png" />
        <LatestReview imageAuthor="/images/hotels/author-review-2.png" />
        <LatestReview imageAuthor="/images/hotels/author-review-3.png" />
      </div>
      <Button
        className="mx-auto mt-10 flex h-[46px] w-[176px] items-center justify-center gap-4 rounded-full border border-grayC3 p-0 shadow-none"
        type="submit"
        variant="outline"
      >
        <CircleLoading />
        <span className="font-medium leading-6 text-black">View All</span>
      </Button>
    </div>
  );
}
