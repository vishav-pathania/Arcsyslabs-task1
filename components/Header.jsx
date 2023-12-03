import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center flex-1">
          <Link
            href="#"
            className="text-[38px] font-bold text-primary font-header"
          >
            Logo
          </Link>
          <div className="w-[1px] h-[36px] bg-white ml-[36px] " />
          <img src="/House.svg" alt="" className="items-center ml-[40px]" />
          <p className="ml-3 text-primary font-semibold font-header text-[22px]">
            Explore
          </p>
          <img src="/Pen.svg" alt="" className="ml-12 items-center" />
          <p className="font-header text-white font-semibold ml-3 text-[22px]">
            Create
          </p>
          <img src="/Magicstick.svg" alt="" className="ml-12" />
          <p className="font-header text-white font-semibold ml-3 text-[22px]">
            Edit
          </p>
        </div>
        <button className="text-header text-semibold text-[18px] bg-primary rounded-full px-16 py-3">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
