import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";

export default function ConfirmationResult({
    confirmation,
    onEdit,
}) {
    return (
        <div className="relative w-full h-165 overflow-hidden">

            {/* Background */}
            <img
                src={bgProfile}
                alt=""
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Ornamen */}
            <img
                src={bgBatik}
                alt=""
                className="absolute top-0 left-1/2 w-100 -translate-x-1/2 z-10"
            />

            <div className="absolute top-44 left-0 right-0 z-20 text-center px-8">

                <h2 className="font-[Satisfy] text-[32px] text-[#694653]">
                    Konfirmasi Kehadiran
                </h2>

                <p className="mt-5 text-[13px] leading-6 text-[#6c5a55]">
                    Harap konfirmasikan kehadiran Anda sebelum,
                    <br />
                    <span className="font-semibold">12 Februari 2025</span>
                </p>

                <div className="mt-12">
                    <h3 className="text-[32px] font-semibold text-[#694653]">
                        {confirmation.status}
                    </h3>

                    <p className="mt-5 text-[14px] leading-7 text-[#6c5a55]">
                        {confirmation.status === "Hadir" ? (
                            <>
                                Yeyy, terima kasih sudah mengonfirmasi kehadiran.
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

                    <div className="mt-10 flex justify-center">
                        <button
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