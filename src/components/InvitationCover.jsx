import bgProfile from "../assets/images/bg-texture.png";
import bgKipas from "../assets/images/kipas-jawa.png";
import bgoverla from "../assets/images/bg-overla.png";
import tree from "../assets/images/pohon-tinggi.png";
import tree1 from "../assets/images/pohon-kecil.png";
import pagar1 from "../assets/images/pagar-1.png";
import orn from "../assets/images/orn-gift.png";
import wyng from "../assets/images/1.png";
import wayang from "../assets/images/orn-26-min.png";




export default function InvitationCover({ onOpen }) {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#F7F0DE]">

            <img
                src={bgProfile}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />
            <img
                src={bgKipas}
                alt="Kipas"
                className="absolute top-1/2 left-1/2 w-50 -translate-x-1/2 -translate-y-1/2"
            />
            <img
                src={bgoverla}
                alt=""
                className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute top-75.5 left-0 right-0 text-center z-40">
                <h2 className="font-[Satisfy] italic text-[35px] text-[#694653]">
                    Sarah   & Michael
                </h2>
                <p className="mt-5 text-[12px] leading-5 text-[#6c5a55]">
                    #PromDateToLifeMate
                </p>
                <p className="mt-5 text-[12px] leading-7 text-[#6c5a55]">
                    Juni 10th  , 2025
                </p>
                <button
                    onClick={onOpen}
                    className="lg:hidden mt-12 w-47.5 h-11.5 rounded-full bg-[#7B2A2A] text-white font-body text-[15px] shadow-lg hover:scale-105 duration-300"
                >
                    Buka Undangan
                </button>
            </div>
            <img
                src={tree}
                alt=""
                className="absolute -bottom-25 -left-30.75 w-50.5 z-20 animate-tree-left"
            />
            <img
                src={tree1}
                alt=""
                className="absolute bottom-5 -left-15.25 w-30.5 z-20 animate-tree-left"
            />
            <img
                src={pagar1}
                alt=""
                className="absolute -bottom-1 -left-2.25 w-27.5 z-30"
            />
            <img
                src={wyng}
                alt=""
                className="absolute bottom-1 -left-8.25 w-25.5 z-20 animate-tree-left"
            />

            <img
                src={tree1}
                alt=""
                className="absolute bottom-5 -right-15.25 w-30.5 z-20 animate-tree-left"
            />
            <img
                src={pagar1}
                alt=""
                className="absolute -bottom-1 -right-2.25 w-27.5 z-30"
            />

            <img
                src={wayang}
                alt=""
                className="absolute bottom-1 right-3.25 w-18.5 z-20 animate-tree-left"
            />
        </section>

    );
}