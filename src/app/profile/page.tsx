import { Breadcrumb } from "@/components/common";
import { ProfileContent, ProfileSidebar } from "@/components/profile";

interface ProfilePageProps {}

export default function ProfilePage(props: ProfilePageProps) {
  return (
    <div className="container">
      <Breadcrumb list={["Home"]} last="Profile" className="mb-11" />
      <div className="flex items-start gap-8">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  );
}
