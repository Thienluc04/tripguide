import { PropsWithChildren } from 'react';

interface SidebarFilterProps {}

export function SidebarFilter({
  children,
}: PropsWithChildren<SidebarFilterProps>) {
  return <div className="flex flex-col gap-[30px] w-[290px]">{children}</div>;
}
