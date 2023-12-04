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
          className="text-[38px] font-bold text-primary font-header"
        >
          Logo
        </Link>
      </div>
      <div className="h-8 font-body font-normal text-white items-center py-1">
        Contact@00000000.tech
      </div>
      <Image src={Telegram} alt="" className="ml-5" ></Image>
      <Image src={Instagram} alt="" className="ml-4" ></Image>
      <Image src={Twitter} alt="" className="ml-4" ></Image>
    </div>
  );
};

export default Footer;
