import { Button } from "../ui";

interface PreferenceContentProps {}

export function PreferenceContent(props: PreferenceContentProps) {
  return (
    <div className="mt-[50px]">
      <div className="mb-6 border-b border-b-grayF3 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 font-medium leading-6 text-black29">
              Preferred language
            </h3>
            <p className="text-xs leading-[18px] text-gray8B">English</p>
          </div>
          <Button
            type="button"
            variant="link"
            className="h-auto w-auto text-base font-medium hover:no-underline"
          >
            Edit
          </Button>
        </div>
      </div>
      <div className="mb-6 border-b border-b-grayF3 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 font-medium leading-6 text-black29">
              Preferred currency
            </h3>
            <p className="text-xs leading-[18px] text-gray8B">
              United Stated dollar
            </p>
          </div>
          <Button
            type="button"
            variant="link"
            className="h-auto w-auto text-base font-medium hover:no-underline"
          >
            Edit
          </Button>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-2 font-medium leading-6 text-black29">
              Time zone
            </h3>
          </div>
          <Button
            type="button"
            variant="link"
            className="h-auto w-auto text-base font-medium hover:no-underline"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
