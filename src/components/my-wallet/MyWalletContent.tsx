import Image from "next/image";
import currencyOrange from "@images/my-wallet/dollar-currency-orange.png";
import currencyBlue from "@images/my-wallet/dollar-currency-blue.png";
import Link from "next/link";
import { Button } from "../ui";
import bookingItem from "@images/my-wallet/booking-item.png";

interface MyWalletContentProps {}

export function MyWalletContent(props: MyWalletContentProps) {
  return (
    <div>
      <h1 className="mb-6 text-5xl font-bold leading-[70px] text-black dark:text-grayF6">
        Wallet
      </h1>
      <div className="flex items-start gap-5">
        <div className="w-[480px] rounded-2xl shadow-[0px_32px_62px_rgba(183,_183,_183,_0.10)] dark:shadow-none">
          <div className="flex flex-col items-center rounded-t-2xl bg-blueFE py-5">
            <h2 className="mb-1 text-[42px] font-medium text-white">$ 6,824</h2>
            <p className="text-2xl text-white">Wallet Balance</p>
          </div>
          <div className="rounded-b-2xl bg-white px-7 py-8 dark:bg-black29">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={currencyOrange}
                  width={35}
                  height={35}
                  alt="currency-orange"
                />
                <div>
                  <h3 className=" mb-2 text-2xl dark:text-grayC3">My Cash</h3>
                  <p className="rounded-3xl bg-[rgba(250,_150,_61,_0.10)] px-3 py-1 text-xs leading-[18px] text-orange54">
                    Use Unrestricted
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-right text-xl font-bold dark:text-grayF3">
                  1,956
                </p>
                <Link href="" className="text-base leading-6 text-blueE6">
                  How to use?
                </Link>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={currencyBlue}
                  width={35}
                  height={35}
                  alt="currency-blue"
                />
                <div>
                  <h3 className=" mb-2 text-2xl dark:text-grayC3">
                    Reward Bonus
                  </h3>
                  <p className="rounded-3xl bg-[rgba(250,_150,_61,_0.10)] px-3 py-1 text-xs leading-[18px] text-orange54">
                    Use With Restrictions
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-right text-xl font-bold dark:text-grayF3">
                  {" "}
                  4,871
                </p>
                <Link href="" className="text-base leading-6 text-blueE6">
                  How to use?
                </Link>
              </div>
            </div>
            <div className="mb-6 h-[1px] bg-grayF6 dark:bg-black44"></div>
            <Button
              variant={"secondary"}
              className="h-auto w-full rounded-[10px] bg-grayF6 px-8 py-3 text-base font-medium leading-6 dark:bg-black44 dark:text-grayC3"
            >
              $ 60 Reward Bonus will expire on Jan 24, 2020
            </Button>
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-white px-8 py-5 shadow-[0px_32px_60px_rgba(211,_211,_211,_0.12)] dark:bg-black2F dark:shadow-none">
          <h2 className="mb-6 text-[34px] font-bold leading-[44px] text-black25 dark:text-grayF6">
            Wallet Transactions
          </h2>
          <div className="mb-6 flex gap-2">
            <div className="flex h-11 cursor-pointer items-center justify-center rounded-md bg-blueE6 px-4 text-lg font-bold text-grayFE">
              ALL
            </div>
            <div className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-grayE4 bg-grayFE px-4 dark:border-black44 dark:bg-black44">
              <Image
                src={currencyBlue}
                alt="currency-blue"
                width={24}
                height={24}
              />
              <p className="leading-6 text-gray8B dark:text-grayC3">My Cash</p>
            </div>
            <div className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-grayE4 bg-grayFE px-4 dark:border-black44 dark:bg-black44">
              <Image
                src={currencyOrange}
                alt="currency-orange"
                width={24}
                height={24}
              />
              <p className="leading-6 text-gray8B dark:text-grayC3">
                Reward Bonus
              </p>
            </div>
          </div>
          <div className="mb-5 h-[1px] bg-grayEC dark:bg-black44"></div>
          <div className="mb-6 flex gap-2">
            <div className="rounded-full bg-grayF6 px-4 py-2 dark:bg-black44 dark:text-grayC3">
              Promo
            </div>
            <div className="rounded-full bg-grayF6 px-4 py-2 dark:bg-black44 dark:text-grayC3 ">
              MMI Black
            </div>
            <div className="rounded-full bg-grayF6 px-4 py-2 dark:bg-black44 dark:text-grayC3 ">
              My Promise
            </div>
            <div className="rounded-full bg-grayF6 px-4 py-2 dark:bg-black44 dark:text-grayC3 ">
              Refunds
            </div>
            <div className="rounded-full bg-grayF6 px-4 py-2 dark:bg-black44 dark:text-grayC3 ">
              Others
            </div>
          </div>
          <p className="mb-4 text-sm text-gray8B">22 JAN 2020</p>
          <div className="mb-5 flex gap-5">
            <div>
              <Image src={bookingItem} alt="booking-item" />
            </div>
            <div className="flex flex-1 items-center justify-between border-b border-b-grayE8 pb-9 dark:border-b-black44">
              <div>
                <h3 className="mb-1 text-lg font-medium text-black2F dark:text-grayF6">
                  Booking
                </h3>
                <p className="mb-3 text-lg text-gray8B dark:text-grayC3">
                  Booking ID{" "}
                  <span className="text-black45 dark:text-gray8B">
                    NR710746375497578453
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={currencyOrange}
                    alt="currency-orange"
                    width={26}
                    height={26}
                  />
                  <p className="leading-6 text-gray8B dark:text-gray90">
                    My Cash Debited
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium text-black29 dark:text-grayC3">
                $ 526
              </p>
            </div>
          </div>
          <div className="mb-5 flex gap-5">
            <div>
              <Image src={bookingItem} alt="booking-item" />
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div>
                <h3 className="mb-1 text-lg font-medium text-black2F dark:text-grayF6">
                  Booking
                </h3>
                <p className="mb-3 text-lg text-gray8B dark:text-grayC3">
                  Booking ID{" "}
                  <span className="text-black45 dark:text-gray8B">
                    NR710746375497578453
                  </span>
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={currencyOrange}
                    alt="currency-orange"
                    width={26}
                    height={26}
                  />
                  <p className="leading-6 text-gray8B dark:text-gray90">
                    Reward Bonus Debited
                  </p>
                </div>
              </div>
              <p className="text-lg font-medium text-black29 dark:text-grayC3">
                $ 40
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
