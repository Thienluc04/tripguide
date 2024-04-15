import Image from "next/image";
import notFoundImg from "@images/404-error.png";
import { Footer } from "@/components/common";

export interface NotFoundPageProps {}

export default function NotFoundPage(props: NotFoundPageProps) {
  return (
    <>
      <div className="mx-auto mb-10 mt-20 flex flex-col items-center justify-center md:mt-[150px]">
        <Image
          src={notFoundImg}
          alt="not-found-img"
          className="w-[150px] md:w-full"
        />
        <h3 className="mt-5 text-lg text-black29 dark:text-grayFD md:mt-10 md:text-3xl">
          This page was not found
        </h3>
      </div>
      <Footer />
    </>
  );
}
