import { type ComponentPropsWithoutRef } from 'react';

import { Input } from '../input';
import { Label } from '../label';
import { cn } from '@/lib/utils';

type InputWithLabelProps = ComponentPropsWithoutRef<'input'>;

export const InputWithLabel = ({
  className,
  children,
  ...props
}: InputWithLabelProps) => {
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <>
          <InputWithLabel.Label
            htmlFor={props.name}
            className="text-gray8B font-bold mb-3 block"
          >
            {children}
          </InputWithLabel.Label>
          <InputWithLabel.Input
            className="border-grayF3 rounded-[10px] h-12 px-5 w-[376px]"
            {...props}
          />
        </>
      );
    }

    return children;
  };

  return (
    <div className={cn('flex flex-col justify-center', className)}>
      {renderChildren()}
    </div>
  );
};

InputWithLabel.Input = Input;

InputWithLabel.Label = Label;
