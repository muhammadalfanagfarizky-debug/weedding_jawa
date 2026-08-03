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
        <div className="relative w-107.5 h-165 overflow-hidden">

            {/* Background */}
            <img
                src={bgProfile}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Ornamen */}
            <img
                src={bgBatik}
                alt=""
                className="absolute top-0 left-1/2 w-100 -translate-x-1/2"
            />

            <div className="absolute top-40 left-0 right-0 px-8 text-center">

                <h2 className="font-[Satisfy] text-[32px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>

                <p  className="mt-8 text-[#694653] text-[16px]">
                   Maukah Kamu hadir dipernikahan Kami?
                </p>

                <button
                    onClick={() => setStatus("Hadir")}
                    className={`mt-8 w-full rounded-full py-3 transition ${
                        status === "Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                    }`}
                >
                    Akan Hadir
                </button>

                {/* Berhalangan */}
                <button
                    onClick={() => setStatus("Berhalangan Hadir")}
                    className={`mt-4 w-full rounded-full py-3 transition ${
                        status === "Berhalangan Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                    }`}
                >
                    Berhalangan Hadir
                </button>

                {status === "Hadir" && (
                    <>
                        <p className="mt-10 text-[#694653]">
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
                    </>
                )}

                {/* Tombol */}
                <button
                    onClick={handleSubmit}
                    className="mt-10 w-full rounded-full bg-[#694653] py-3 text-white transition hover:opacity-90"
                >
                    Mengonfirmasi
                </button>

                <button
                    onClick={onCancel}
                    className="mt-4 w-full rounded-full border border-[#694653] py-3 text-[#694653] transition hover:bg-[#694653] hover:text-white"
                >
                    Batal
                </button>

            </div>
        </div>
    );
}