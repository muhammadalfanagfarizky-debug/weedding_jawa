import bgProfile from "../assets/images/bg-texture.png";
import bgKipas from "../assets/images/kipas-jawa.png";
import dress from "../assets/images/kebaya.png";
import dress2 from "../assets/images/kebaya-1.png";
import pillar from "../assets/images/Pillar-Bottom.png";
import wayang from "../assets/images/orn-26-min.png";
import bunga from "../assets/images/orn-8-min.png";
import bunga2 from "../assets/images/orn-16-min.png";
import bunga3 from "../assets/images/orn-13-min.png";

export default function DressSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-165 overflow-hidden">
                <img
                    src={bgProfile}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-25.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Dress Code
                    </h2>
                    <p className="mt-5 text-[12px] leading-25 text-[#6c5a55]">
                        Traditional Attire
                    </p>
                    <p className="mt-5 text-[12px] leading-1 text-[#6c5a55]">
                        Pria
                    </p>
                </div>
                <img
                    src={dress}
                    alt="Dress"
                    className="absolute top-72.5 left-1/2 w-13 -translate-x-1/2 -translate-y-1/2"
                />
                <p className="absolute top-85.5 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 text-center text-[12px] leading-1 text-[#6c5a55]">
                    Wanita
                </p>
                <img
                    src={dress2}
                    alt="Dress"
                    className="absolute top-95.5 left-1/2 w-13 -translate-x-1/2 -translate-y-1/2"
                />
                <p className="absolute top-108.5 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 text-center text-[12px] leading-1 text-[#6c5a55]">
                    Woman:Kebaya
                </p>
                <p className="absolute top-111.5 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 text-center text-[12px] leading-1 text-[#6c5a55]">
                    Man:Beskap
                </p>
                <img
                    src={bgKipas}
                    alt="Kipas"
                    className="absolute top-1/2 left-1/2 w-50 -translate-x-1/2 -translate-y-1/2"
                />
                <img
                    src={pillar}
                    alt="Pillar"
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
                />
                <img
                    src={wayang}
                    alt=""
                    className="absolute -bottom-5 -right-4.25 w-25.5 z-20 animate-tree-left"
                />
                <img
                    src={bunga}
                    alt=""
                    className="absolute top-145 -bottom-5  -right-1 w-25.5 z-20 animate-flower-left"
                />
                <img
                    src={bunga2}
                    alt=""
                    className="absolute -bottom-5 -left-4.25 w-20.5 z-20 animate-tree-left"
                />
                <img
                    src={bunga3}
                    alt=""
                    className="absolute -bottom-5 -left-1.25 w-23.5 z-20 animate-tree-left"
                />
            </div>
        </section>
    );
}