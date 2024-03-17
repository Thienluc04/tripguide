import { PropsWithChildren } from "react";

interface SidebarFilterProps {}

export function SidebarFilter({
  children,
}: PropsWithChildren<SidebarFilterProps>) {
  return (
    <div className="mx-auto flex w-[290px] flex-col gap-[30px] xl:mx-0">
      {children}
    </div>
  );
}
