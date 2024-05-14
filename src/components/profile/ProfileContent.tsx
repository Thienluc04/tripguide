import { UserGender } from "@/constants/enum.const";
import { User } from "@/types/user";
import {
  BirthdayIcon,
  FemaleIcon,
  HouseIcon,
  MailIcon,
  MaleIcon,
} from "../icons";
import { Button, Input, Label } from "../ui";
import { useRouter } from "next/navigation";
import { PAGES } from "@/constants/pages.const";
import { PhoneIcon } from "lucide-react";

interface ProfileContentProps {
  profile?: User;
}

export function ProfileContent({ profile }: ProfileContentProps) {
  const router = useRouter();

  return (
    <div className="flex-1">
      <h1 className="mb-8 hidden text-5xl font-bold leading-[70px] text-black2F dark:text-grayF3 xl:inline-block">
        My Profile
      </h1>
      <div className="mb-[52px] hidden h-[1px] w-full bg-grayF3 dark:bg-black29 xl:block"></div>

      <div>
        <div className="mb-5 flex items-center justify-between xl:mb-10">
          <h2 className="text-xl font-medium text-black29 dark:text-white xl:text-2xl xl:leading-9">
            Hi, I’m {profile?.name}
          </h2>
          <Button
            variant="outline"
            className="h-auto w-auto rounded-3xl border-2 border-grayF3 bg-white px-4 py-2 text-sm font-medium text-black29 dark:border-black44 dark:bg-transparent dark:text-grayC3"
            onClick={() => router.push(PAGES.PERSONAL_INFO)}
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
              defaultValue={profile?.live_in}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="Your live in is empty"
              readOnly
            />
          </div>
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Street address
            </Label>
            <Input
              iconLeft={<HouseIcon className="text-gray8B dark:text-grayC3" />}
              defaultValue={profile?.street_address}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="Your street address is empty"
              readOnly
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-5 xl:flex-row xl:gap-9 ">
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Email address
            </Label>
            <Input
              iconLeft={<MailIcon className="text-gray8B dark:text-grayC3" />}
              defaultValue={profile?.email}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="Your email address is empty"
              readOnly
            />
          </div>
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Phone number
            </Label>
            <Input
              iconLeft={
                <PhoneIcon className="w-5 text-gray8B dark:text-grayC3" />
              }
              defaultValue={profile?.phone_number}
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="Your phone number is empty"
              readOnly
            />
          </div>
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
              defaultValue={
                new Date(profile?.date_of_birth || "")
                  .toISOString()
                  .substring(0, 10) || ""
              }
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="Your date of birth is empty"
              readOnly
            />
          </div>
          <div className="flex-1">
            <Label className="mb-[14px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
              Gender
            </Label>
            <Input
              iconLeft={
                profile?.gender === UserGender.Male ? (
                  <MaleIcon className="text-gray8B dark:text-grayC3" />
                ) : (
                  <FemaleIcon className="text-gray8B dark:text-grayC3" />
                )
              }
              defaultValue={
                profile?.gender === UserGender.Male ? "Male" : "Female"
              }
              className="h-12 w-full rounded-[10px] border border-grayE1 px-5 pl-12 text-sm font-medium dark:border-black44 dark:text-grayF3"
              placeholder="You not yet choose your gender"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
