'use client';
import BestExperience from '@images/cars/best-experience.png';

import {
  BestShieldIcon,
  HeadphoneIcon,
  SterlingPoundIcon,
  TagIcon,
  UserIcon,
} from '@/components/icons';
import Image from 'next/image';

interface BestExperienceSectionProps {}

export function BestExperienceSection(props: BestExperienceSectionProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0">
        <Image
          src={BestExperience}
          alt="best-experience"
          width={720}
          height={846}
        />
      </div>
      <div className="max-w-[500px] mx-auto">
        <div className="mb-11">
          <h2 className="text-black text-[40px] font-bold leading-[60px] mb-4">
            Feel the best experience with our rental deals
          </h2>
          <div className="bg-grayF6 h-[2px]"></div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-6 items-start">
            <div className="h-[52px] w-[52px] bg-grayF2 border border-white shadow-lg shadow-slate-200 flex rounded-lg items-center justify-center">
              <SterlingPoundIcon className="text-blueFE" />
            </div>
            <div className="flex-1">
              <h3 className="text-black45 text-2xl font-medium leading-9 mb-1">
                Deals for every budget
              </h3>
              <p className="text-gray90 text-sm font-medium">
                Choose from & wide variety of car classes new high-quality
                vehicles teeting your neads and luxigel best
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="h-[52px] w-[52px] bg-grayF2 border border-white shadow-lg shadow-slate-200 flex rounded-lg items-center justify-center">
              <HeadphoneIcon className="text-blueFE" />
            </div>
            <div className="flex-1">
              <h3 className="text-black45 text-2xl font-medium leading-9 mb-1">
                Awesome Customer Support
              </h3>
              <p className="text-gray90 text-sm font-medium">
                Deliver faster, more personalized support with the power of co
                browse and live chat.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="h-[52px] w-[52px] bg-grayF2 border border-white shadow-lg shadow-slate-200 flex rounded-lg items-center justify-center">
              <TagIcon className="text-blueFE" />
            </div>
            <div className="flex-1">
              <h3 className="text-black45 text-2xl font-medium leading-9 mb-1">
                Free Cancellation
              </h3>
              <p className="text-gray90 text-sm font-medium">
                No extra fee, you can cancel your booking anytime
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="h-[52px] w-[52px] bg-grayF2 border border-white shadow-lg shadow-slate-200 flex rounded-lg items-center justify-center">
              <BestShieldIcon className="text-blueFE" />
            </div>
            <div className="flex-1">
              <h3 className="text-black45 text-2xl font-medium leading-9 mb-1">
                Your Best security
              </h3>
              <p className="text-gray90 text-sm font-medium">
                Every detail that is part of our service has been created with
                your safety in mind
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="h-[52px] w-[52px] bg-grayF2 border border-white shadow-lg shadow-slate-200 flex rounded-lg items-center justify-center">
              <UserIcon className="text-blueFE" />
            </div>
            <div className="flex-1">
              <h3 className="text-black45 text-2xl font-medium leading-9 mb-1">
                Quality Drivers
              </h3>
              <p className="text-gray90 text-sm font-medium">
                We have the most rigorous driver selection process in the
                market. We work only with the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
