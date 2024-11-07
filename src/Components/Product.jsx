import { TbFileCv, TbFile, TbFileBroken } from "react-icons/tb";

function Product() {
  return (
    <>
      <div id="product" className="md:scroll-m-28 scroll-m-12">
        <h1 className="text-center md:text-5xl text-3xl font-bold md:pt-0 pt-6 md:mb-10 mb-8">
          Produk dari DokumenKerjaku
        </h1>
        <div className="mx-4 md:mx-auto md:flex-row flex flex-col justify-center items-center md:gap-10 gap-8">
          <div className=" md:w-[360px] md:h-[400px] box-border rounded-md shadow-lg hover:shadow-xl flex flex-col items-center justify-start text-center border border-orange-100 px-7 pt-10 pb-14">
            <TbFileCv className="md:size-[88px] size-[70px] border border-orange-600 text-orange-600 p-3 rounded-full mb-5" />
            <p className="font-bold md:text-xl text-lg mb-3">CV</p>
            <p className="text-base mb-5">
              Buat CV Profesional secara otomatis tanpa perlu bantuan orang
              lain. Pembuatannya mudah, revisinya juga gampang!
            </p>
            <button className="border border-orange-600 font-bold md:text-xl text-lg px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white duration-300">
              <a href="">Buat CV</a>
            </button>
          </div>
          <div className="md:w-[360px] md:h-[400px] box-border rounded-md shadow-lg hover:shadow-xl flex flex-col items-center justify-start text-center border border-orange-100 px-7 pt-10 pb-14">
            <TbFile className="md:size-[88px] size-[70px] size-8 border border-orange-600 text-orange-600 p-3 rounded-full mb-5" />
            <p className="font-bold md:text-xl mb-3 text-lg">Surat Lamaran</p>
            <p className="text-base mb-5">
              Buat Surat Lamaran secara otomatis dengan cara yang sangat mudah
              dan cepat, tanpa perlu repot menulis dari awal!
            </p>
            <button className="border border-orange-600 font-bold md:text-xl px-5 py-2 text-lg rounded-full hover:bg-orange-600 hover:text-white duration-300">
              <a href="">Buat Surat Lamaran</a>
            </button>
          </div>
          <div className="md:w-[360px] md:h-[400px] box-border rounded-md shadow-lg hover:shadow-xl flex flex-col items-center justify-start text-center border border-orange-100 px-7 pt-10 pb-14">
            <TbFileBroken className="md:size-[88px] size-[70px] size-8 border border-orange-600 text-orange-600 p-3 rounded-full mb-5" />
            <p className="font-bold md:text-xl mb-3 text-lg">Surat Resign</p>
            <p className="text-base mb-5">
              Tidak repot memikirkan kata-kata manis. Fokus pada inti pesannya,
              dan biarkan semuanya terselesaikan dengan cepat!
            </p>
            <button className="border border-orange-600 font-bold md:text-xl px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white text-lg duration-300">
              <a href="">Buat Surat Resign</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
