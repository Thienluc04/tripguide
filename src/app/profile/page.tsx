import { Breadcrumb } from "@/components/common";
import { ChevronLeftIcon } from "@/components/icons";
import { ProfileContent, ProfileSidebar } from "@/components/profile";
import Link from "next/link";

interface ProfilePageProps {}

export default function ProfilePage(props: ProfilePageProps) {
  return (
    <div className="container">
      <div className="mb-11 flex items-center gap-3 pt-10">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">Profile</p>
      </div>
      <div className="flex items-start gap-8">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  );
}
