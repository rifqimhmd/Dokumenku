import jsPDF from "jspdf";

import { useRef, useState } from "react";
import {
  RxPerson,
  RxCaretDown,
  RxBackpack,
  RxFileText,
  RxCrossCircled,
  RxEyeOpen,
  RxArrowDown,
  RxEyeNone,
} from "react-icons/rx";
import { SlInfo } from "react-icons/sl";
import { FaPlusSquare } from "react-icons/fa";
import { TbFile } from "react-icons/tb";

function CoverLetter() {
  const canvas = useRef();
  const [value, setValue] = useState({
    locdate: "Tempat, Tanggal",
    file: [],
    personal: true,
    workpos: true,
    attachment: true,
    infoletter: true,
  });
  const [text, setText] = useState("");
  const [viewActive, setViewActive] = useState(false);

  const addFile = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      file: [
        ...value.file,
        {
          id: value.file.length + 1,
          name: text,
        },
      ],
    });
    setText("");
  };
  const deleteFile = (id) => {
    setValue({
      ...value,
      file: value.file.filter((file) => file.id !== id),
    });
  };

  const downloadPDF = () => {
    const input = canvas.current;
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(input, {
      callback: function (doc) {
        doc.save("Surat Lamaran by DokumenKerjaku.pdf");
      },
      margin: [65, 75, 65, 75],
    });
  };
  return (
    <>
      <div className=" md:pt-28 pt-[72px] pb-8">
        <div
          className={`flex items-center md:text-3xl text-2xl font-bold md:pl-20 pl-2 mb-5 md:opacity-100 duration-300 ${
            viewActive ? "opacity-0" : "opacity-100"
          }`}
        >
          <TbFile className="md:size-10 size-8" />
          <h1>Surat Lamaran</h1>
          <RxEyeOpen
            className="md:hidden mx-2 size-8 bg-orange-600 text-base p-1 rounded-full text-white hover:bg-opacity-90 hover:scale-105 duration-300 cursor-pointer"
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
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-orange-600 cursor-pointer mb-4 duration-300 ${
                value.personal ? "bg-orange-100" : "bg-orange-600"
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
                  className={`size-6 duration-300 text-orange-600 ${
                    !value.personal && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-orange-600 ${
                    !value.personal && " text-white"
                  }`}
                >
                  Data Diri
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-orange-600 ${
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
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                />
              </label>
              <div className="flex gap-5">
                <label htmlFor="placedatebirth" className="w-1/2">
                  Tempat, Tanggal Lahir
                  <input
                    type="text"
                    value={value.placedatebirth}
                    onChange={(e) =>
                      setValue({ ...value, placedatebirth: e.target.value })
                    }
                    required
                    maxLength={55}
                    placeholder="Ex: Jakarta, 10 Agustus 2024"
                    className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                  />
                </label>
                <label htmlFor="gender" className="w-1/2">
                  Jenis Kelamin
                  <select
                    value={value.gender}
                    onChange={(e) =>
                      setValue({ ...value, gender: e.target.value })
                    }
                    className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </label>
              </div>
              <label htmlFor="education">
                Pendidikan Terakhir
                <input
                  type="text"
                  value={value.education}
                  onChange={(e) =>
                    setValue({ ...value, education: e.target.value })
                  }
                  required
                  maxLength={55}
                  placeholder="Ex: S1 - Teknik Informatika"
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
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
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                />
              </label>
              <div className="flex gap-5">
                <label htmlFor="phone" className="w-1/2">
                  Telepon
                  <input
                    type="number"
                    value={value.phone}
                    onChange={(e) =>
                      setValue({ ...value, phone: e.target.value })
                    }
                    required
                    maxLength={15}
                    placeholder="Ex: 08xxxxxxx"
                    className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                  />
                </label>
                <label htmlFor="email" className="w-1/2">
                  Email
                  <input
                    type="email"
                    value={value.email}
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                    required
                    maxLength={55}
                    placeholder="Ex: rifqimuh390@gmail.com"
                    className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                  />
                </label>
              </div>
            </div>
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-orange-600 cursor-pointer mb-4 duration-300 ${
                value.workpos ? "bg-orange-100" : "bg-orange-600"
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
                  className={`size-6 duration-300 text-orange-600 ${
                    !value.workpos && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-orange-600 ${
                    !value.workpos && " text-white"
                  }`}
                >
                  Posisi Pekerjaan
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-orange-600 ${
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
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                />
              </label>
            </div>
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-orange-600 cursor-pointer mb-4 duration-300 ${
                value.attachment ? "bg-orange-100" : "bg-orange-600"
              }`}
              onClick={() =>
                setValue({
                  ...value,
                  attachment: !value.attachment,
                  workpos: true,
                  personal: true,
                  infoletter: true,
                })
              }
            >
              <div className="flex items-center">
                <RxFileText
                  className={`size-6 duration-300 text-orange-600 ${
                    !value.attachment && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-orange-600 ${
                    !value.attachment && " text-white"
                  }`}
                >
                  Lampiran Berkas
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-orange-600 ${
                  !value.attachment && "rotate-180 text-white"
                }`}
              />
            </div>
            <form
              onSubmit={addFile}
              className={`mx-3 duration-300 relative ${
                value.attachment
                  ? "max-h-0 z-[-1] opacity-0 mb-0"
                  : "max-h-full mb-3"
              }`}
            >
              <p>Lampiran Berkas</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Ex: CV"
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                />
                <FaPlusSquare
                  className="text-orange-500 cursor-pointer size-[46px] hover:text-orange-600"
                  onClick={addFile}
                />
              </div>
            </form>
            <ul
              className={`mx-3 p-2 border border-orange-600 rounded-md mb-5 ${
                value.file.length === 0 && "hidden"
              } ${value.attachment && "hidden"}`}
            >
              {value.file.map((file) => (
                <li
                  key={file.id}
                  className="flex justify-between items-center hover:font-bold transition duration-300"
                >
                  {file.id}. {file.name}
                  <RxCrossCircled
                    className="text-orange-500 cursor-pointer size-5 hover:text-orange-600"
                    onClick={() => deleteFile(file.id)}
                  />
                </li>
              ))}
            </ul>
            <div
              className={`flex items-center justify-between border rounded-md py-1 px-2 border-orange-600 cursor-pointer mb-4 duration-300 ${
                value.infoletter ? "bg-orange-100" : "bg-orange-600"
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
                  className={`size-6 duration-300 text-orange-600 ${
                    !value.infoletter && " text-white"
                  }`}
                />
                <p
                  className={`text-lg ml-1 duration-300 font-bold text-orange-600 ${
                    !value.infoletter && " text-white"
                  }`}
                >
                  Informasi Surat
                </p>
              </div>
              <RxCaretDown
                className={`size-10 duration-300 text-orange-600 ${
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
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
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
                  className="w-full bg-orange-100 p-2 my-2 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-200"
                />
              </label>
            </div>
          </div>
          <div
            className={`absolute top-20 md:top-auto md:static md:py-16 md:px-16  md:border md:border-black md:duration-0 px-3 duration-500 ${
              !viewActive && "-translate-x-[150%] md:translate-x-0"
            }`}
          >
            <RxEyeNone
              className="md:hidden size-8 ml-10 bg-orange-600 text-base p-1 rounded-full text-white hover:bg-opacity-90 hover:scale-105  duration-300 cursor-pointer"
              onClick={() => setViewActive(false)}
            />
            <div ref={canvas} className="text-justify text-[12px] font-tinos">
              <div className={`w-[27.8rem] ${!viewActive ? "px-0" : "px-10"}`}>
                <p className="text-right pb-2">{value.locdate}</p>
                <p>Kepada Yth.</p>
                <p>HRD {value.company}</p>
                <p>Di tempat</p>
                <p className="py-2">Dengan hormat,</p>
                <p className="indent-8">
                  Sehubungan dengan informasi yang saya peroleh dari perusahaan
                  Bapak/Ibu sedang membuka lowongan pekerjaan, maka saya yang
                  bertanda tangan dibawah ini:
                </p>
                <table className="my-1">
                  <tbody>
                    <tr>
                      <td>Nama</td>
                      <td className="pl-2">:</td>
                      <td>{value.name}</td>
                    </tr>
                    <tr>
                      <td>Tempat, Tanggal Lahir</td>
                      <td className="pl-2">:</td>
                      <td>{value.placedatebirth}</td>
                    </tr>
                    <tr>
                      <td>Jenis Kelamin</td>
                      <td className="pl-2">:</td>
                      <td>{value.gender}</td>
                    </tr>
                    <tr>
                      <td>Pendidikan Terakhir</td>
                      <td className="pl-2">:</td>
                      <td>{value.education}</td>
                    </tr>
                    <tr>
                      <td>Alamat</td>
                      <td className="pl-2">:</td>
                      <td>{value.address}</td>
                    </tr>
                    <tr>
                      <td>Telepon</td>
                      <td className="pl-2">:</td>
                      <td>{value.phone}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td className="pl-2">:</td>
                      <td>{value.email}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="pb-2 indent-8">
                  Dengan ini saya mengajukan permohonan kepada Bapak/Ibu,
                  kiranya dapat menerima saya sebagai karyawan pada posisi{" "}
                  {value.position} di perusahaan Bapak/Ibu.
                </p>
                <p className="indent-8">
                  Bersama ini saya lampirkan dokumen persyaratan sebagai
                  berikut:
                </p>
                <ul className="pb-2 indent-8">
                  {value.file.map((item) => (
                    <li key={item.id}>
                      {item.id}. {item.name}
                    </li>
                  ))}
                </ul>
                <p className="indent-8">
                  Demikian surat permohonan ini saya sampaikan, atas perhatian
                  dan kerjasama Bapak/Ibu saya ucapkan terima kasih.
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

export default CoverLetter;
