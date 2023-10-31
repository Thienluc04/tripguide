'use client';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { useState } from 'react';

interface CheckboxProps {
  label?: string;
}

export function Checkbox({ label }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className={cn('cursor-pointer', label && 'flex gap-3 items-center')}>
      <span>
        <input
          type="checkbox"
          checked={checked}
          name=""
          id=""
          className="hidden"
          onChange={() => setChecked(!checked)}
        />
        <span
          className={clsx(
            checked
              ? 'text-white bg-primary'
              : 'border border-grayF3 bg-grayF6',
            'inline-flex items-center justify-center w-4 h-4 p-1 rounded'
          )}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </span>
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
