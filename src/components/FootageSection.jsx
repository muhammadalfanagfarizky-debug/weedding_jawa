import bgProfile from "../assets/images/bg-texture.png";
import forest from "../assets/images/bg-overlay.png";
import wyng from "../assets/images/1.png";
import wth from "../assets/images/sddefault.png";
import orn from "../assets/images/orn-gif.png";
import orn1 from "../assets/images/orn-gi.png";
import orn2 from "../assets/images/orn-5-min.png";

export default function FootageSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-180 overflow-hidden">
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <img
                    src={forest}
                    alt=""
                    className="absolute inset-0 w-100 h-150 object-cover z-10"
                />
                <img
                    src={wyng}
                    alt=""
                    className="absolute top-25.5 left-1/2 w-10 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute top-35.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Our Footage
                    </h2>
                </div>
                <img
                    src={wth}
                    alt=""
                    className="absolute top-48.5 left-1/2 -translate-x-1/2 w-50 z-20"
                />
                <div className="absolute top-88 left-0 right-0 text-center z-40">
                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                       Pre-Wedding
                    </p>
                </div>
                <img
                    src={orn}
                    alt=""
                    className="absolute top-44.5 left-12.75 w-22.75 z-20 animate-flower-delay"
                />
                <img
                    src={orn2}
                    alt=""
                    className="absolute top-60.5 right-15.75 w-24.75 z-20 animate-flower-delay"
                />
                <img
                    src={orn1}
                    alt=""
                    className="absolute top-44.5 right-11.75 w-22.75 z-30 animate-flower-delay"
                />

                <img
                    src={wyng}
                    alt=""
                    className="absolute top-110.5 left-1/2 w-10 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute top-120.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Live Streaming
                    </h2>
                </div>
                <img
                    src={wth}
                    alt=""
                    className="absolute top-135.5 left-1/2 -translate-x-1/2 w-50 z-20"
                />
                <div className="absolute top-175 left-0 right-0 text-center z-40">
                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                       Pre-Wedding
                    </p>
                </div>
                <img
                    src={orn}
                    alt=""
                    className="absolute top-130.5 left-12.75 w-22.75 z-20 animate-flower-delay"
                />
                <img
                    src={orn2}
                    alt=""
                    className="absolute top-147.5 right-15.75 w-24.75 z-20 animate-flower-delay"
                />
                <img
                    src={orn1}
                    alt=""
                    className="absolute top-130.5 right-11.75 w-22.75 z-30 animate-flower-delay"
                />

                

            </div>
        </section>
    );

}