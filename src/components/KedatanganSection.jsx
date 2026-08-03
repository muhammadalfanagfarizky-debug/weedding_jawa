import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";
import smph from "../assets/images/Symbol.png";

export default function KedatanganSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-90 overflow-hidden">
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src={bgBatik}
                    alt=""
                    className="absolute top-50 left-1/2 w-full -translate-x-1/2"
                />
                <div className="relative top-10.5 z-40 mt-5 flex flex-col items-center">

                    <h2 className="font-[Satisfy] text-[25px] text-[#694653]">
                        Wedding Wish
                    </h2>


                    <div className="mt-4 w-full max-w-90">

                        <input
                            type="text"
                            placeholder="Give you wish"
                            className="h-6 w-full rounded-full border border-[#b89198] bg-transparent px-3 text-[10px] text-[#8d6a74] placeholder:text-[#8d6a74] outline-none"
                        />

                    </div>

                </div>
                <div className="mt-10 flex justify-center">
                    <button
                        className="absolute top-30.5 w-90 rounded-full bg-[#694653] py-3 text-white transition hover:opacity-90"
                    >
                        Send
                    </button>
                </div>

                <div className="relative top-5.5 z-40 mx-auto mt-6 w-full max-w-90 translate-x-3">


                    <div className="relative top-20.5 mx-auto w-101 rounded-lg bg-[#F1DEC8] py-3 text-[#8d6a74]">

                        <img
                            src={smph}
                            alt=""                        
                            className="absolute right-3 top-2 text-[14px]">
                        </img>

                        <div className="relative left-3">

                            <p className="text-[10px]">
                                Katsudoto
                            </p>

                            <p className="text-[12px]">
                                05 Apr 2025, 15:15
                            </p>

                            <p className="mt-2 text-[10px]">
                                Congrats
                            </p>

                        </div>

                    </div>
                </div>

            </div>


        </section >
    );
}