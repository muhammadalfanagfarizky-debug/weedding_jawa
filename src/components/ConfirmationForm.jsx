import { useState } from "react";
import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";

export default function ConfirmationForm({
    confirmation,
    onSave,
    onCancel,
}) {

    const [status, setStatus] = useState(confirmation.status);
    const [guest, setGuest] = useState(confirmation.guest);

    const decreaseGuest = () => {
        if (guest > 1) {
            setGuest(guest - 1);
        }
    };

    const increaseGuest = () => {
        setGuest(guest + 1);
    };

    const handleSubmit = () => {
        onSave({
            status,
            guest: status === "Hadir" ? guest : 0,
        });
    };


    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F7F0DE] px-4 py-10">


            <img
                src={bgProfile}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />


            <img
                src={bgBatik}
                alt=""
                className="absolute top-0 left-1/2 w-[380px] max-w-full -translate-x-1/2 opacity-80"
            />



            <div className="relative w-full max-w-[430px] -translate-y-3 text-center">


                <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>



                <p className="mt-6 px-5 text-[14px] leading-6 text-[#694653]">
                    Maukah Kamu hadir dipernikahan Kami?
                </p>



                <button
                    onClick={() => setStatus("Hadir")}
                    className={`mt-7 w-100 rounded-full py-3 text-sm transition ${
                        status === "Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                    }`}
                >
                    Akan Hadir
                </button>



                <button
                    onClick={() => setStatus("Berhalangan Hadir")}
                    className={`mt-4 w-100 rounded-full py-3 text-sm transition ${
                        status === "Berhalangan Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                    }`}
                >
                    Berhalangan Hadir
                </button>



                {status === "Hadir" && (

                    <div className="mt-8">


                        <p className="text-sm text-[#694653]">
                            Orang yang akan datang bersama Anda?
                        </p>



                        <div className="mt-5 flex items-center justify-center gap-5">


                            <button
                                onClick={decreaseGuest}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                −
                            </button>



                            <div className="flex h-10 w-24 items-center justify-center rounded-full border border-[#694653] text-lg font-semibold text-[#694653]">
                                {guest}
                            </div>



                            <button
                                onClick={increaseGuest}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                +
                            </button>


                        </div>


                    </div>

                )}




                <button
                    onClick={handleSubmit}
                    className="mt-8 w-100 rounded-full bg-[#694653] py-3 text-sm text-white transition hover:opacity-90"
                >
                    Mengonfirmasi
                </button>



                <button
                    onClick={onCancel}
                    className="mt-4 w-100 rounded-full border border-[#694653] py-3 text-sm text-[#694653] transition hover:bg-[#694653] hover:text-white"
                >
                    Batal
                </button>



            </div>


        </section>
    );
}