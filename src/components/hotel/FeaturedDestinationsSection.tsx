import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';

interface FeaturedDestinationsSectionProps extends ComponentProps<'section'> {}

export function FeaturedDestinationsSection({
  className,
  ...props
}: FeaturedDestinationsSectionProps) {
  return (
    <section className={cn('container', className)} {...props}>
      <h2 className="text-black text-5xl font-bold mb-3">
        Featured Destinations
      </h2>
      <p className="mb-9">
        Popular destinations open to visitors from Indonesia
      </p>
      <div className="flex gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[20px]"
              style={{
                backgroundImage:
                  'linear-gradient(39deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0.00) 45.57%',
              }}
            ></div>
            <Image
              src={'/images/destinations/destinations-1.png'}
              alt="destinations-1"
              width={870}
              height={280}
            ></Image>
            <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
              <div>
                <span className="inline text-lg font-bold text-red px-5 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="text-[40px] font-bold text-white mb-5">
                  Barcelona Tour
                </h3>
                <div className="flex gap-2 items-center">
                  <Image
                    src={'/images/destinations/small-avatar-1.png'}
                    alt="small-avatar-1"
                    width={28}
                    height={28}
                  ></Image>
                  <span className="text-white text-xl">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[54px]">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                  backgroundImage:
                    'linear-gradient(357deg, rgba(30, 30, 30, 0.67) 11.64%, rgba(66, 66, 66, 0.00) 23.22%)',
                }}
              ></div>
              <Image
                src={'/images/destinations/destinations-2.png'}
                alt="destinations-2"
                width={408}
                height={408}
              ></Image>
              <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
                <div>
                  <span className="inline text-lg font-bold text-red px-5 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                    3.5
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    London, United State
                  </h3>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={'/images/destinations/small-avatar-2.png'}
                      alt="small-avatar-2"
                      width={28}
                      height={28}
                    ></Image>
                    <span className="text-white text-sm">196 Activities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{
                  backgroundImage:
                    'linear-gradient(2deg, rgba(35, 35, 35, 0.58) 13.14%, rgba(196, 196, 196, 0.00) 26.65%)',
                }}
              ></div>
              <Image
                src={'/images/destinations/destinations-3.png'}
                alt="destinations-3"
                width={408}
                height={408}
              ></Image>
              <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
                <div>
                  <span className="inline text-lg font-bold text-red px-5 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                    3.5
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Australia Tour
                  </h3>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={'/images/destinations/small-avatar-2.png'}
                      alt="small-avatar-2"
                      width={28}
                      height={28}
                    ></Image>
                    <span className="text-white text-sm">196 Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  'linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)',
              }}
            ></div>
            <Image
              src={'/images/destinations/destinations-4.png'}
              alt="destinations-4"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
              <div>
                <span className="inline text-sm font-bold text-red px-4 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Australia Tour
                </h3>
                <div className="flex gap-2 items-center">
                  <Image
                    src={'/images/destinations/small-avatar-2.png'}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-white text-xs">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  'linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)',
              }}
            ></div>
            <Image
              src={'/images/destinations/destinations-5.png'}
              alt="destinations-5"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
              <div>
                <span className="inline text-sm font-bold text-red px-4 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Japan Tour
                </h3>
                <div className="flex gap-2 items-center">
                  <Image
                    src={'/images/destinations/small-avatar-2.png'}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-white text-xs">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                backgroundImage:
                  'linear-gradient(1deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0.00) 39.64%)',
              }}
            ></div>
            <Image
              src={'/images/destinations/destinations-6.png'}
              alt="destinations-6"
              width={270}
              height={220}
            ></Image>
            <div className="absolute inset-0 p-5 inline-flex flex-col justify-between">
              <div>
                <span className="inline text-sm font-bold text-red px-4 rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(40,_40,_40,_0.12)]">
                  3.5
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Japan Tour
                </h3>
                <div className="flex gap-2 items-center">
                  <Image
                    src={'/images/destinations/small-avatar-2.png'}
                    alt="small-avatar-2"
                    width={14}
                    height={14}
                  ></Image>
                  <span className="text-white text-xs">196 Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
