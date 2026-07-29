import bgProfile from "../assets/images/bg-texture.png";
import forest from "../assets/images/bg-overlay-min.png";
import day from "../assets/images/days.png";
import day1 from "../assets/images/days-1.png";
import day2 from "../assets/images/days-2.png";
import day3 from "../assets/images/days-3.png";
import tree from "../assets/images/pohon-tinggi.png";
import tree1 from "../assets/images/pohon-kecil.png";
import pagar1 from "../assets/images/Pagar-1.png";
import orn from "../assets/images/orn-gift.png";
import orn1 from "../assets/images/orn.png";


export default function DaySection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-107.5 h-165 overflow-hidden">
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <img
                    src={forest}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-10"
                />
                <div className="absolute top-8.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Hari Yang Ditunggu
                    </h2>
                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                        Juni 10th, 2025
                    </p>
                </div>

                <div className="absolute bottom-120 left-47.5 -translate-x-1/2 flex gap-3 z-20">

                    <img
                        src={day}
                        alt=""
                        className="w-12.5"
                    />

                    <img
                        src={day1}
                        alt=""
                        className="w-12.5"
                    />

                    <img
                        src={day2}
                        alt=""
                        className="w-12.5"
                    />

                    <img
                        src={day3}
                        alt=""
                        className="w-12.5"
                    />
                </div>

                <div className="absolute bottom-110 left-1/2 -translate-x-1/2 z-20">
                    <button className="bg-[#74505C] text-[#f8f1e8] px-5 py-2 rounded-full text-[13px] font-serif tracking-wide shadow-sm">
                        Add to Calendar
                    </button>
                </div>

                <div className="absolute top-65.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] italic text-[25px] text-[#694653]">
                        Its Wedding Day!
                    </h2>
                    <p className="mt-5 text-[12px] leading-20 text-[#6c5a55]">
                        Selasa, 10 Juni 2025
                    </p>
                </div>

                <div className="absolute top-90 left-0 right-45 text-center z-40">
                    <h2 className="font-[Satisfy] italic text-[24px] text-[#694653]">
                        Akad Nikah
                    </h2>
                    <p className="mt-5 text-[12px] leading-10 text-[#6c5a55]">
                        09.00 - 11.00
                    </p>
                </div>
                <div className="absolute top-90 right-0 left-45 text-center z-40">
                    <h2 className="font-[Satisfy] italic leading-8 text-[25px] text-[#694653]">
                        Resepsi
                    </h2>
                    <p className="mt-5 text-[12px] leading-11 text-[#6c5a55]">
                        11.00 - 14.00
                    </p>
                </div>

                <div className="absolute top-120 left-0 right-0 text-center z-40">
                    <h2 className="font-serif italic text-[15px] text-[#694653]">
                        PO Hotel Semarang
                    </h2>
                    <p className="mt-5 text-[10px] leading-6 text-[#6c5a55]">
                        Jl. Pemuda No.118, Sekayu, Kec. Semarang
                    </p>
                    <p className="mt-1 text-[10px] leading-2 text-[#6c5a55]">
                        Tengah, Kota Semarang, Jawa Tengah 50132,
                    </p>
                    <p className="mt-1 text-[10px] leading-6 text-[#6c5a55]">
                        Indonesia
                        <br />
                        Kota Semarang
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://maps.google.com/?q=PO+Hotel+Semarang"
                            target="_blank"
                            className="mt-6 flex w-35.5 items-center justify-center rounded-full bg-[#694653] py-3 font-serif text-[15px] text-[#f8eee7] transition duration-300 hover:opacity-90"
                        >
                            Lihat Peta
                        </a>
                    </div>
                </div>
                <img
                    src={tree}
                    alt=""
                    className="absolute -bottom-10 -left-22.75 w-50.5 z-20 animate-tree-left"
                />
                <img
                    src={tree1}
                    alt=""
                    className="absolute bottom-5 -left-6.25 w-27.5 z-20"
                />
                <img
                    src={pagar1}
                    alt=""
                    className="absolute -bottom-1 -left-2.25 w-27.5 z-20"
                />
                <img
                    src={orn}
                    alt=""
                    className="absolute -bottom-1 left-0.90 w-15.5 z-20 "
                />
                <img
                    src={tree}
                    alt=""
                    className="absolute -bottom-10 -right-28.75 w-50.5 z-20 animate-tree-left"
                />
                <img
                    src={tree1}
                    alt=""
                    className="absolute bottom-5 -right-6.25 w-27.5 z-20 "
                />
                <img
                    src={pagar1}
                    alt=""
                    className="absolute -bottom-1 -right-2.25 w-27.5 z-20"
                />
                <img
                    src={orn1}
                    alt=""
                    className="absolute -bottom-1 right-0 w-15.5 z-20"
                />

            </div>
        </section>
    );
}

