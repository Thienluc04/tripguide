import { useSvgIcon } from '@/hooks/useSvgIcon';
import { ComponentProps } from 'react';

interface SvgIconProps extends ComponentProps<'svg'> {
  name: string;
}

export function SvgIcon({ name, ...props }: SvgIconProps) {
  const { error, loading, Icon } = useSvgIcon(name);

  if (error) {
    throw new Error(error.message);
  }

  if (loading) {
    return <></>;
  }

  if (!Icon) {
    return <></>;
  }

  return <Icon {...props} />;
}
