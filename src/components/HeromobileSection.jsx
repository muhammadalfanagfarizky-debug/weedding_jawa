import bgProfile from "../assets/images/bg-texture.png";
import forest from "../assets/images/bg-overlay-min.png";
import tree from "../assets/images/pohon-tinggi.png";
import tree1 from "../assets/images/pohon-kecil.png";
import pagar1 from "../assets/images/pagar-1.png";
import logo from "../assets/images/logo.png";
import frame from "../assets/images/Frame-cover.png";
import tu from "../assets/images/2.png";
import wyng from "../assets/images/1.png";
import wayang from "../assets/images/orn-26-min.png";


export default function HeromobileSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-220 overflow-hidden">
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
                    <img
                        src={logo}
                        alt=""
                        className="absolute top-5.5 left-1/2 w-10 -translate-x-1/2 -translate-y-1/2"
                    />
                    <p className="mt-5 text-[12px] leading-30 text-[#6c5a55]">
                        Wedding Invitation
                    </p>
                    <h2 className="font-[Satisfy] text-[30px] leading-0 text-[#694653]">
                        Sarah   & Michael
                    </h2>
                </div>



                <img
                    src={tree}
                    alt=""
                    className="absolute bottom-10 -left-25.75 w-45.5 z-20 animate-tree-left"
                />
                <img
                    src={tree1}
                    alt=""
                    className="absolute bottom-5 -left-15.25 w-27.5 z-20"
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
                    src={tree}
                    alt=""
                    className="absolute -bottom-10 -right-28.75 w-50.5 z-20 animate-tree-left"
                />
                <img
                    src={tree1}
                    alt=""
                    className="absolute bottom-5 -right-15.25 w-27.5 z-20 "
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
                <img
                    src={frame}
                    alt=""
                    className="absolute top-50 left-1/2 -translate-x-1/2 w-60 z-20"
                />
                <img
                    src={tu}
                    alt=""
                    className="absolute left-1/2 top-53 -translate-x-1/2 w-51.25 h-80 rounded-t-[120px] rounded-b-[120px] object-cover z-10"
                />
                <div className="absolute top-135 left-0 right-0 text-center z-40">
                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                       #PromDateToLifeMate
                    </p>

                </div>

            </div>
        </section>
    );
}

