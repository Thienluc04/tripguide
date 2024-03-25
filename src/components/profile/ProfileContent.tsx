import { BirthdayIcon, HouseIcon, MailIcon, MaleIcon } from "../icons";
import { Button, Input, Label, Progress } from "../ui";

interface ProfileContentProps {}

export function ProfileContent(props: ProfileContentProps) {
  return (
    <div className="flex-1">
      <h1 className="mb-8 hidden text-5xl font-bold leading-[70px] text-black2F dark:text-grayF3 xl:inline-block">
        My Profile
      </h1>
      <div className="mb-[52px] hidden h-[1px] w-full bg-grayF3 dark:bg-black29 xl:block"></div>
      <div className="mb-8 rounded-[20px] border border-grayF6 bg-white px-5 py-6 shadow-[0px_10px_24px_-15px_rgba(27,_27,_27,_0.12)] dark:bg-black29 xl:mb-12 xl:border-none xl:px-10 xl:py-5">
        <div className="mb-3 flex flex-col gap-6 xl:flex-row xl:items-center">
          <p className="text-xl font-medium leading-9 text-black2F dark:text-grayF3 xl:text-2xl">
            Complete your Profile
          </p>
          <div className="flex flex-row items-center gap-6">
            <Progress
              value={70}
              className="w-[230px] max-w-[328px] xl:w-[328px]"
            />
            <p className="font-medium text-black dark:text-grayF3 xl:text-2xl">
              70%
            </p>
          </div>
        </div>
        <p className="leading-6 dark:text-gray8B">
          Get the best out of TripGuide by adding the remaining details!
        </p>
      </div>
      <div>
        <div className="mb-5 flex items-center justify-between xl:mb-10">
          <h2 className="text-xl font-medium text-black29 dark:text-white xl:text-2xl xl:leading-9">
            Hi, I’m Jonathan Due
          </h2>
          <Button
            variant="outline"
            className="h-auto w-auto rounded-3xl border-2 border-grayF3 bg-white px-4 py-2 text-sm font-medium text-black29 dark:border-black44 dark:bg-transparent dark:text-grayC3"
          >
            Edit profile
          </Button>
        </div>
        <div className="mb-5 flex flex-col gap-5 xl:flex-row xl:gap-9">
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
        <div className="mb-5  xl:mb-10">
          <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Email address
          </Label>
          <Input
            iconLeft={<MailIcon className="text-gray8B dark:text-grayC3" />}
            defaultValue={"tomson@company.com"}
            className="h-14 w-full rounded-[10px] border border-grayE1 px-5 pl-11 text-sm font-medium dark:border-black44"
          />
        </div>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-9">
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
