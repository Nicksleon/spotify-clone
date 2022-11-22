import logo from "../assets/logo.png";

import { AiFillHome } from "react-icons/Ai";
import { BiSearch } from "react-icons/Bi";
import { VscLibrary } from "react-icons/Vsc";
import { MdAddBox } from "react-icons/Md";
import { HiHeart } from "react-icons/Hi";

export function LeftBar() {
  return (
    <div className="bg-black w-60 h-full fixed p-6 pt-6 z-40 ">
      <img src={logo} alt="" className="w-32" />

      <ul className="text-neutral-400 pt-10 font-bold flex flex-col gap-3 text-sm">
        <li className=" text-white hover:text-white transition ease-in-out">
          <a href="/">
            <AiFillHome className="inline text-3xl mr-3" />
            Início
          </a>
        </li>
        <li className="hover:text-white transition ease-in-out">
          <a href="/">
            <BiSearch className="inline text-3xl mr-3" />
            Buscar
          </a>
        </li>
        <li className="mb-2 hover:text-white transition ease-in-out">
          <a href="/">
            <VscLibrary className="inline text-3xl mr-3" />
            Sua Biblioteca
          </a>
        </li>
      </ul>

      <ul className="text-neutral-400 pt-10 border-b-[1px] border-neutral-800 font-bold mb-4 flex flex-col gap-3">
        <li className="hover:text-white transition ease-in-out">
          <a href="/">
            <MdAddBox className="inline text-3xl mr-3" />
            Criar Playlist
          </a>
        </li>
        <li className="mb-2 hover:text-white transition ease-in-out">
          <a href="/">
            <HiHeart className="inline text-3xl mr-3 bg-indigo-600 mb-2" />
            Músicas Curtidas
          </a>
        </li>
      </ul>

      <ul className="text-neutral-400 text-sm flex flex-col gap-1">
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Rap
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Rock
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Funk
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Eletrônica
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Clássica
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Pagode
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Mix de Three Days Grace
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Mix Rap
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Mix de Pantera
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Mix de Neffex
          </a>
        </li>
        <li>
          <a
            href="/"
            className="cursor-default hover:text-white transition ease-in-out"
          >
            Mix Samba
          </a>
        </li>
      </ul>
    </div>
  );
}
