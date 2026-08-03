import bgProfile from "../assets/images/bg-texture.png";

import profileWanita from "../assets/images/foto-wanita.png";
import bingkaiWanita from "../assets/images/bingkai-Wanita.png";

import bungaKananBingkai from "../assets/images/bunga-kanan-bingkai.png";
import bungaKiriBingkai from "../assets/images/bunga-kiri-bingkai.png";

import pohonKananAtas from "../assets/images/pohon-kanan-atas.png";
import pohonKiriBawah from "../assets/images/pohon-kiri-bawah.png";
import dan from "../assets/images/&.png";

import wayangKananBawah from "../assets/images/wayang-kanan-bawah.png";

export default function ProfileSection() {
    return (
        <section className="relative w-full flex justify-center overflow-hidden">

            <div className="relative w-full h-225 overflow-hidden">

                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />


                <img
                    src={pohonKananAtas}
                    alt=""
                    className="absolute -top-7.5 -right-8.75 w-30 z-10 animate-tree"
                />


                <div className="absolute top-22.5 left-0 right-0 text-center z-20">

                    <h1 className="font-serif italic text-[36px] text-[#694653]">
                        The Wedding Of
                    </h1>

                    <p className="mt-5 px-8 text-[12px] leading-6 text-[#6c5a55]">
                        Assalamualaikum Warahmatullahi Wabarakatuh
                        <br />
                        With the blessing and mercy from Allah SWT,
                        <br />
                        We cordially invite you to the wedding of
                    </p>

                </div>


                <img
                    src={profileWanita}
                    alt="Profile Wanita"
                    className="absolute top-87.25 left-1/2 -translate-x-1/2 w-52.5 h-60 object-cover rounded-[45px] z-10"
                />


                <img
                    src={bingkaiWanita}
                    alt=""
                    className="absolute top-65 left-1/2 -translate-x-1/2 w-60 z-20"
                />


                <img
                    src={bungaKiriBingkai}
                    alt=""
                    className="absolute top-90 left-13.75 w-23.75 z-30 animate-flower"
                />


                <img
                    src={bungaKananBingkai}
                    alt=""
                    className="absolute top-87.5 right-13.75 w-23.75 z-30 animate-flower-delay"
                />


                <div className="absolute top-155 left-0 right-0 text-center z-40">

                    <h2 className="font-serif italic text-[34px] text-[#694653]">
                        Sarah Asy
                    </h2>


                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                        The Daughter of
                        <br />
                        Mr. Ilham Cakra and Mrs. Farhana Dzu Hasna
                    </p>


                    <p className="mt-4 text-[13px] text-[#694653]">
                        ◎ Sarahh_Asy
                    </p>

                </div>


                <img
                    src={pohonKiriBawah}
                    alt=""
                    className="absolute -bottom-5 -left-8.75 w-32.5 z-10 animate-tree-left"
                />

                 <img
                    src={dan}
                    alt=""
                   className="absolute bottom-9 right-40.25 w-15.5 z-20 "
                />


                <img
                    src={wayangKananBawah}
                    alt=""
                    className="absolute -bottom-5 -right-6.25 w-27.5 z-20 animate-tree-left"
                />

            </div>

        </section>
    );
}