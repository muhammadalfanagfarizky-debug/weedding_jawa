import { useState } from "react";

import bgProfile from "../assets/images/bg-texture.png";
import potrait from "../assets/images/potrait.png";
import potrait2 from "../assets/images/potrait-2.png";
import potrait3 from "../assets/images/potrait-3.png";
import phn from "../assets/images/pohon-tinggi.png";
import pillar from "../assets/images/Pillar-Bottom.png";

export default function PortraitSection() {

    const [photos, setPhotos] = useState([
        potrait,
        potrait2,
        potrait3
    ]);

    const changePhoto = (index) => {
        const newPhoto = [...photos];

        const temp = newPhoto[0];
        newPhoto[0] = newPhoto[index];
        newPhoto[index] = temp;

        setPhotos(newPhoto);
    };


    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="relative w-full h-130 overflow-hidden">

                {/* TITLE */}
                <div className="absolute top-8.5 left-0 right-0 text-center z-80">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Potrait Of Us
                    </h2>
                </div>

                {/* BACKGROUND */}
                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* FOTO TENGAH */}
                <div
                    onClick={() => changePhoto(0)}
                    className="absolute top-25.5 left-1/2 -translate-x-1/2 w-50 z-100 cursor-pointer transition-all duration-500"
                >
                    <img src={photos[0]} alt="" className="w-full" />
                </div>

                {/* FOTO KIRI */}
                <div
                    onClick={() => changePhoto(1)}
                    className="absolute top-37.5 left-10.75 -translate-x-1/2 w-30 z-100 cursor-pointer transition-all duration-500"
                >
                    <img src={photos[1]} alt="" className="w-full" />
                </div>

                {/* FOTO KANAN */}
                <div
                    onClick={() => changePhoto(2)}
                    className="absolute top-37.5 -right-18.75 -translate-x-1/2 w-30 z-100 cursor-pointer transition-all duration-500"
                >
                    <img src={photos[2]} alt="" className="w-full" />
                </div>

                {/* POHON KIRI */}
                <img
                    src={phn}
                    alt=""
                    className="absolute -bottom-10 -left-30.75 w-50.5 z-110 pointer-events-none animate-tree-left"
                />

                {/* POHON KANAN */}
                <img
                    src={phn}
                    alt=""
                    className="absolute -bottom-10 -right-28.75 w-50.5 z-110 pointer-events-none animate-tree-left"
                />

                {/* PILLAR */}
                <img
                    src={pillar}
                    alt="Pillar"
                    className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 z-40 pointer-events-none"
                />

            </div>
        </section>
    );
}