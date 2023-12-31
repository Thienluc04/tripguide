interface CarParams {
  from?: string;
  to?: string;
  checkInDate?: string;
  checkOutDate?: string;
}

interface ChooseType {
  image: string | StaticImport;
  name: string;
}

interface CarItem {
  image: string | StaticImport;
  name: string;
}
