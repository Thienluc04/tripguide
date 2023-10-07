'use client';

import { ComponentProps, HTMLInputTypeAttribute, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CloseEyeIcon, OpenEyeIcon } from '@/components/icons';

interface InputFieldProps extends ComponentProps<'label'> {
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

export function InputField({
  label,
  placeholder,
  type = 'text',
  className = '',
}: InputFieldProps) {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <label className={twMerge('flex flex-col gap-[10px]', className)}>
      <span className="text-sm">{label}</span>
      <div className="flex relative">
        <input
          type={showPass ? 'text' : type}
          className="rounded-lg h-12 w-full px-[14px] bg-grayF3"
          placeholder={placeholder}
        />
        {type === 'password' && (
          <>
            {!showPass ? (
              <OpenEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 text-grayC3 cursor-pointer"
                onClick={() => setShowPass(true)}
              ></OpenEyeIcon>
            ) : (
              <CloseEyeIcon
                className="absolute right-[14px] top-2/4 -translate-y-2/4 text-grayC3 cursor-pointer"
                onClick={() => setShowPass(false)}
              ></CloseEyeIcon>
            )}
          </>
        )}
      </div>
    </label>
  );
}
