"use client";

import Image from "next/image";
import avatarDefault from "@images/avatar-default.png";
import { PencilIcon } from "../icons";
import { Input } from "../ui";
import mediaApi from "@/api-client/media-api";
import { useCommonStore } from "@/store/common-store";
import { useState } from "react";
import { Media } from "@/types/media";
import userApi from "@/api-client/user-api";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";
import { setLocalToken } from "@/utils/general.util";

interface UploadImageProps {
  avatar?: string;
}

export function UploadImage({ avatar }: UploadImageProps) {
  const { params, setParams } = useCommonStore();
  const [currentAvatar, setCurrentAvatar] = useState(avatar);
  const [loading, setLoading] = useState(false);

  const handleUploadFileImage = async (file: File) => {
    const access_token = params.tokens?.access_token;
    if (access_token) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      const data = await mediaApi.uploadImage(formData, access_token);
      const avatarImage = (data.result as Media[])[0].url;
      await userApi.updateProfile(access_token, { avatar_image: avatarImage });
      setCurrentAvatar(avatarImage);
      setLocalToken([{ name: LOCAL_TOKEN_NAME.AVATAR, value: avatarImage }]);
      setParams({
        ...params,
        currentUser: {
          ...(params.currentUser as CurrentUser),
          avatar: avatarImage,
        },
      });
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto mb-3 inline-block text-center">
      {!loading ? (
        <Image
          src={currentAvatar || avatarDefault}
          alt="avatar-image"
          width={170}
          height={170}
          className="mx-auto h-[170px] w-[170px] rounded-full object-cover text-center"
        />
      ) : (
        <div className="flex h-[170px] w-[170px] items-center justify-center rounded-full border border-grayC3 dark:border-black44">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
        </div>
      )}

      <label className="absolute bottom-0 right-0 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-grayF3 bg-grayF6 dark:border-black44 dark:bg-black29">
        <Input
          type="file"
          onChange={(e) =>
            handleUploadFileImage((e.target.files as FileList)[0])
          }
          className="invisible hidden h-0 w-0"
          accept="image/*"
        />
        <PencilIcon className="text-gray91 dark:text-grayF3" />
      </label>
    </div>
  );
}
