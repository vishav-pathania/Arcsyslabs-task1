import Image from "next/image";
import Link from "next/link";
import ExploreImage from "../public/House.svg";
import PenImage from "../public/Pen.svg";
import MagicStick from "../public/Magicstick.svg";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="flex flex-row items-center transition-all duration-[600ms] ">
      <Link href="#" className="text-[38px] font-bold text-primary font-header">
        Logo
      </Link>
      <div className="hidden lg:block w-[1px] h-[36px] bg-white ml-[36px] " />
      <div className="hidden lg:flex flex-row items-center flex-1">
        <Image src={ExploreImage} alt="Explore" className="ml-[40px]" />
        <p className="ml-3 text-primary font-semibold font-header text-[22px]">
          Explore
        </p>
        <Image src={PenImage} alt="Create" className="ml-12" />
        <p className="font-header text-white font-semibold ml-3 text-[22px]">
          Create
        </p>
        <Image src={MagicStick} alt="Edit" className="ml-12" />
        <p className="font-header text-white font-semibold ml-3 text-[22px]">
          Edit
        </p>
        <div className="flex-1" />
        <button className="text-header text-semibold text-[18px] bg-primary rounded-full px-16 py-3 justify-self-end">
          Login
        </button>
      </div>
      <div className="lg:hidden flex justify-end flex-1">
        <Hamburger
          open={navOpen}
          clickHandler={() => setNavOpen((prev) => !prev)}
        />
      </div>

      {/*Mobile nav*/}
      <div
        className={`backdrop-blur-lg bg-black/20 z-50 min-w-full flex lg:hidden flex-col space-y-8 items-center top-28 py-8 left-0 fixed transition-all duration-[600ms] ${navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex">
          <Image src={ExploreImage} alt="Explore" />
          <p className="ml-3 text-primary font-semibold font-header text-[22px]">
            Explore
          </p>
        </div>
        <div className="flex">
          <Image src={PenImage} alt="Create" />
          <p className="font-header text-white font-semibold ml-3 text-[22px]">
            Create
          </p>
        </div>
        <div className="flex">
          <Image src={MagicStick} alt="Edit" />
          <p className="font-header text-white font-semibold ml-3 text-[22px]">
            Edit
          </p>
        </div>
        <button className="text-header text-semibold text-[18px] bg-primary rounded-full px-16 py-3 justify-self-end">
          Login
        </button>
      </div>
      {/*End of mobile nav*/}
    </header>
  );
};

export default Header;
