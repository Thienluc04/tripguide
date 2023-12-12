'use client';

import { CloseEyeIcon, OpenEyeIcon, WarningIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { ComponentProps, HTMLInputTypeAttribute, useState } from 'react';
import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputFieldProps<T extends FieldValues>
  extends ComponentProps<'label'> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  messageError?: string;
}

export function InputField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  className = '',
  messageError,
}: InputFieldProps<T>) {
  const { field } = useController({
    name,
    control,
    defaultValue: '' as PathValue<T, Path<T>>,
  });

  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <label className={twMerge('flex flex-col gap-[10px]', className)}>
      <span className="text-sm">{label}</span>
      <div className="flex relative">
        <input
          type={showPass ? 'text' : type}
          className={cn(
            'rounded-lg h-12 w-full px-[14px] bg-grayF3',
            messageError && 'bg-white border-red57 border'
          )}
          placeholder={placeholder}
          {...field}
        />
        {type === 'password' && (
          <>
            {!showPass ? (
              <OpenEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 text-grayC3 cursor-pointer"
                onClick={() => setShowPass(true)}
              />
            ) : (
              <CloseEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 text-grayC3 cursor-pointer"
                onClick={() => setShowPass(false)}
              />
            )}
          </>
        )}
      </div>
      {messageError && (
        <div className="flex gap-1">
          <WarningIcon className="text-red57" />
          <p className="text-[10px] font-medium text-red57">{messageError}</p>
        </div>
      )}
    </label>
  );
}
