import { useForm } from "react-hook-form";
import { Button, Label } from "../ui";
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from "@/models/schemas/change-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../auth";
import { useState } from "react";
import { wrapCheckErrorForm } from "@/utils/wrap-check-error.util";
import userApi from "@/api-client/user-api";
import { useCommonStore } from "@/store/common-store";
import { toast } from "react-toastify";
import authApi from "@/api-client/auth-api";
import { removeLocalToken } from "@/utils/general.util";
import { LOCAL_TOKEN_NAME } from "@/constants/token.const";
import { PAGES } from "@/constants/pages.const";
import { useRouter } from "next/navigation";

interface ChangePasswordProps {
  onCancel?: () => void;
}

export function ChangePassword({ onCancel = () => {} }: ChangePasswordProps) {
  const form = useForm<ChangePasswordSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(ChangePasswordSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { params, setParams } = useCommonStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async (values: ChangePasswordSchemaType) => {
    setIsLoading(true);
    await wrapCheckErrorForm(
      async () => {
        const access_token = params.tokens?.access_token as string;
        const tokens = params.tokens as TokensResult;
        const data = await userApi.changePassword(access_token, { ...values });
        setIsLoading(false);
        onCancel();
        toast.success(data.message);
        await authApi.logout({ ...tokens });
        setParams({ theme: params.theme });
        removeLocalToken([LOCAL_TOKEN_NAME.AVATAR, LOCAL_TOKEN_NAME.NAME_USER]);
        router.push(PAGES.LOGIN);
      },
      setIsLoading,
      form,
    );
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangePassword)}
      className="mt-3 flex w-[320px] flex-col gap-3"
    >
      <div>
        <Label>Current password:</Label>
        <InputField
          control={control}
          name="old_password"
          type="password"
          placeholder="Enter current password"
          classInput="h-10 text-sm"
          messageError={errors.old_password && errors.old_password.message}
        />
      </div>
      <div>
        <Label>New password:</Label>
        <InputField
          control={control}
          name="password"
          type="password"
          placeholder="Enter current password"
          classInput="h-10 text-sm"
          messageError={errors.password && errors.password.message}
        />
      </div>
      <div>
        <Label>Confirm new password:</Label>
        <InputField
          control={control}
          name="confirm_password"
          type="password"
          placeholder="Enter current password"
          classInput="h-10 text-sm"
          messageError={
            errors.confirm_password && errors.confirm_password.message
          }
        />
      </div>
      <div className="flex gap-3">
        <Button
          isLoading={isLoading}
          type="submit"
          size="xl"
          className="w-auto flex-1 text-sm"
        >
          Accept
        </Button>
        <Button
          variant="outline"
          size="xl"
          className="w-auto flex-1 border border-grayC3 text-sm"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
