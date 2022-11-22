import { BsPlayCircleFill } from "react-icons/Bs";

import { HomeProps } from "../App";

export function RecentCard({ img, title, text }: HomeProps) {
  return (
    <a href="/">
      <div className="text-white font-semibold bg-neutral-900 text-lg rounded w-44 max-h-64 h-64 p-4 flex flex-col hover:bg-neutral-400 hover:bg-opacity-20 transition ease-linear group relative">
        <img
          src={img}
          alt=""
          className=" object-cover max-h-36 h-36 w-auto rounded-full mb-2 shadow-md shadow-black"
        />
        <BsPlayCircleFill className="text-green-500 absolute text-5xl shadow-lg shadow-black bg-black right-5 bottom-24 opacity-0 rounded-full transition-all group-hover:opacity-100 group-hover:bottom-[102px] duration-300" />
        <p className="mb-1">{title}</p>
        <p className="text-gray-400 text-sm">{text}</p>
      </div>
    </a>
  );
}
