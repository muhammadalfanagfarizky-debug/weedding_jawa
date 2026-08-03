import bgProfile from "../assets/images/bg-texture.png";
import bingkaiWanita from "../assets/images/bingkai-Wanita.png";
import photoofaguy from "../assets/images/Frame-pria.png";
import flowerframe from "../assets/images/couple-bunga-04-min.png";
import flowerframe2 from "../assets/images/couple-bunga-01-min.png";
import flowerframe3 from "../assets/images/couple-bunga-02-min.png";





export default function CowoSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">

            <div className="relative w-full h-165 overflow-hidden">
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                
                <img
                    src={bingkaiWanita}
                    alt=""
                    className="absolute top-22 left-1/2 -translate-x-1/2 w-60 z-20"
                />

                <img
                    src={photoofaguy}
                    alt="Profile Cowo"
                    className="absolute top-35.25 left-1/2 -translate-x-1/2 w-58.5 h-64 object-cover rounded-[45px] z-10"
                />

                <img
                    src={flowerframe}
                    alt=""
                    className="absolute top-40.5 right-11.75 w-17.75 z-30 animate-flower-delay"
                />

                <img
                    src={flowerframe2}
                    alt=""
                    className="absolute top-40.5 left-11.75 w-25.75 z-30 animate-flower-delay"
                />

                <img
                    src={flowerframe3}
                    alt=""
                    className="absolute top-70.5 left-16.75 w-25.75 z-30 animate-flower-delay"
                />

                <div className="absolute top-113 left-0 right-0 text-center z-40">

                    <h2 className="font-serif italic text-[34px] text-[#694653]">
                        Michael Ezra
                    </h2>


                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                       The Son of
                        <br />
                        Mr. Haris Sustyanto and Mrs. Bella Ayu
                    </p>


                    <p className="mt-4 text-[13px] text-[#694653]">
                        ◎ Michael_Ezra
                    </p>

                </div>
            </div>
        </section>
    );
}
