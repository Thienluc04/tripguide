import { ChevronLeftIcon } from "@/components/icons";
import { MyWalletContent } from "@/components/my-wallet";
import Link from "next/link";

export default function MyWalletPage() {
  return (
    <div className="container px-5 xl:px-0">
      <div className="mb-11 hidden items-center gap-3 pt-10 xl:flex">
        <Link href={"/"} className="flex items-center gap-2 dark:text-grayF3">
          <ChevronLeftIcon />
          <span className="leading-6">Back</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3 dark:bg-gray8B"></div>
        <p className="leading-6 text-grayC3 dark:text-gray8B">My wallet</p>
      </div>
      <MyWalletContent />
    </div>
  );
}
