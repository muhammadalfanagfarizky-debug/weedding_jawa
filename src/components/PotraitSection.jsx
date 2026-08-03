import bgProfile from "../assets/images/bg-texture.png";
import potrait from "../assets/images/potrait.png";
import potrait2 from "../assets/images/potrait-2.png";
import potrait3 from "../assets/images/potrait-3.png";
import phn from "../assets/images/pohon-tinggi.png";
import pillar from "../assets/images/Pillar-Bottom.png";


export default function PortraitSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-130 overflow-hidden">
                <div className="absolute top-8.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Potrait Of Us
                    </h2>
                </div>
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src={potrait}
                    alt=""
                    className="absolute top-25.5 left-1/2 -translate-x-1/2 w-50 z-30"
                />
                <img
                    src={potrait2}
                    alt=""
                    className="absolute top-37.5 left-10.75 -translate-x-1/2 w-23 z-30"
                />
                <img
                    src={potrait3}
                    alt=""
                    className="absolute top-37.5 -right-11.75 -translate-x-1/2 w-23 z-30"
                />
                <img
                    src={phn}
                    alt=""
                    className="absolute -bottom-10 -left-30.75 w-50.5 z-40 animate-tree-left"
                />
                <img
                    src={phn}
                    alt=""
                    className="absolute -bottom-10 -right-28.75 w-50.5 z-40 animate-tree-left"
                />
                <img
                    src={pillar}
                    alt="Pillar"
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2"
                />
            </div>
        </section>
    );
}