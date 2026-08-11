import { useState } from "react";
import { Trash2 } from "lucide-react";

import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";


export default function KedatanganSection() {

    const API_URL = "https://script.google.com/macros/s/AKfycbxrPeO1GammPQiImA8CN8_NGiGuv9c5o-NMaqodGIrbPbmA2ZeiolS4GyQW-ERA2YZd/exec";

    const [wish, setWish] = useState("");

    const handleDelete = (index) => {
        setWishes((prev) => prev.filter((_, i) => i !== index));
    };

    const [wishes, setWishes] = useState([
        {
            name: "Katsudoto",
            date: "05 Apr 2025, 15:15",
            message: "Congrats"
        }
    ]);


    const handleSend = async () => {

        if (!wish.trim()) {
            alert("Isi wish dulu");
            return;
        }


        const newWish = {
            name: "Guest",
            date: new Date().toLocaleString("id-ID"),
            message: wish
        };


        fetch(API_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(newWish)
        });


        setWishes((prev) => [
            ...prev,
            newWish
        ]);


        setWish("");

    };




    return (

        <section
            className="relative flex flex-col items-center min-h-140 overflow-hidden bg-cover bg-center pt-10"
            style={{
                backgroundImage: `url(${bgProfile})`
            }}
        >

            <h2 className="text-center font-[Satisfy] text-[25px] text-[#694653]">
                Wedding Wish
            </h2>

            <div className="mt-4 flex justify-center">
                <input
                    type="text"
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    placeholder="Give you wish"
                    className="h-6 w-80 rounded-full border border-[#b89198] bg-transparent pl-2! pr-3! text-[10px] text-[#8d6a74] placeholder:text-[#8d6a74] outline-none"
                />
            </div>

            <div className="absolute top-18.5 mt-18 flex w-full justify-center z-50">
                <button
                    type="button"
                    onClick={handleSend}
                    className="w-80 rounded-full bg-[#694653] py-2 text-[14px] text-white cursor-pointer"
                >
                    Send
                </button>
            </div>

            <div className="flex flex-col items-center">


                {
                    wishes.map((item, index) => (

                        <div
                            key={index}
                            className="relative top-10.5 mx-auto mb-3 w-80 rounded-lg bg-[#F1DEC8] px-3 py-2 text-[#8d6a74] z-10"
                        >


                            <Trash2
                                onClick={() => handleDelete(index)}
                                size={12}
                                className="absolute right-3 top-1 cursor-pointer text-[#8d6a74]"
                            />

                            <p className="text-[10px]">
                                {item.name}
                            </p>


                            <p className="text-[12px]">
                                {item.date}
                            </p>


                            <p className="mt-1 text-[10px]">
                                {item.message}
                            </p>


                        </div>

                    ))
                }


            </div>

            <img
                src={bgBatik}
                alt=""
                className="absolute bottom-0 left-0 w-full z-10"
            />
        </section>

    );
}