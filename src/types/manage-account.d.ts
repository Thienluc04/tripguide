interface NavItem {
  title: string;
  tag: string;
}

type CurrentTag =
  | "personal-info"
  | "security"
  | "notifications"
  | "payment-payout"
  | "privacy-sharing"
  | "preference"
  | "";
