import Link from "next/link";
import Image from "next/image";
import Telegram from "@/public/Telegram.svg"
import Instagram from "@/public/Instagram.svg"
import Twitter from "@/public/Twitter.svg"

const Footer = () => {
  return (
    <div className="flex items-center w-full">
      <div className="bg-[#050505] flex items-center flex-1">
        <Link
          href="#"
          className="lg:text-[38px] sm:text-sm font-bold text-primary font-header"
        >
          Logo
        </Link>
      </div>
      <div className="font-body lg:text-[18px] sm:text-xs text-[12px] font-normal text-white items-center py-1">
        Contact@00000000.tech
      </div>
      <Image src={Telegram} alt="" className="lg:ml-5 sm:ml-3 ml-2" ></Image>
      <Image src={Instagram} alt="" className="lg:ml-4 sm:ml-3 ml-2" ></Image>
      <Image src={Twitter} alt="" className="lg:ml-4 sm:ml-3 ml-2"></Image>
    </div>
  );
};

export default Footer;
