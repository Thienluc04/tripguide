import { CarItem } from ".";

import car1 from "@images/cars/list-1.png";
import car2 from "@images/cars/list-2.png";
import car3 from "@images/cars/list-3.png";

const listCar: CarItem[] = [
  {
    image: car1,
    name: "BMW i10 - 2021",
  },
  {
    image: car2,
    name: "BMW i09 - 2021",
  },
  {
    image: car3,
    name: "BMW i08 - 2021",
  },
  {
    image: car1,
    name: "BMW i10 - 2021",
  },
  {
    image: car2,
    name: "BMW i09 - 2021",
  },
  {
    image: car3,
    name: "BMW i08 - 2021",
  },
];

interface ListContentCarProps {}

export function ListContentCar(props: ListContentCarProps) {
  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-[30px]">
      {listCar.map((item, index) => (
        <CarItem key={index} image={item.image} name={item.name} />
      ))}
    </div>
  );
}
