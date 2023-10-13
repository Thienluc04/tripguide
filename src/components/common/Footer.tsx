import Image from 'next/image';
import { MoonIcon, SunIcon } from '@/components/icons';
import Link from 'next/link';
import {
  listBusiness,
  listServices,
  listSupport,
} from '@/constants/footer.constant';
import { Button } from '../ui';

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="">
      <div
        className="container h-[248px] bg-[url(/images/bg-footer.png)] py-[62px] px-[90px] 
        flex justify-between items-end translate-y-1/2"
      >
        <div>
          <h2 className="text-white text-[44px] font-extrabold mb-4 font-OpenSans">
            Get our pro offers
          </h2>
          <p className="text-white font-Roboto max-w-[370px] leading-7">
            Create a visual identity for your company, and an overall brand
          </p>
        </div>
        <div className="inline-flex p-2 rounded bg-white w-[488px]">
          <input
            type="email"
            placeholder="Type your email here"
            className="flex-1 ml-3"
          />
          <Button
            variant="black"
            className="font-Roboto font-medium w-[130px] py-3 h-auto"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="bg-grayF6 pt-[224px] pb-[150px]">
        <div className="container flex justify-between">
          <div className="w-[254px]">
            <Link href={'/'} className="flex gap-[10px] items-center mb-5">
              <Image
                src={'/images/logo.png'}
                alt="logo"
                width={40}
                height={38}
              ></Image>
              <h2 className="font-OpenSans text-xl font-bold">TripGuide</h2>
            </Link>
            <p className="text-gray8B mb-6 leading-6">
              This is the team that specializes in making sure in the find it a
              your interior looks cool
            </p>
            <div className="inline-flex p-1 gap-1 bg-white rounded-lg">
              <div
                className="w-[60px] h-[30px] bg-grayFD rounded-lg shadow-[0px_2px_2px_0px_rgba(67,_67,_67,_0.10)] flex 
                items-center justify-center cursor-pointer"
              >
                <SunIcon className="text-black44"></SunIcon>
              </div>
              <div className="w-[60px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer">
                <MoonIcon className="text-grayB90"></MoonIcon>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black29 mb-5">Services</h3>
            <div className="flex flex-col gap-4">
              {listServices.map((item, index) => (
                <Link
                  key={index}
                  href={'/'}
                  className="text-gray8B font-medium leading-6"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black29 mb-5">Support</h3>
            <div className="flex flex-col gap-4">
              {listSupport.map((item, index) => (
                <Link
                  key={index}
                  href={'/'}
                  className="text-gray8B font-medium leading-6"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black29 mb-5">Business</h3>
            <div className="flex flex-col gap-4">
              {listBusiness.map((item, index) => (
                <Link
                  key={index}
                  href={'/'}
                  className="text-gray8B font-medium leading-6"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
