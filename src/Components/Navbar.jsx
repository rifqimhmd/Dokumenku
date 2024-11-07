import { RxMinus } from "react-icons/rx";
import { useEffect, useState } from "react";
import logo from "/src/assets/icon/DokumenKerjaku.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 w-full bg-orange-600 ${
          scroll ? "shadow-md" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between text-white md:w-[90%] mx-auto p-2 duration-500 ${
            scroll ? "md:p-3" : "md:p-4"
          }`}
        >
          <a href="/">
            <img src={logo} alt="logo" className="md:w-[180px] w-[150px]" />
          </a>
          <ul
            className={`md:overflow-x-visible overflow-x-hidden md:static absolute sm:text-xl text-lg flex flex-col md:flex-row md:gap-20 md:top-auto md:left-auto left-0 top-[58px] md:top-auto bg-orange-600 w-full md:w-auto  h-[100dvh] md:h-auto md:duration-0 duration-500 ${
              !navActive && "translate-x-full md:translate-x-0"
            }`}
          >
            <li className="md:p-0 p-2 md:border-none border-y border-orange-100 hover:bg-white md:hover:bg-transparent hover:text-orange-600 md:hover:text-white duration-300 cursor-pointer">
              <a
                href="#home"
                className="md:hover:border-b-2 md:hover:border-white"
                onClick={() => setNavActive(false)}
              >
                Beranda
              </a>
            </li>
            <li className="md:p-0 p-2 md:border-none border-b border-orange-100 hover:bg-white md:hover:bg-transparent hover:text-orange-600 md:hover:text-white duration-300 cursor-pointer">
              <a
                href=""
                className="md:hover:border-b-2 md:hover:border-white"
                onClick={() => setNavActive(false)}
              >
                Donasi
              </a>
            </li>
            <li className="md:p-0 p-2 md:border-none border-b border-orange-100 hover:bg-white md:hover:bg-transparent hover:text-orange-600 md:hover:text-white duration-300 cursor-pointer">
              <a
                href="#product"
                className="md:hover:border-b-2 md:hover:border-white"
                onClick={() => setNavActive(false)}
              >
                Produk
              </a>
            </li>
            <li className="md:p-0 p-2 md:border-none border-b border-orange-100 hover:bg-white md:hover:bg-transparent hover:text-orange-600 md:hover:text-white duration-300 cursor-pointer">
              <a
                href=""
                className="md:hover:border-b-2 md:hover:border-white"
                onClick={() => setNavActive(false)}
              >
                Tentang Kami
              </a>
            </li>
          </ul>
          <div
            className={`md:hidden mr-2 absolute right-0 size-9 cursor-pointer text-custom-pink hover:scale-105 duration-300`}
            onClick={() => setNavActive(!navActive)}
          >
            <RxMinus
              className={`size-9 absolute  duration-300 ${
                navActive ? "rotate-45 top-[0%] scale-125" : "top-[-25%]"
              }`}
            />
            <RxMinus
              className={`size-9 absolute duration-300 ${
                navActive ? "opacity-0 translate-x-[-20%]" : ""
              }`}
            />
            <RxMinus
              className={`size-9 absolute duration-300 ${
                navActive ? "rotate-[-45deg] top-[-0%] scale-125" : "top-[25%]"
              }`}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
