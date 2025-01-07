import owner from "/src/assets/icon/Owner.jpg";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

function About() {
  return (
    <>
      <div className="pt-20 pb-24 bg-gray-100">
        <h1 className="text-center md:text-[40px] text-[27px] font-bold px-2 mb-5">
          Tentang Kami
        </h1>
        <div className="md:flex-row flex flex-col justify-center md:gap-32 gap-10 md:mx-20 mx-5">
          <div className="md:w-1/2 text-justify">
            <h1 className="md:text-3xl text-xl font-bold mb-4">
              Apa itu DokumenKerjaku?
            </h1>
            <p className="md:text-[20px] text-[16px]">
              <b>DokumenKerjaku</b> adalah platform yang dirancang untuk
              memudahkan pengguna dalam membuat CV (Curriculum Vitae) atau
              Daftar Riwayat Hidup serta berbagai dokumen lainnya dengan cara
              yang cepat, praktis, dan dapat diakses secara online. Pengguna
              hanya perlu mengisi data diri secara lengkap, dan dalam waktu
              singkat, CV atau dokumen lainnya sudah dapat diunduh dalam format
              PDF.
            </p>
            <p className="my-2 md:text-[20px] text-[16px]">
              Platform ini juga menyediakan layanan pembuatan Surat Lamaran
              secara gratis yang dapat digunakan berulang kali, memberikan
              kemudahan bagi para pencari kerja. Selain itu, di{" "}
              <b>DokumenKerjaku</b>, kamu dapat dengan mudah mengedit data-data
              dalam CV atau dokumen lain kapan saja dan di mana saja sesuai
              dengan kebutuhan dan preferensimu.
            </p>
            <p className="md:text-[20px] text-[16px]">
              Dengan <b>DokumenKerjaku</b>, kamu bisa membuat CV dan dokumen
              lain tanpa memerlukan keahlian desain, perangkat lunak pengeditan,
              atau aplikasi office lainnya. Cukup dalam waktu 5 hingga 15 menit,
              CV dan dokumen yang kamu buat sudah siap diunduh dan dapat
              langsung digunakan untuk keperluan kerja.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="md:text-3xl text-xl font-bold mb-6">
              Pengembang DokumenKerjaku
            </h1>
            <img
              src={owner}
              alt="owner"
              className="size-44 border-2 border-red-custom rounded-full cursor-pointer hover:border-4 duration-150"
            />
            <p className="md:text-[20px] text-[16px] font-bold mt-3 mb-2">
              Rifqi Muhammad
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/_rifqim/">
                <RxInstagramLogo className="text-3xl cursor-pointer hover:text-red-custom duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rifqim/">
                <RxLinkedinLogo className="text-3xl cursor-pointer hover:text-red-custom duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
