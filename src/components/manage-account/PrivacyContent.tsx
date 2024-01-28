import { Switch } from "../ui/switch";

interface PrivacyContentProps {}

export function PrivacyContent(props: PrivacyContentProps) {
  return (
    <div className="mt-[50px]">
      <h2 className="mb-6 text-2xl font-medium leading-9 text-black29">
        Messages
      </h2>
      <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6">
        <div>
          <h3 className="mb-1 font-medium leading-6 text-black29">
            Share my activity on Facebook
          </h3>
          <p className="max-w-[550px] text-xs leading-[18px] text-gray8B">
            Turning this on means your activity will be shared to Facebook,
            which could include your username, profile photo, and locations you
            visited.
          </p>
        </div>
        <Switch id="email" className="h-6 w-12 bg-grayF3" />
      </div>
      <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6">
        <div>
          <h3 className="mb-1 font-medium leading-6 text-black29">
            Include my profile and listing in search engines
          </h3>
          <p className="max-w-[550px] text-xs leading-[18px] text-gray8B ">
            Turning this on means search engines, like Google, will display your
            profile and listing pages in search results.
          </p>
        </div>
        <Switch id="email" className="h-6 w-12 bg-grayF3" />
      </div>
    </div>
  );
}
