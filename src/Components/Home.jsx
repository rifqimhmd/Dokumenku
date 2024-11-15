import { Data } from "../Data/Data.jsx";

function Home() {
  return (
    <>
      <div className="pt-20 bg-gray-100">
        <section className="mb-10">
          <h1 className="text-center md:text-[40px] text-[27px] font-bold px-2">
            Semua dokumen yang dibutuhkan ada di satu tempat
          </h1>
          <p className="text-center md:text-[20px] text-[16px] md:w-[72%] mx-auto w-[95%] px-5">
            Semua dokumen yang dibutuhkan untuk pekerjaan dan administrasi
            tersedia di sini 100% GRATIS. Anda dapat membuat dokumen penting
            seperti CV, Surat Lamaran, Surat Izin Cuti, dan lainnya.
          </p>
        </section>
        <section className="gap-1 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-5 md:px-9 pb-12">
          {Data.map((item) => (
            <a
              href={item.link}
              key={item.id}
              className="sm:aspect-[1/1] md:p-8 p-3 box-border rounded-md bg-white shadow-md hover:bg-slate-50 group relative"
            >
              <section className="flex sm:flex-col flex-row sm:items-start items-center gap-2 sm:gap-4 md:text-[20px] text-[16px] font-bold">
                <img
                  src={item.image}
                  className="rounded-md md:size-10 size-8 group-hover:scale-110"
                />
                <h1>{item.title}</h1>
              </section>
              <p className="mt-3 md:text-[14px] text-[12px] text-gray-500 group-hover:text-gray-600">
                {item.desc}
              </p>
              <p className="absolute md:text-[12px] text-[10px] font-bold text-red-custom md:top-3 top-2 right-2 md:right-3 px-3 py-1 border border-red-custom rounded-md">
                {item.status}
              </p>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
