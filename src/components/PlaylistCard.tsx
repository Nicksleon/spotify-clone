import { HomeProps } from "../App";

import { BsPlayCircleFill } from "react-icons/Bs";

export function PlaylistCard({ img, text }: HomeProps) {
  return (
    <a href="/">
      <div className="text-white font-semibold bg-neutral-700 bg-opacity-50 text-lg rounded h-20 flex hover:bg-neutral-400 hover:bg-opacity-30 transition ease-linear relative group min-w-max">
        <img src={img} alt="" className="w-auto h-20" />
        <p className="w-9/12 pl-4 pt-6">{text} </p>
        <BsPlayCircleFill className="text-green-500 absolute bottom-4 right-3 text-5xl bg-black opacity-0 group-hover:opacity-100 transition ease-linear shadow-md shadow-neutral-800 rounded-full" />
      </div>
    </a>
  );
}
