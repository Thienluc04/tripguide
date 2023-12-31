'use client';

import { UserIcon } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import logo from '@images/logo.png';
import flagUSA from '@images/usa-flag.png';
import avatar from '@images/avatar.png';

interface HeaderProps extends ComponentProps<'div'> {}

export function Header({ className }: HeaderProps) {
  return (
    <div
      className={twMerge(
        'px-10 py-5 flex justify-between items-center shadow-[0px_-1px_4px_0px_#E2E2EA]',
        className
      )}
    >
      <Link href={'/'} className="flex gap-[10px] items-center">
        <Image src={logo} alt="logo" width={40} height={38}></Image>
        <h2 className="font-OpenSans text-xl font-bold">TripGuide</h2>
      </Link>
      <div className="flex gap-4 items-center">
        <h3 className="text-gray8B font-Roboto text-sm font-bold">USD</h3>
        <Image src={flagUSA} width={20} height={20} alt="usa-flag"></Image>
        <div className="w-[1px] h-8 bg-grayF3"></div>

        <Link href={'/sign-in'}>
          <UserIcon className="w-8 h-8 rounded-full bg-grayF3 text-grayC3 flex items-center justify-center cursor-pointer"></UserIcon>
        </Link>

        {/* User logged */}
        {/* <Image
          src={avatar}
          alt="avatar"
          width={32}
          height={32}
        ></Image>
        <h3 className="text-sm font-medium font-Roboto">Delowar</h3>
        <ArrowDownIcon></ArrowDownIcon> */}
      </div>
    </div>
  );
}
