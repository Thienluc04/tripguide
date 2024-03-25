import { Breadcrumb } from "@/components/common";
import { ChevronLeftIcon } from "@/components/icons";
import { ProfileContent, ProfileSidebar } from "@/components/profile";
import Link from "next/link";

interface ProfilePageProps {}

export default function ProfilePage(props: ProfilePageProps) {
  return (
    <div className="container">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">Profile</p>
      </div>
      <div className="mx-5 mt-5 flex flex-col items-center gap-8 xl:mx-0 xl:mt-0 xl:flex-row xl:items-start">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  );
}
