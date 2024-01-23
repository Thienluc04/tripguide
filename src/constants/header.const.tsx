import {
  CardIcon,
  ProfileIcon,
  SignOutIcon,
  SuitCaseIcon,
  TagIcon,
  UserIcon,
} from "@/components/icons";
import flagBangla from "@images/header/bangla-flag.png";
import flagFrance from "@images/header/france-flag.png";
import flagItaly from "@images/header/italy-flag.png";
import notiAvatar1 from "@images/header/noti-avatar-1.png";
import notiAvatar2 from "@images/header/noti-avatar-2.png";
import notiAvatar3 from "@images/header/noti-avatar-3.png";
import notiAvatar4 from "@images/header/noti-avatar-4.png";
import flagPortugal from "@images/header/portugal-flag.png";
import flagSpain from "@images/header/spain-flag.png";
import flagUSAMedium from "@images/header/usa-flag-medium.png";

export const listOptions: OptionHeader[] = [
  {
    icon: <ProfileIcon width={16} height={16} />,
    name: "My Profile",
    href: "/profile",
  },
  {
    icon: <UserIcon width={16} height={16} />,
    name: "Manage account",
    href: "/manage-account",
  },
  {
    icon: <SuitCaseIcon width={16} height={16} />,
    name: "Bookings",
    href: "/bookings",
  },
  {
    icon: <CardIcon width={16} height={16} />,
    name: "My wallet",
    href: "/my-wallet",
  },
  {
    icon: <TagIcon className="rotate-[270deg]" width={16} height={16} />,
    name: "My rewards",
    href: "/my-rewards",
  },
  {
    icon: <SignOutIcon width={16} height={16} />,
    name: "Sign out",
  },
];

export const listNoti: NotiHeader[] = [
  {
    avatar: notiAvatar1,
    title: "You Booked and earn 8 point for on customer creation Steve Mathew ",
    unseen: false,
    date: "4 weeks ago",
  },
  {
    avatar: notiAvatar2,
    title: "You Booked and earn 8 point for on customer creation Steve Mathew ",
    unseen: true,
    date: "4 weeks ago",
  },
  {
    avatar: notiAvatar3,
    title: "You Booked and earn 8 point for on customer creation Steve Mathew ",
    unseen: false,
    date: "18 hours ago",
  },
  {
    avatar: notiAvatar4,
    title: "You Booked and earn 8 point for on customer creation Steve Mathew ",
    unseen: false,
    date: "22 hours ago",
  },
];

export const listLanguage: LanguageHeader[] = [
  {
    flag: flagFrance,
    name: "France",
    active: false,
  },
  {
    flag: flagUSAMedium,
    name: "English (us)",
    active: true,
  },
  {
    flag: flagSpain,
    name: "Spain",
    active: false,
  },
  {
    flag: flagBangla,
    name: "Bangla",
    active: false,
  },
  {
    flag: flagItaly,
    name: "Italy",
    active: false,
  },
  {
    flag: flagPortugal,
    name: "Portugal",
    active: false,
  },
  {
    flag: flagFrance,
    name: "France",
    active: false,
  },
  {
    flag: flagUSAMedium,
    name: "English (us)",
    active: true,
  },
  {
    flag: flagSpain,
    name: "Spain",
    active: false,
  },
  {
    flag: flagBangla,
    name: "Bangla",
    active: false,
  },
  {
    flag: flagItaly,
    name: "Italy",
    active: false,
  },
  {
    flag: flagPortugal,
    name: "Portugal",
    active: false,
  },
];

export const listCurrency: CurrencyHeader[] = [
  {
    name: "GBP",
    description: "British Pounds",
    active: false,
  },
  {
    name: "USD",
    description: "US Dollar",
    active: true,
  },
  {
    name: "AUD",
    description: "Australian Dollar",
    active: false,
  },
  {
    name: "BDT",
    description: "Bangladeshi Taka",
    active: false,
  },
  {
    name: "CAD",
    description: "Canadian Dollar",
    active: false,
  },
  {
    name: "GBP",
    description: "British Pounds",
    active: false,
  },
  {
    name: "USD",
    description: "US Dollar",
    active: true,
  },
  {
    name: "AUD",
    description: "Australian Dollar",
    active: false,
  },
  {
    name: "BDT",
    description: "Bangladeshi Taka",
    active: false,
  },
  {
    name: "CAD",
    description: "Canadian Dollar",
    active: false,
  },
];
