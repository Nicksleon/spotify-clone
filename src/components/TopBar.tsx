import { HiOutlineUser } from "react-icons/Hi";
import { IoMdArrowDropdown } from "react-icons/Io";
import { IoIosArrowBack } from "react-icons/Io";
import { IoIosArrowForward } from "react-icons/Io";

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-1000 h-16 flex justify-between pr-8 text-white font-semibold gap-5 items-center z-10 ml-60">
      <div className="flex gap-4 ml-8">
        <a href="">
          <IoIosArrowBack className="bg-neutral-800 opacity-80 rounded-full text-4xl p-1 text-neutral-400" />
        </a>
        <a href="">
          <IoIosArrowForward className="bg-neutral-800 opacity-80 rounded-full text-4xl p-1 text-neutral-400" />
        </a>
      </div>
      <div className="flex">
        <a href="/" className="cursor-default">
          <button className="m-2 border-[1px] bold rounded-2xl border-neutral-500 h-8 px-4 text-sm cursor-default hover:bg-black hover:scale-110">
            Faça upgrade
          </button>
        </a>
        <button className="m-2 border-2 rounded-2xl border-black opacity-90 bg-black h-8 text-sm flex items-center justify-between gap-2">
          <HiOutlineUser className="bg-neutral-500 rounded-full text-3xl p-1 " />
          Usuário
          <IoMdArrowDropdown className=" rounded-full text-2xl" />
        </button>
      </div>
    </div>
  );
}
