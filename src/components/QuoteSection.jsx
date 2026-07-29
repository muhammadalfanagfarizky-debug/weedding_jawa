import bgProfile from "../assets/images/bg-texture.png";
import bgSurat from "../assets/images/bg-surat.png";

import bungaKananAtas from "../assets/images/bunga-kanan-atas.png";
import bungaKananBawah from "../assets/images/bunga-kanan-bawah.png";

import bungaKiriTengah1 from "../assets/images/bunga-kiri-tengah-1.png";
import bungaKiriTengah2 from "../assets/images/bunga-kiri-tengah-2.png";

import bungaBawahKanan1 from "../assets/images/bunga-bawah-kanan-1.png";
import bungaBawahKanan2 from "../assets/images/bunga-bawah-kanan-2.png";

export default function QuoteSection() {
    return (
        <section
            className="
                relative
                w-full
                h-225
                flex
                justify-center
                overflow-hidden
            "
        >

            <img
            src={bgProfile}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            "
            />


            <div
                className="
                    relative
                    w-90
                    h-180
                    mt-10
                "
            >

                <img
                    src={bgSurat}
                    alt=""
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-contain
                    "
                />


                <img
                    src={bungaKananAtas}
                    alt=""
                    className="
                        absolute
                        top-5
                        -right-4
                        w-30
                        animate-tree
                        origin-bottom-left
                        z-20
                    "
                />


                <img
                    src={bungaKiriTengah2}
                    alt=""
                    className="
                        absolute
                        -left-9
                        top-30
                        w-31.25
                        animate-tree
                        origin-bottom-right
                        z-20
                    "
                />

                <img
                    src={bungaKiriTengah1}
                    alt=""
                    className="
                        absolute
                        -left-8
                        top-63.75
                        w-30
                        animate-tree
                        origin-top-right
                        z-20
                    "
                />

              
                <img
                    src={bungaKananBawah}
                    alt=""
                    className="
                        absolute
                        right-0
                        bottom-34
                        w-30
                        animate-tree
                        origin-left-bottom
                        z-20
                    "
                />

               

                <img
                    src={bungaBawahKanan2}
                    alt=""
                    className="
                        absolute
                        left-26.25
                        bottom-2
                        w-37.5
                        animate-tree
                        origin-top
                        z-20
                    "
                />

                <img
                    src={bungaBawahKanan1}
                    alt=""
                    className="
                        absolute
                        right-0
                        bottom-0
                        w-37.5
                        animate-tree
                        origin-top-left
                        z-20
                    "
                />

              

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-12
                        z-30
                    "
                >

                    <p
                        className="
                            text-[15px]
                            text-[#5b4247]
                            leading-8
                        "
                    >
                        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                    </p>

                    <div className="h-8" />

                    <p
                        className="
                            text-[#65464e]
                            leading-10
                            text-[16px]
                        "
                    >
                        "And among His Signs is this, that
                        <br />
                        He created for you mates from
                        <br />
                        among yourselves, that He may
                        <br />
                        dwell in tranquillity with them,
                        <br />
                        and He has put love and mercy
                        <br />
                        between your (hearts): verily in
                        <br />
                        that are Signs for those who
                        <br />
                        reflect."
                    </p>

                    <p
                        className="
                            mt-10
                            text-[18px]
                            text-[#65464e]
                        "
                    >
                        (QS. Ar-Rum : 21)
                    </p>

                </div>

            </div>

        </section>
    );
}