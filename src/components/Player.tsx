import { IoMdPlayCircle } from "react-icons/Io";
import { CgPlayTrackPrev } from "react-icons/Cg";
import { CgPlayTrackNext } from "react-icons/Cg";
import { BiRepeat } from "react-icons/Bi";
import { FaRandom } from "react-icons/Fa";
import { TbMicrophone2 } from "react-icons/Tb";
import { MdQueueMusic } from "react-icons/Md";
import { TbDevices2 } from "react-icons/Tb";
import { AiOutlineSound } from "react-icons/Ai";
import { HiHeart } from "react-icons/Hi";
import { IoIosRemoveCircleOutline } from "react-icons/Io";
import { CgInpicture } from "react-icons/Cg";

export function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-22 bg-neutral-900 border-t-[1px] border-neutral-800 flex justify-between ">
      <div className="flex p-4 ">
        <img className="h-14" src="./img/cone-crew.jpg" alt="" />
        <div className="text-white flex flex-col justify-center ml-3 ">
          <p className="hover:underline">Riot</p>
          <p className="text-xs text-neutral-400 hover:text-white hover:underline">
            Three Days Grace
          </p>
        </div>
        <div className="flex items-center ml-3">
          <HiHeart className="text-green-500 text-xl rounded-full ml-3" />
          <IoIosRemoveCircleOutline className="text-neutral-400 text-xl rounded-full ml-3 hover:text-white" />
          <CgInpicture className="text-neutral-400 text-xl rounded-full ml-3 hover:text-white" />
        </div>
      </div>
      <div>
        <div className="flex mt-3 gap-4 justify-center ">
          <button className="text-neutral-400 text-xl rounded-full cursor-default hover:text-white">
            <FaRandom />
          </button>
          <button className="text-neutral-400 text-3xl rounded-full cursor-default hover:text-white">
            <CgPlayTrackPrev />
          </button>
          <button className="text-white text-4xl rounded-full cursor-default hover:scale-110">
            <IoMdPlayCircle />
          </button>
          <button className="text-neutral-400 text-3xl rounded-full cursor-default hover:text-white">
            <CgPlayTrackNext />
          </button>
          <button className="text-neutral-400 text-xl rounded-full cursor-default hover:text-white">
            <BiRepeat />
          </button>
        </div>
        <div className="text-neutral-400 text-sm flex items-center">
          0:00
          <input
            className="w-704 h-1 mx-2 hover:bg-green-500 rounded black accent-white cursor-default text-sm appearance-none"
            type="range"
            min="0"
            max="100"
            value="100"
          />
          0:00
        </div>
      </div>
      <div className="flex items-center">
        <TbMicrophone2 className="text-neutral-400 text-xl rounded-full mr-3 hover:text-white" />
        <MdQueueMusic className="text-neutral-400 text-xl rounded-full mr-3 hover:text-white" />
        <TbDevices2 className="text-neutral-400 text-xl rounded-full mr-3 hover:text-white" />
        <AiOutlineSound className="text-neutral-400 text-xl rounded-full hover:text-white" />
        <input
          className="w-24 h-1 mx-2 appearance-none bg-white hover:bg-green-500 cursor-pointer rounded accent-white text-sm"
          type="range"
          min="0"
          max="100"
          value="100"
        />
      </div>
    </div>
  );
}
