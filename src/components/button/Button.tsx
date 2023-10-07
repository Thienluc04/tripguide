import { ComponentProps, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  type?: 'button' | 'submit';
}

export function Button({
  type = 'button',
  children,
  className = '',
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      className={twMerge(
        'text-xl font-bold text-grayF7 py-[10px] rounded-lg bg-primary btn-primary-shadow w-full',
        className
      )}
    >
      {children}
    </button>
  );
}
