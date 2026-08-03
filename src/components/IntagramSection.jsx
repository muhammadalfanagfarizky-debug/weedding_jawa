import bgProfile from "../assets/images/bg-texture.png";
import ig from "../assets/images/Instagram-Filter.png";
import bunga from "../assets/images/bunga-kiri-tengah-2.png";
import bunga1 from "../assets/images/bnga.png";
import bunga2 from "../assets/images/orn-8.png";
import wayang from "../assets/images/orn-26-min.png";


export default function IntagramSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-165 overflow-hidden">
                <div className="absolute top-8.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[25px] text-[#694653]">
                        Instagram Wedding Filter
                    </h2>
                    <p className="mt-5 px-8 text-[10px] leading-6 text-[#6c5a55]">
                        Abadikan momen Anda saat menghadiri pernikahan
                    </p>
                    <p className="mt-5 px-8 text-[10px] leading-2 text-[#6c5a55]">
                        dengan menggunakan filter Instagram di bawah ini
                    </p>
                </div>
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src={ig}
                    alt=""
                    className="absolute top-48.5 left-1/2 -translate-x-1/2 w-40 z-20"
                />
                <img
                    src={bunga}
                    alt=""
                    className="absolute top-70.5 left-15.75 w-17.75 z-30 animate-flower-delay"
                />
                <img
                    src={bunga1}
                    alt=""
                    className="absolute top-110.5 left-16.75 w-25.75 z-30 animate-flower-delay"
                />
                <img
                    src={wayang}
                    alt=""
                    className="absolute top-95.5 right-30.75 w-13.75 z-30 animate-flower-delay"
                />
                <img
                    src={bunga2}
                    alt=""
                    className="absolute top-110.5 right-27.75 w-20.75 z-30 animate-flower-delay"
                />
                <div className="mt-10 flex justify-center">
                    <button
                        className="absolute top-130.5 w-40 rounded-full bg-[#694653] py-3 text-white transition hover:opacity-90"
                    >
                        Gunakan Filter
                    </button>
                </div>


            </div>

        </section>

    );
}