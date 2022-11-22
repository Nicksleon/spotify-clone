import { BsPlayCircleFill } from "react-icons/Bs";
import { HomeProps } from "../App";

export function MixesCard({ img, color, title, text }: HomeProps) {
  return (
    <a href="/">
      <div className="text-white font-semibold bg-neutral-900 text-base rounded w-44 max-h-64 h-64 p-4 flex flex-col hover:bg-neutral-400 hover:bg-opacity-20 transition ease-linear group relative">
        <img
          src={img}
          alt=""
          className={`object-cover max-h-36 h-36 border-b-4 ${color}  rounded mb-2 shadow-md shadow-black`}
        />
        <p
          className={`absolute left-4 bottom-24 mb-2 pl-2 text-sm border-l-8 ${color} border-ye text-bold`}
        >
          {title}
        </p>
        <BsPlayCircleFill className="text-green-500 absolute text-5xl bg-black right-5 bottom-24 opacity-0 rounded-full transition-all group-hover:opacity-100 group-hover:bottom-[102px] duration-300" />
        <img
          src="./img/spotify-mixes.png"
          alt=""
          className="absolute h-3 mt-1 ml-1"
        />

        <p className="mb-2">{title}</p>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </a>
  );
}
