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
    const [guestCount, setGuestCount] = useState(
        confirmation.guest_count || 1
    );
    const [message, setMessage] = useState(confirmation.message || "");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const decreaseGuest = () => {
        if (guestCount > 1) {
            setGuestCount(guestCount - 1);
        }
    };

    const increaseGuest = () => {
        setGuestCount(guestCount + 1);
    };

    const handleSubmit = async () => {
        setError("");

        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName) {
            setError("Nama wajib diisi.");
            return;
        }

        if (!status) {
            setError("Silakan pilih status kehadiran.");
            return;
        }

        if (guestCount < 0) {
            setError("Jumlah tamu tidak boleh kurang dari 0.");
            return;
        }

        if (!trimmedMessage) {
            setError("Ucapan wajib diisi.");
            return;
        }

        setLoading(true);

        const { data, error } = await supabase
            .from("rsvp_responses")
            .insert({
                name: trimmedName,
                status,
                guest_count: status === "Hadir" ? guestCount : 0,
                message: trimmedMessage,
            })
            .select()
            .single();

        setLoading(false);

        if (error) {
            console.error(error);
            setError("Gagal mengirim konfirmasi. Silakan coba lagi.");
            return;
        }

        alert("Konfirmasi berhasil dikirim!");

        onSave(data);
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

            <div className="relative w-full max-w-[430px] -translate-y-3 text-center">
                <h2 className="font-[Satisfy] text-[30px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>

                <p className="mt-6 px-5 text-[14px] leading-6 text-[#694653]">
                    Maukah Kamu hadir dipernikahan Kami?
                </p>

                <div className="mt-7 text-left">
                    <label className="mb-2 block text-sm text-[#694653]">
                        Nama
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masukkan nama Anda"
                        className="w-full rounded-full border border-[#694653] bg-transparent px-5 py-3 text-sm text-[#694653] outline-none placeholder:text-[#9d858b]"
                    />
                </div>

                <button
                    type="button"
                    onClick={() => setStatus("Hadir")}
                    className={`mt-7 w-full rounded-full py-3 text-sm transition ${
                        status === "Hadir"
                            ? "bg-[#694653] text-white"
                            : "border border-[#694653] text-[#694653]"
                    }`}
                >
                    Akan Hadir
                </button>

                <button
                    type="button"
                    onClick={() => setStatus("Berhalangan Hadir")}
                    className={`mt-4 w-full rounded-full py-3 text-sm transition ${
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
                                type="button"
                                onClick={decreaseGuest}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                −
                            </button>

                            <div className="flex h-10 w-24 items-center justify-center rounded-full border border-[#694653] text-lg font-semibold text-[#694653]">
                                {guestCount}
                            </div>

                            <button
                                type="button"
                                onClick={increaseGuest}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#694653] text-xl text-[#694653]"
                            >
                                +
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-8 text-left">
                    <label className="mb-2 block text-sm text-[#694653]">
                        Ucapan
                    </label>

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tuliskan ucapan untuk kedua mempelai..."
                        rows={4}
                        className="w-full resize-none rounded-2xl border border-[#694653] bg-transparent px-5 py-3 text-sm text-[#694653] outline-none placeholder:text-[#9d858b]"
                    />
                </div>

                {error && (
                    <p className="mt-4 text-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-8 w-full rounded-full bg-[#694653] py-3 text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Mengirim..." : "Mengonfirmasi"}
                </button>

                <button
                    type="button"
                    onClick={onCancel}
                    disabled={!confirmation.name}
                    className="mt-4 w-full rounded-full border border-[#694653] py-3 text-sm text-[#694653] transition hover:bg-[#694653] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Batal
                </button>
            </div>
        </section>
    );
}