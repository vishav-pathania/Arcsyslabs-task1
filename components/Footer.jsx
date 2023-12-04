import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center mt-20">
      <div className="bg-[#050505] max-w-[1620px] flex items-center flex-1 ml-[3px] ">
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
      <img src="/Telegram.svg" alt="" className="ml-5" />
      <img src="/Instagram.svg" alt="" className="ml-4" />
      <img src="/Twitter.svg" alt="" className="ml-4" />
    </div>
  );
};

export default Footer;
