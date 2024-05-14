import {
  UpdateProfileSchema,
  UpdateProfileSchemaType,
} from "@/models/schemas/update-profile.schema";
import { User } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import userApi from "@/api-client/user-api";
import { useCommonStore } from "@/store/common-store";
import { omit } from "lodash";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import { BaseFormPersonalInfo } from "./BaseFormPersonalInfo";
import { toast } from "react-toastify";

interface PersonalInfoContentProps {
  userInfo: User;
}

export function PersonalInfoContent({ userInfo }: PersonalInfoContentProps) {
  const { params, setParams } = useCommonStore();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<UpdateProfileSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(UpdateProfileSchema),
  });

  useEffect(() => {
    form.reset({ ...userInfo });
  }, []);

  const handleUpdateProfile = async (values: UpdateProfileSchemaType) => {
    setIsLoading(true);
    await wrapCheckErrorForm(
      async () => {
        const data = await userApi.updateProfile(
          params.tokens?.access_token as string,
          omit(values, "avatar_image"),
        );
        setParams({
          ...params,
          currentUser: {
            avatar: params.currentUser?.avatar as string,
            name: data.result?.name as string,
          },
        });
        setIsLoading(false);
        toast.success(data.message);
      },
      setIsLoading,
      form,
    );
  };

  return (
    <BaseFormPersonalInfo
      form={form}
      isLoading={isLoading}
      onFormSubmit={handleUpdateProfile}
      userInfo={userInfo}
    />
  );
}
