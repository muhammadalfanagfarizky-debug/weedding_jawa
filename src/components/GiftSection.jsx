import bgProfile from "../assets/images/bg-texture.png";
import { useState } from "react";


export default function GiftSection() {
    const [form, setForm] = useState({
        name: "",
        accountName: "",
        message: "",
        amount: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-165 overflow-hidden">
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-15.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[25px] text-[#694653]">
                        Wedding Gift
                    </h2>
                    <p className="mt-5 px-8 text-[10px] leading-6 text-[#6c5a55]">
                        Doa restu dan kehadiran Anda di acara pernikahan Kami sudah cukup bagi
                    </p>
                    <p className="mt-5 px-8 text-[10px] leading-2 text-[#6c5a55]">
                        Kami. Namun jika Anda ingin memberikan kado Kami menyediakan Amplop
                    </p>
                    <p className="mt-5 px-8 text-[10px] leading-5 text-[#6c5a55]">
                        Digital yang dapat Anda transfer ke rekening berikut ini.
                    </p>
                </div>
                
                <div className="flex min-h-screen items-center justify-center  px-4">
                    <div className="w-75 overflow-hidden rounded-md bg-white shadow-sm">

                        <div className="px-7 pt-4 pb-6">

                            <h2 className="text-center text-[14px] font-semibold text-[#8d6a74]">
                                Pilih bank tujuan
                            </h2>

                            <div className="flex justify-center">
                                <select className="mt-3 h-5 w-60 rounded-md border border-[#b89198] indent-3 text-left text-[10px] font-semibold text-[#8d6a74]">
                                    <option>BANK BCA</option>
                                </select>
                            </div>

                            <div className="mt-4 text-center text-[#8d6a74]">
                                <p className="text-[13px] font-semibold">
                                    BANK BRI (002)
                                </p>

                                <p className="mt-1 text-[12px]">
                                    Nomor Rekening :
                                    <span className="font-semibold">
                                        {" "}
                                        Nomor telepon
                                    </span>{" "}
                                    0212345678262
                                </p>

                                <p className="mt-1 text-[12px]">
                                    Nama pengguna <span className="font-semibold">Sarah</span>
                                </p>
                            </div>

                            <p className="mt-6 text-center text-[13px] font-semibold text-[#8d6a74]">
                                Isi formulir dibawah ini, silakan
                            </p>

                            <div className="mt-5 space-y-3">
                                <div className="flex justify-center gap-5">
                                    <div className="mx-auto w-55">

                                        <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                            Nama
                                        </label>

                                        <input
                                            type="text"
                                            name="nama"
                                            onChange={handleChange}
                                            className="h-5 w-full rounded-md border border-[#b89198] px-3 text-sm outline-none"
                                        />

                                    </div>
                                </div>

                                <div className="flex top-1 justify-center gap-5">
                                    <div className="mx-auto w-55">

                                        <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                            Nama pemilik akun:
                                        </label>

                                        <input
                                            type="text"
                                            name="pemilik"
                                            onChange={handleChange}
                                            className="h-5 w-full rounded-md border border-[#b89198] px-3 text-sm outline-none"
                                        />

                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div className="mx-auto w-55">

                                        <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                            Pesan
                                        </label>

                                        <input
                                            type="text"
                                            name="pesan"
                                            onChange={handleChange}
                                            className="h-5 w-full rounded-md border border-[#b89198] px-3 text-sm outline-none"
                                        />

                                    </div>
                                </div>

                                <div className="flex justify-center gap-5">
                                    <div className="mx-auto w-55">

                                        <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                            Jumlah
                                        </label>

                                        <input
                                            type="text"
                                            name="jumlah"
                                            onChange={handleChange}
                                            className="h-5 w-full rounded-md border border-[#b89198] px-3 text-sm outline-none"
                                        />

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Footer */}
                        <button className="h-8 w-full bg-[#F1DDC8] text-[14px] font-semibold text-[#8d6a74] hover:bg-[#ecd4ba]">
                            Berikutnya ❯
                        </button>

                    </div>
                </div>

            </div>
        </section >
    )
}