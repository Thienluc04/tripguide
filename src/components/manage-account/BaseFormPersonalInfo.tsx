import { useState } from "react";
import { Language, UserGender } from "@/constants/enum.const";
import { InputField } from "../auth";
import {
  ArrowDownIcon,
  CalendarIcon,
  PencilWriteIcon,
  WarningIcon,
} from "../icons";
import {
  Button,
  DatePicker,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { UpdateProfileSchemaType } from "@/models/schemas/update-profile.schema";
import { User } from "@/types/user";

interface BaseFormPersonalInfoProps {
  form: UseFormReturn<UpdateProfileSchemaType>;
  onFormSubmit: SubmitHandler<UpdateProfileSchemaType>;
  isLoading: boolean;
  userInfo: User;
}

export function BaseFormPersonalInfo({
  form,
  isLoading,
  onFormSubmit,
  userInfo,
}: BaseFormPersonalInfoProps) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = form;
  const [editMode, setEditMode] = useState(false);
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="xl:mt-[70px]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-medium leading-9 text-black29 dark:text-grayF3">
          Account info
        </h3>
        <Button
          variant={"outline"}
          type="button"
          className="flex h-auto w-[112px] items-center gap-2 rounded-full border border-grayC3 py-2 dark:border-black44 dark:text-grayC3"
          onClick={() => setEditMode(true)}
        >
          <PencilWriteIcon className="h-3 w-3" />
          <span className="text-sm font-medium">Edit </span>
        </Button>
      </div>
      <div className="mb-10 flex flex-wrap justify-between gap-6">
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Name
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            placeholder="Your name is empty"
            disabled={!editMode}
            control={control}
            name="name"
            messageError={errors.name && String(errors?.name.message)}
          />
        </div>
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Street address
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            placeholder="Your name is empty"
            disabled={!editMode}
            control={control}
            name="street_address"
            messageError={
              errors.street_address && String(errors?.street_address.message)
            }
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-[10px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Gender
          </Label>
          <Select
            onValueChange={(value) =>
              setValue("gender", value as unknown as UserGender)
            }
            defaultValue={String(userInfo.gender)}
          >
            <SelectTrigger
              icon={<ArrowDownIcon className="h-3 w-4" />}
              disabled={!editMode}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
            >
              <SelectValue placeholder="Choose gender" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-grayAFB dark:border-black44 dark:bg-black dark:text-grayFD">
              <SelectItem
                value={String(UserGender.Male)}
                className="cursor-pointer"
              >
                Male
              </SelectItem>
              <SelectItem
                value={String(UserGender.Female)}
                className="cursor-pointer"
              >
                Female
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <div className="flex items-center gap-2">
              <WarningIcon className=" text-red57" />
              <p className="text-[10px] font-medium text-red57">
                {errors.gender.message}
              </p>
            </div>
          )}
        </div>
        <div className="w-[358px]">
          <Label className="mb-[10px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Date of birth
          </Label>
          <div>
            <DatePicker
              className="h-12 w-full rounded-[10px] border-grayF3 px-3 py-2 text-grayC3 shadow-none dark:border-black44"
              classCalendar="w-[358px] border-grayF3"
              disabled={!editMode}
              defaultDate={new Date(userInfo.date_of_birth)}
              onDateChange={(date) =>
                setValue("date_of_birth", date.toISOString())
              }
            />
          </div>
          {errors.date_of_birth && (
            <div className="flex items-center gap-2">
              <WarningIcon className=" text-red57" />
              <p className="text-[10px] font-medium text-red57">
                {errors.date_of_birth.message}
              </p>
            </div>
          )}
        </div>
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Phone number
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            placeholder="Your phone number is empty"
            disabled={!editMode}
            control={control}
            name="phone_number"
            messageError={
              errors.phone_number && String(errors?.phone_number.message)
            }
          />
        </div>
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Email
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            type="email"
            placeholder="Your email is empty"
            disabled={!editMode}
            control={control}
            name="email"
            messageError={errors.email && String(errors?.email.message)}
          />
        </div>
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Live in
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            placeholder="Your live in is empty"
            disabled={!editMode}
            control={control}
            name="live_in"
            messageError={errors.live_in && String(errors?.live_in.message)}
          />
        </div>
        <div className="w-[358px]">
          <Label className="mb-[10px] inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Language
          </Label>
          <Select
            onValueChange={(value) =>
              setValue("language", value as unknown as Language)
            }
            defaultValue={String(userInfo.language)}
          >
            <SelectTrigger
              icon={<ArrowDownIcon className="h-3 w-4" />}
              className="h-12 w-full rounded-[10px] border-grayF3 text-grayC3 shadow-none dark:border-black44"
              disabled={!editMode}
            >
              <SelectValue placeholder="English (United States)" />
            </SelectTrigger>
            <SelectContent className="border-grayF3 bg-grayAFB dark:border-black44 dark:bg-black dark:text-grayFD">
              <SelectItem
                value={String(Language.English)}
                className="cursor-pointer"
              >
                English
              </SelectItem>
              <SelectItem
                value={String(Language.Vietnamese)}
                className="cursor-pointer"
              >
                Vietnamese
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.language && (
            <div className="flex items-center gap-2">
              <WarningIcon className=" text-red57" />
              <p className="text-[10px] font-medium text-red57">
                {errors.language.message}
              </p>
            </div>
          )}
        </div>
      </div>
      <h3 className="mb-6 text-2xl font-medium leading-9 text-black29 dark:text-white">
        Social
      </h3>
      <div className="mb-10 flex flex-wrap items-center gap-6">
        <div className="w-[358px]">
          <Label className="inline-block text-base font-bold text-gray8B dark:text-grayC3">
            Website
          </Label>
          <InputField
            classInput="h-12 w-full rounded-[10px] border border-grayF3 dark:bg-black bg-transparent text-grayC3 shadow-none dark:border-black44"
            placeholder={"Your site URL"}
            disabled={!editMode}
            control={control}
            name="website"
            messageError={errors.website && String(errors?.website.message)}
          />
        </div>
      </div>
      {editMode && (
        <div className="flex items-center gap-[60px]">
          <Button
            isLoading={isLoading}
            type="submit"
            className="h-12 w-[160px] rounded-full px-6 py-4 text-base font-bold leading-4 text-grayFD"
          >
            Update profile
          </Button>
          <Button
            onClick={() => setEditMode(false)}
            variant={"ghost"}
            className="h-auto w-auto dark:text-gray8B"
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
}
