import { ChevronLeftIcon } from "@/components/icons";
import { MyWalletContent } from "@/components/my-wallet";
import Link from "next/link";

export default function MyWalletPage() {
  return (
    <div className="container">
      <div className="mb-11 mt-10 flex items-center gap-3">
        <Link href={"/"} className="flex items-center gap-2">
          <ChevronLeftIcon />
          <span className="leading-6">Home</span>
        </Link>
        <div className="h-3 w-[1px] bg-grayC3"></div>
        <p className="leading-6 text-grayC3">My wallet</p>
      </div>
      <MyWalletContent />
    </div>
  );
}
