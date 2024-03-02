import { BirthdayIcon, HouseIcon, MailIcon, MaleIcon } from "../icons";
import { Button, Input, Label, Progress } from "../ui";

interface ProfileContentProps {}

export function ProfileContent(props: ProfileContentProps) {
  return (
    <div className="flex-1">
      <h1 className="mb-8 text-5xl font-bold leading-[70px] text-black2F dark:text-grayF3">
        My Profile
      </h1>
      <div className="mb-[52px] h-[1px] w-full bg-grayF3 dark:bg-black29"></div>
      <div className="mb-12 rounded-[20px] bg-white px-10 py-5 shadow-[0px_10px_24px_-15px_rgba(27,_27,_27,_0.12)] dark:bg-black29">
        <div className="mb-3 flex items-center gap-6">
          <p className="text-2xl font-medium leading-9 text-black2F dark:text-grayF3">
            Complete your Profile
          </p>
          <Progress value={70} className="max-w-[328px]" />
          <p className="text-2xl font-medium text-black dark:text-grayF3">
            70%
          </p>
        </div>
        <p className="leading-6 dark:text-gray8B">
          Get the best out of TripGuide by adding the remaining details!
        </p>
      </div>
      <div>
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-medium leading-9 text-black29 dark:text-white">
            Hi, I’m Jonathan Due
          </h2>
          <Button
            variant="outline"
            className="h-auto rounded-3xl border-2 border-grayF3 bg-white px-4 py-2 text-sm font-medium text-black29 dark:border-black44 dark:bg-transparent dark:text-grayC3"
          >
            Edit your profile
          </Button>
        </div>
        <div className="mb-[30px] flex gap-9">
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Live in
            </Label>
            <Input
              iconLeft={<HouseIcon className="text-gray8B dark:text-grayC3" />}
              defaultValue={"Zuichi, Switzerland"}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
            />
          </div>
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Street address
            </Label>
            <Input
              iconLeft={<HouseIcon className="text-gray8B dark:text-grayC3" />}
              defaultValue={"2445 Crosswind Drive"}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
            />
          </div>
        </div>
        <div className="mb-10">
          <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Email address
          </Label>
          <Input
            iconLeft={<MailIcon className="text-gray8B dark:text-grayC3" />}
            defaultValue={"tomson@company.com"}
            className="h-14 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
          />
        </div>
        <div className="flex gap-9">
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Date Of Birth
            </Label>
            <Input
              iconLeft={
                <BirthdayIcon className="text-gray8B dark:text-grayC3" />
              }
              defaultValue={"07.12.1997"}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
            />
          </div>
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Gender
            </Label>
            <Input
              iconLeft={<MaleIcon className="text-gray8B dark:text-grayC3" />}
              defaultValue={"Male"}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
