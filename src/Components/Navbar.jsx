import { useState } from "react";
import { RxMinus, RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import {
  FaHome,
  FaUserAlt,
  FaPhone,
  FaQuestion,
  FaTools,
} from "react-icons/fa";
import logo from "/src/assets/icon/DokumenKerjaku.png";

function Navbar() {
  const [active, setActive] = useState({
    document: false,
    menu: false,
  });
  return (
    <>
      <header className="w-full z-10 fixed bg-white shadow-[0_4px_4px_rgba(0,0,0,0.2)]">
        <nav className="flex items-center justify-between px-6 py-2 relative">
          <div className="flex items-center gap-8">
            <a href="/">
              <img src={logo} alt="logo" className="w-[170px]" />
            </a>
            <ul className="uppercase items-center font-semibold text-[13px] flex gap-8 ">
              <li className="hidden md:flex">
                <a href="" className="hover:text-red-custom cursor-pointer">
                  CV ATS Friendly
                </a>
              </li>
              <li className="hidden md:flex">
                <a href="" className="hover:text-red-custom cursor-pointer">
                  Surat Lamaran
                </a>
              </li>
              <li>
                <div
                  className="md:flex hidden items-center hover:text-red-custom cursor-pointer"
                  onClick={() =>
                    setActive({
                      ...active,
                      document: !active.document,
                      menu: false,
                    })
                  }
                >
                  <p className="mr-[1px]">Semua Dokumen</p>
                  {active.document ? <RxTriangleUp /> : <RxTriangleDown />}
                </div>
                <div
                  className={`md:flex-row z-10 flex flex-col absolute md:w-[370px] w-[200px] shadow-md top-[72px] right-0 md:right-auto bg-white md:rounded-md rounded-l-md p-5 gap-8 md:duration-0 duration-300 ${
                    active.document
                      ? "translate-x-0"
                      : "md:hidden translate-x-[200%]"
                  }`}
                >
                  <ul className="md:w-1/2">
                    <li className="text-sm text-gray-500 ml-2 mb-2">
                      <a className="border-b-2">Curriculum Vitae</a>
                    </li>
                    <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <a href="">CV ATS Friendly</a>
                    </li>
                    <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <a href="">CV Kreatif</a>
                    </li>
                  </ul>
                  <ul className="md:w-1/2">
                    <li className="text-sm text-gray-500 ml-2 mb-2">
                      <a className="border-b-2">Dokumen Lain</a>
                    </li>
                    <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <a href="">Surat Lamaran</a>
                    </li>
                    <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer">
                      <a href="">Surat Resign</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <FaTools
              className={`md:hidden  size-6 mr-10 cursor-pointer hover:text-red-custom duration-300 ${
                active.document ? "text-red-custom" : ""
              }`}
              onClick={() =>
                setActive({
                  ...active,
                  document: !active.document,
                  menu: false,
                })
              }
            />
            <div
              className={` mr-3 absolute right-0 size-9 cursor-pointer hover:text-red-custom`}
              onClick={() =>
                setActive({ ...active, menu: !active.menu, document: false })
              }
            >
              <RxMinus
                className={`size-9 absolute  duration-300 ${
                  active.menu ? "rotate-45 top-[0%] scale-125" : "top-[-25%]"
                }`}
              />
              <RxMinus
                className={`size-9 absolute duration-300 ${
                  active.menu ? "opacity-0 translate-x-[-20%]" : ""
                }`}
              />
              <RxMinus
                className={`size-9 absolute duration-300 ${
                  active.menu
                    ? "rotate-[-45deg] top-[-0%] scale-125"
                    : "top-[25%]"
                }`}
              />
            </div>
            <ul
              className={`bg-white flex flex-col absolute top-[72px] right-0 w-[200px] shadow-md p-5 rounded-l-md font-semibold text-sm uppercase duration-300 ${
                active.menu ? "translate-x-0" : "translate-x-[200%]"
              }`}
            >
              <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer flex items-center gap-1">
                <FaHome className="size-3" />
                <a href="">Beranda</a>
              </li>

              <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer flex items-center gap-1">
                <FaPhone className="size-3" />
                <a href="">Hubungi Kami</a>
              </li>
              <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer flex items-center gap-1">
                <FaUserAlt className="size-3" />
                <a href="">Tentang Kami</a>
              </li>
              <li className="p-2 hover:text-red-custom hover:bg-slate-100 hover:rounded-md cursor-pointer flex items-center gap-1">
                <FaQuestion className="size-3" />
                <a href="">Pertanyaan</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
