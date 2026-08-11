import { useEffect, useState } from "react";

import bgProfile from "../assets/images/bg-texture.png";
import forest from "../assets/images/bg-overlay-min.png";
import days from "../assets/images/day.png";
import tree from "../assets/images/pohon-tinggi.png";
import tree1 from "../assets/images/pohon-kecil.png";
import pagar1 from "../assets/images/pagar-1.png";
import orn from "../assets/images/orn-gift.png";
import orn1 from "../assets/images/orn.png";

export default function DaySection() {

    const weddingDate = new Date("2027-06-10T11:30:20+07:00");

    const [timeLeft,setTimeLeft] = useState({
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    });

    useEffect(() => {

        const updateTimer = () => {

            const now = new Date();
            const distance = weddingDate - now;

            if(distance <= 0){
                setTimeLeft({
                    days:0,
                    hours:0,
                    minutes:0,
                    seconds:0
                });
                return;
            }

            setTimeLeft({
                days:Math.floor(distance/(1000*60*60*24)),
                hours:Math.floor((distance/(1000*60*60))%24),
                minutes:Math.floor((distance/(1000*60))%60),
                seconds:Math.floor((distance/1000)%60)
            });
        };

        updateTimer();

        const interval = setInterval(updateTimer,1000);

        return () => clearInterval(interval);

    },[]);


    return (
        <section className="relative w-full flex justify-center overflow-hidden">

            <div className="relative w-full h-165 overflow-hidden">

                <img src={bgProfile} alt="" className="absolute inset-0 w-full h-full object-cover z-0"/>
                <img src={forest} alt="" className="absolute inset-0 w-full h-full object-cover z-10"/>

                <div className="absolute top-8.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                        Hari Yang Ditunggu
                    </h2>
                    <p className="mt-5 text-[12px] leading-6 text-[#6c5a55]">
                        Juni 10th, 2025
                    </p>
                </div>

                {/* Countdown */}
                <div className="absolute bottom-120 left-52.5 -translate-x-1/2 flex gap-3 z-20">

                    <div className="relative">
                        <img src={days} alt="" className="w-12.5"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[14px] text-[#694653]">
                                {timeLeft.days}
                            </span>
                            <span className="text-[7px] text-[#6c5a55]">
                                Hari
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={days} alt="" className="w-12.5"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[14px] text-[#694653]">
                                {String(timeLeft.hours).padStart(2,"0")}
                            </span>
                            <span className="text-[7px] text-[#6c5a55]">
                                Jam
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={days} alt="" className="w-12.5"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[14px] text-[#694653]">
                                {String(timeLeft.minutes).padStart(2,"0")}
                            </span>
                            <span className="text-[7px] text-[#6c5a55]">
                                Menit
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={days} alt="" className="w-12.5"/>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[14px] text-[#694653]">
                                {String(timeLeft.seconds).padStart(2,"0")}
                            </span>
                            <span className="text-[7px] text-[#6c5a55]">
                                Detik
                            </span>
                        </div>
                    </div>

                </div>


                <div className="absolute bottom-110 left-1/2 -translate-x-1/2 z-20">
                    <a
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE"
                        target="_blank"
                        className="mt-6 flex w-35.5 items-center justify-center rounded-full bg-[#694653] py-3 font-serif text-[15px] text-[#f8eee7] transition duration-300 hover:opacity-90"
                    >
                        add kalender
                    </a>
                </div>


                <div className="absolute top-65.5 left-0 right-0 text-center z-40">
                    <h2 className="font-[Satisfy] italic text-[25px] text-[#694653]">
                        Its Wedding Day!
                    </h2>
                    <p className="mt-5 text-[12px] leading-20 text-[#6c5a55]">
                        Selasa, 10 Juni 2025
                    </p>
                </div>


                <div className="absolute top-90 left-0 right-45 text-center z-40">
                    <h2 className="font-[Satisfy] italic text-[24px] text-[#694653]">
                        Akad Nikah
                    </h2>
                    <p className="mt-5 text-[12px] leading-10 text-[#6c5a55]">
                        09.00 - 11.00
                    </p>
                </div>


                <div className="absolute top-90 right-0 left-45 text-center z-40">
                    <h2 className="font-[Satisfy] italic leading-8 text-[25px] text-[#694653]">
                        Resepsi
                    </h2>
                    <p className="mt-5 text-[12px] leading-11 text-[#6c5a55]">
                        11.00 - 14.00
                    </p>
                </div>


                <div className="absolute top-120 left-0 right-0 text-center z-40">
                    <h2 className="font-serif italic text-[15px] text-[#694653]">
                        PO Hotel Semarang
                    </h2>

                    <p className="mt-5 text-[10px] leading-6 text-[#6c5a55]">
                        Jl. Pemuda No.118, Sekayu, Kec. Semarang
                    </p>

                    <p className="mt-1 text-[10px] leading-2 text-[#6c5a55]">
                        Tengah, Kota Semarang, Jawa Tengah 50132,
                    </p>

                    <p className="mt-1 text-[10px] leading-6 text-[#6c5a55]">
                        Indonesia
                        <br/>
                        Kota Semarang
                    </p>

                    <div className="flex justify-center">
                        <a
                            href="https://maps.google.com/?q=PO+Hotel+Semarang"
                            target="_blank"
                            className="mt-6 flex w-35.5 items-center justify-center rounded-full bg-[#694653] py-3 font-serif text-[15px] text-[#f8eee7] transition duration-300 hover:opacity-90"
                        >
                            Lihat Peta
                        </a>
                    </div>
                </div>


                <img src={tree} alt="" className="absolute -bottom-10 -left-25.75 w-50.5 z-20 animate-tree-left"/>
                <img src={tree1} alt="" className="absolute bottom-5 -left-6.25 w-27.5 z-20"/>
                <img src={pagar1} alt="" className="absolute -bottom-1 -left-2.25 w-27.5 z-20"/>
                <img src={orn} alt="" className="absolute -bottom-1 left-0.90 w-15.5 z-20"/>

                <img src={tree} alt="" className="absolute -bottom-10 -right-28.75 w-50.5 z-20 animate-tree-left"/>
                <img src={tree1} alt="" className="absolute bottom-5 -right-6.25 w-27.5 z-20"/>
                <img src={pagar1} alt="" className="absolute -bottom-1 -right-2.25 w-27.5 z-20"/>
                <img src={orn1} alt="" className="absolute -bottom-1 right-0 w-15.5 z-20"/>

            </div>
        </section>
    );
}