import bgProfile from "../assets/images/bg-texture.png";
import { Copy } from "lucide-react";

import bed from "../assets/images/bed.png";
import cermin from "../assets/images/cermin.png";


export default function SendgiftSection() {

    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-120 overflow-hidden">

                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative top-5.5 z-40 pt-5 text-center">

                    <h2 className="font-[Satisfy] text-[25px] text-[#694653]">
                        Send us a gift
                    </h2>

                    <p className="mt-5 px-8 text-[10px] leading-5 text-[#6c5a55]">
                        Silahkan kirimkan hadiah kepada kedua mempelai
                    </p>
                </div>


                <div className="relative top-5.5 z-40 mx-auto mt-6 w-full max-w-100 translate-x-3">

                    <h2 className="mb-2 text-[12px] font-semibold text-[#8d6a74]">
                        Alamat Pengiriman Kado
                    </h2>

                    <div className="relative w-full rounded-lg bg-[#F1DEC8] py-3 text-[#8d6a74]">

                        <div className="relative left-3">

                            <p className="text-[10px]">
                                Nama Penerima
                            </p>

                            <p className="text-[12px] font-semibold">
                                Kimati
                            </p>

                            <p className="mt-2 text-[10px]">
                                Nomor Handphone
                            </p>

                            <p className="text-[12px] font-semibold">
                                08215426320
                            </p>

                            <p className="mt-2 text-[10px]">
                                Alamat Pengiriman:
                            </p>

                            <p className="text-[12px] font-semibold">
                                Jl. kenari
                            </p>

                        </div>

                        <button
                            onClick={() => navigator.clipboard.writeText("08215426320")}
                            className="absolute top-4.5  right-3 bottom-4"
                        >
                            <Copy
                                size={13}
                                className="text-[#9d7c86]"
                            />
                        </button>

                    </div>

                    <div className="mt-3 mb-2 flex items-center justify-between">

                        <h2 className="text-[12px] font-semibold text-[#8d6a74]">
                            Daftar Rekomendasi Kado
                        </h2>

                        <span className="text-sm text-[#8d6a74]">
                            ︿
                        </span>

                    </div>

                    <div className="relative flex h-23 overflow-hidden rounded-lg bg-[#F1DEC8]">

                        <img
                            src={bed}
                            alt=""
                            className="h-full w-[46%] object-cover"
                        />

                        <div className="flex flex-1 flex-col justify-center px-2 text-[#8d6a74]">

                            <h3 className="text-[12px] font-semibold">
                                Bed Cover
                            </h3>

                            <p className="text-[11px]">
                                Rp 500.000
                            </p>

                            <p className="text-[11px]">
                                Jumlah: 2
                            </p>

                            <button className="mt-1 w-fit border-b border-[#8d6a74] text-[10px]">
                                Lihat Hadiah
                            </button>

                        </div>

                    </div>

                    <div className="relative top-1.5 mt-4 flex h-23 overflow-hidden rounded-lg bg-[#F1DEC8]">

                        <img
                            src={cermin}
                            alt=""
                            className="h-full w-[46%] object-cover"
                        />

                        <div className="flex flex-1 flex-col justify-center px-2 text-[#8d6a74]">

                            <h3 className="text-[12px] font-semibold">
                                Cermin
                            </h3>

                            <p className="text-[11px]">
                                Rp 200.000
                            </p>

                            <p className="text-[11px]">
                                Jumlah: 2
                            </p>

                            <button className="mt-1 w-fit border-b border-[#8d6a74] text-[10px]">
                                Lihat Hadiah
                            </button>

                        </div>

                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                            <span className="text-[10px] font-semibold text-white">
                                SUDAH HABIS
                            </span>

                        </div>

                    </div>

                </div>
            </div>


        </section>
    );
}