import jsPDF from "jspdf";

import { useRef, useState } from "react";
import {
  RxPerson,
  RxCaretDown,
  RxBackpack,
  RxEyeOpen,
  RxArrowDown,
  RxEyeNone,
} from "react-icons/rx";
import { SlInfo } from "react-icons/sl";
import { TbFile } from "react-icons/tb";

function ResignLetter() {
  const canvas = useRef();
  const [value, setValue] = useState({
    locdate: "Tempat, Tanggal",
    file: [],
    personal: true,
    workpos: true,
    attachment: true,
    infoletter: true,
  });
  const [viewActive, setViewActive] = useState(false);

  const downloadPDF = () => {
    const input = canvas.current;
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(input, {
      callback: function (doc) {
        doc.save("Surat Resign by DokumenKerjaku.pdf");
      },
      margin: [65, 75, 65, 75],
    });
  };
  return (
    <>
      <div className="pt-20 pb-28 min-h-[100vh]">
        <div
          className={`flex items-center md:text-3xl text-2xl font-bold md:pl-20 pl-2 mb-5 md:opacity-100 duration-300 ${
            viewActive ? "opacity-0" : "opacity-100"
          }`}
        >
          <TbFile className="md:size-10 size-8" />
          <h1>Surat Resign</h1>
          <RxEyeOpen
            className="md:hidden mx-2 size-8 bg-red-custom text-base p-1 rounded-full text-white hover:bg-opacity-90 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => setViewActive(!viewActive)}
          />
          <RxArrowDown
            className="size-8 md:ml-2 bg-blue-600 text-base p-1 rounded-full text-white hover:bg-opacity-90 hover:scale-105  duration-300 cursor-pointer "
            onClick={downloadPDF}
          />
        </div>
        <div className="flex justify-center md:gap-10 md:mx-20 mx-4 ">
          <div
            className={`md:opacity-100 duration-300 ${
              viewActive ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-red-custom cursor-pointer mb-4 duration-300 ${
                value.personal ? "bg-red-100" : "bg-red-custom"
              }`}
              onClick={() =>
                setValue({
                  ...value,
                  personal: !value.personal,
                  workpos: true,
                  attachment: true,
                  infoletter: true,
                })
              }
            >
              <div className="flex items-center">
                <RxPerson
                  className={`size-6 duration-300 text-red-custom ${
                    !value.personal && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-red-custom ${
                    !value.personal && " text-white"
                  }`}
                >
                  Data Diri
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-red-custom ${
                  !value.personal && "rotate-180 text-white"
                }`}
              />
            </div>
            <div
              className={`mx-3 duration-300 relative ${
                value.personal ? "max-h-0 z-[-1] opacity-0" : "max-h-full mb-3"
              } `}
            >
              <label htmlFor="name">
                Nama Lengkap
                <input
                  type="text"
                  value={value.name}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  required
                  maxLength={55}
                  placeholder="Ex: Rifqi Muhammad"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
              <label htmlFor="ktp">
                No KTP
                <input
                  type="text"
                  value={value.ktp}
                  onChange={(e) => setValue({ ...value, ktp: e.target.value })}
                  required
                  maxLength={55}
                  placeholder="Ex: 1671xxxxxx"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
              <label htmlFor="address">
                Alamat
                <input
                  type="text"
                  value={value.address}
                  onChange={(e) =>
                    setValue({ ...value, address: e.target.value })
                  }
                  required
                  maxLength={55}
                  placeholder="Ex: Jl. Pencari Kerja, Depok"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
            </div>
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-red-custom cursor-pointer mb-4 duration-300 ${
                value.workpos ? "bg-red-100" : "bg-red-custom"
              }`}
              onClick={() =>
                setValue({
                  ...value,
                  workpos: !value.workpos,
                  personal: true,
                  attachment: true,
                  infoletter: true,
                })
              }
            >
              <div className="flex items-center">
                <RxBackpack
                  className={`size-6 duration-300 text-red-custom ${
                    !value.workpos && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-red-custom ${
                    !value.workpos && " text-white"
                  }`}
                >
                  Posisi Pekerjaan
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-red-custom ${
                  !value.workpos && "rotate-180 text-white"
                }`}
              />
            </div>
            <div
              className={`mx-3 duration-300 relative ${
                value.workpos ? "max-h-0 z-[-1] opacity-0" : "max-h-full mb-3"
              } `}
            >
              <label htmlFor="position">
                Posisi Pekerjaan
                <input
                  type="text"
                  value={value.position}
                  onChange={(e) =>
                    setValue({ ...value, position: e.target.value })
                  }
                  required
                  placeholder="Ex: IT Staff"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
            </div>
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-red-custom cursor-pointer mb-4 duration-300 ${
                value.infoletter ? "bg-red-100" : "bg-red-custom"
              }`}
              onClick={() =>
                setValue({
                  ...value,
                  infoletter: !value.infoletter,
                  workpos: true,
                  attachment: true,
                  personal: true,
                })
              }
            >
              <div className="flex items-center">
                <SlInfo
                  className={`size-6 duration-300 text-red-custom ${
                    !value.infoletter && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-red-custom ${
                    !value.infoletter && " text-white"
                  }`}
                >
                  Informasi Surat
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-red-custom ${
                  !value.infoletter && "rotate-180 text-white"
                }`}
              />
            </div>
            <div
              className={`mx-3 duration-300 relative ${
                value.infoletter ? "max-h-0 z-[-1] opacity-0" : "max-h-full"
              } `}
            >
              <label htmlFor="company">
                Penerima Surat
                <input
                  type="text"
                  value={value.company}
                  onChange={(e) =>
                    setValue({ ...value, company: e.target.value })
                  }
                  required
                  placeholder="Ex: PT. DokumenKerjaku"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
              <label htmlFor="locdate">
                Lokasi Tanggal
                <input
                  type="text"
                  onChange={(e) =>
                    setValue({ ...value, locdate: e.target.value })
                  }
                  required
                  placeholder="Ex: Jakarta, 10 Agustus 2024"
                  className="w-full bg-red-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-200"
                />
              </label>
            </div>
          </div>
          <div
            className={`absolute top-[72px] md:top-auto md:static md:py-16 md:px-16  md:border md:border-black md:duration-0 px-3 duration-500 ${
              !viewActive && "-translate-x-[150%] md:translate-x-0"
            }`}
          >
            <RxEyeNone
              className="md:hidden size-8 bg-red-custom text-base p-1 rounded-full text-white hover:bg-opacity-90 hover:scale-105  duration-300 cursor-pointer"
              onClick={() => setViewActive(false)}
            />
            <div ref={canvas} className="text-justify text-[12px] font-tinos">
              <div className={` ${!viewActive ? "w-[27.8rem]" : "w-auto"}`}>
                <p className="text-right pb-2">{value.locdate}</p>
                <p>Kepada Yth.</p>
                <p>HRD {value.company}</p>
                <p>Di tempat</p>
                <p className="py-2">
                  Perihal: <b>Pengunduran Diri</b>
                </p>
                <p>Dengan hormat,</p>
                <p>Saya yang bertanda tangga di baawah ini:</p>
                <table className="my-1 indent-10">
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td>: {value.name}</td>
                    </tr>
                    <tr>
                      <td>No KTP</td>
                      <td>: {value.ktp}</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td>: {value.address}</td>
                    </tr>
                    <tr>
                      <td>Jabatan</td>
                      <td>: {value.position}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="indent-8">
                  Dengan ini mengajukan pengunduran diri sebagai{" "}
                  {value.position} di {value.company}. Pengunduran diri ini saya
                  ajukan terhitung sejak tanggal {value.date}.
                </p>
                <p className="py-2">
                  Saya mengucapkan terima kasih atas kesempatan, pengalaman, dan
                  ilmu yang telah saya peroleh selama bekerja di {value.company}
                  . Saya juga memohon maaf apabila selama bekerja terdapat
                  kesalahan atau kekurangan yang kurang berkenan di hati rekan
                  kerja maupun pimpinan. Saya berkomitmen untuk tetap
                  menjalankan tugas dan tanggung jawab saya dengan profesional
                  hingga masa akhir kerja, serta bersedia membantu proses
                  transisi apabila diperlukan.
                </p>
                <p>
                  Demikian surat ini saya buat dengan sebenar-benarnya. Atas
                  perhatian dan pengertiannya, saya ucapkan terima kasih.
                </p>
                <div className="flex justify-end mr-10 mt-5">
                  <div className="text-center">
                    <p className="pb-10">Hormat Saya,</p>
                    <p>({value.name})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResignLetter;
