import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";

export default function ConfirmationResult({
    confirmation,
    onEdit,
}) {
    return (
        <div className="relative h-165 w-full overflow-hidden">

            <img
                src={bgProfile}
                alt=""
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />

            <img
                src={bgBatik}
                alt=""
                className="absolute left-1/2 top-0 z-10 w-100 -translate-x-1/2"
            />

            <div className="absolute left-0 right-0 top-44 z-20 px-8 text-center">

                <h2 className="font-[Satisfy] text-[32px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>

                <p className="mt-5 text-[13px] leading-6 text-[#6c5a55]">
                    Harap konfirmasikan kehadiran Anda sebelum,
                    <br />
                    <span className="font-semibold">
                        12 Februari 2025
                    </span>
                </p>

                <div className="mt-12">

                    <p className="text-[14px] text-[#6c5a55]">
                        Terima kasih,
                    </p>

                    <h3 className="mt-2 text-[28px] font-semibold text-[#694653]">
                        {confirmation.name}
                    </h3>

                    <h3 className="mt-5 text-[32px] font-semibold text-[#694653]">
                        {confirmation.status}
                    </h3>

                    {confirmation.status === "Hadir" && (
                        <p className="mt-3 text-[14px] text-[#6c5a55]">
                            Jumlah tamu: {confirmation.guest_count}
                        </p>
                    )}

                    <p className="mt-5 text-[14px] leading-7 text-[#6c5a55]">
                        {confirmation.status === "Hadir" ? (
                            <>
                                Yeyy, terima kasih sudah mengonfirmasi
                                kehadiran.
                                <br />
                                Sampai bertemu di hari bahagia kami.
                            </>
                        ) : (
                            <>
                                Terima kasih telah memberikan konfirmasi.
                                <br />
                                Semoga kita dapat bertemu di lain kesempatan.
                            </>
                        )}
                    </p>

                    <p className="mt-6 text-[13px] italic leading-6 text-[#6c5a55]">
                        "{confirmation.message}"
                    </p>

                    <div className="mt-10 flex justify-center">
                        <button
                            type="button"
                            onClick={onEdit}
                            className="w-64 rounded-full bg-[#694653] py-3 text-white transition hover:opacity-90"
                        >
                            Ubah
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}