import { useState } from "react";
import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";
import { supabase } from "../lib/supabase";

export default function ConfirmationForm({
    confirmation,
    onSave,
    onCancel,
}) {
    const [name, setName] = useState(confirmation.name || "");
    const [status, setStatus] = useState(confirmation.status || "Hadir");
    const [guest, setGuest] = useState(confirmation.guest_count || 1);
    const [message, setMessage] = useState(confirmation.message || "");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const decreaseGuest = () => {
        if (guest > 1) {
            setGuest(guest - 1);
        }
    };

    const increaseGuest = () => {
        setGuest(guest + 1);
    };

    const handleSubmit = async () => {
        setError("");

        if (!name.trim()) {
            setError("Nama wajib diisi.");
            return;
        }

        if (!message.trim()) {
            setError("Ucapan wajib diisi.");
            return;
        }

        if (guest < 0) {
            setError("Jumlah tamu tidak boleh kurang dari 0.");
            return;
        }

        setLoading(true);

        const rsvpData = {
            name: name.trim(),
            status,
            guest_count: status === "Hadir" ? guest : 0,
            message: message.trim(),
        };

        const { error } = await supabase
            .from("rsvp_responses")
            .insert(rsvpData);

        setLoading(false);

        if (error) {
            console.error(error);
            setError(error.message);
            return;
        }

        onSave(rsvpData);
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
                className="absolute left-1/2 top-0 w-[380px] max-w-full -translate-x-1/2 opacity-80"
            />

            <div className="relative flex w-full max-w-[430px] flex-col items-center text-center">

                <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>

                <p className="!mt-[18px] px-5 text-[14px] leading-6 text-[#694653]">
                    Maukah Kamu hadir dipernikahan Kami?
                </p>

                {/* NAMA */}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="mt-7! block h-11.5 w-80 rounded-full border border-[#694653] bg-transparent pl-4! pr-4! text-sm text-[#694653] outline-none placeholder:text-[#9d7c86]"
                />

                {/* STATUS */}
                <button
                    type="button"
                    onClick={() => setStatus("Hadir")}
                    className={`mt-2.5! block h-8 w-80 rounded-full text-sm transition ${status === "Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                        }`}
                >
                    Akan Hadir
                </button>

                <button
                    type="button"
                    onClick={() => setStatus("Berhalangan Hadir")}
                    className={`mt-2! block h-8 w-80 rounded-full text-sm transition ${status === "Berhalangan Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                        }`}
                >
                    Berhalangan Hadir
                </button>


                {status === "Hadir" && (
                    <div className="mt-4!">

                        <p className="text-sm text-[#694653]">
                            Orang yang akan datang bersama Anda?
                        </p>

                        <div className="mt-2.5! flex items-center justify-center gap-5">

                            <button
                                type="button"
                                onClick={decreaseGuest}
                                className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                −
                            </button>

                            <div className="flex h-10.5 w-24 shrink-0 items-center justify-center rounded-full border border-[#694653] text-lg font-semibold text-[#694653]">
                                {guest}
                            </div>

                            <button
                                type="button"
                                onClick={increaseGuest}
                                className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                +
                            </button>

                        </div>

                    </div>
                )}

                {/* UCAPAN */}
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan..."
                    rows={3}
                    className="mt-4.5! block h-10.5 w-80 resize-none rounded-[18px] border border-[#694653] bg-transparent pl-4! py-2 text-sm text-[#694653] outline-none placeholder:text-[#9d7c86]"
                />

                {/* ERROR */}
                {error && (
                    <p className="mt-2! text-xs text-red-600">
                        {error}
                    </p>
                )}

                {/* MENGONFIRMASI */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-2.5! block h-8 w-80 rounded-full bg-[#694653] text-sm text-white transition hover:opacity-90 disabled:opacity-60"
                >
                    {loading ? "Mengirim..." : "Mengonfirmasi"}
                </button>

                {/* BATAL */}
                <button
                    type="button"
                    onClick={onCancel}
                    className="mt-2! block h-8 w-80 rounded-full border border-[#694653] text-sm text-[#694653] transition hover:bg-[#694653] hover:text-white"
                >
                    Batal
                </button>

            </div>
        </section>
    );
}