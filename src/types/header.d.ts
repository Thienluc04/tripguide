interface OptionHeader {
  icon: ReactNode;
  name: string;
  href?: string;
}

interface NotiHeader {
  avatar: string | StaticImport;
  title: string;
  unseen: boolean;
  date: string;
}

interface LanguageHeader {
  flag: string | StaticImport;
  name: string;
  active: boolean;
}

interface CurrencyHeader {
  name: string;
  description: string;
  active: boolean;
}
