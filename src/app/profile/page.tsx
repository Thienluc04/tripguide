"use client";

import userApi from "@/api-client/user-api";
import { ChevronLeftIcon } from "@/components/icons";
import { ProfileContent, ProfileSidebar } from "@/components/profile";
import { useCommonStore } from "@/store/common-store";
import { User } from "@/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { PAGES } from "@/constants/pages.const";

export default function ProfilePage() {
  const { params } = useCommonStore();
  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    (async () => {
      const access_token = params.tokens?.access_token as string;
      if (access_token) {
        const { result } = await userApi.getProfile(access_token);
        setProfile(result);
      }
    })();
  }, [params]);

  return (
    <>
      {profile ? (
        <div className="container">
          <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
            <Link
              href={PAGES.HOME}
              className="flex items-center gap-2 dark:text-grayF3"
            >
              <ChevronLeftIcon />
              <span className="leading-6">Back</span>
            </Link>
            <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
            <p className="leading-6 text-grayC3 dark:text-gray8B">Profile</p>
          </div>
          <div className="mx-5 mt-5 flex flex-col items-center gap-8 xl:mx-0 xl:mt-0 xl:flex-row xl:items-start">
            <ProfileSidebar
              avatar={profile?.avatar_image}
              name={profile?.name}
              status={profile?.status}
              from={profile?.street_address}
              memberSince={profile?.created_at}
            />
            <ProfileContent profile={profile} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
