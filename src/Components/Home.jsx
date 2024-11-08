import { RxFilePlus } from "react-icons/rx";
import worker from "/src/assets/icon/Worker.png";

function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col md:flex-row justify-center scroll-m-20"
      >
        <div className=" md:pl-20 pl-3 md:pt-36 pt-[72px]">
          <h1 className="md:text-5xl text-3xl font-bold">
            Buat dokumen pekerjaanmu dengan lebih cepat dan praktis!
          </h1>
          <p className="md:text-xl text-base pt-5 md:pt-10">
            Permudah pekerjaanmu dengan DokumenKerjaku. Buat CV dan dokumen lain
            hanya dengan sekali klik!
          </p>
          <button className=" bg-orange-600 md:mt-5 mt-4 md:py-2 py-1 md:px-5 px-4 rounded-full text-white hover:bg-opacity-95">
            <a href="#product" className="flex items-center">
              <RxFilePlus className=" size-8" />
              <p className="md:text-xl text-base font-bold">
                Buat Dokumen Sekarang
              </p>
            </a>
          </button>
        </div>
        <img
          src={worker}
          alt="worker"
          className="md:size-[600px] size-[500px] md:mt-10"
        />
      </div>
    </>
  );
}

export default Home;
