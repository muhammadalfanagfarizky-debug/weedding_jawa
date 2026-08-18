import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import bgProfile from "../assets/images/bg-texture.png";
import bgBatik from "../assets/images/orn-35-min.png";
import { supabase } from "../lib/supabase";

export default function KedatanganSection() {
    const [wish, setWish] = useState("");
    const [wishes, setWishes] = useState([]);

    const API_URL =
        "https://script.google.com/macros/s/AKfycbxrPeO1GammPQiImA8CN8_NGiGuv9c5o-NMaqodGIrbPbmA2ZeiolS4GyQW-ERA2YZd/exec";

    const sanitizeText = (text) => {
        return String(text || "")
            .replace(/<[^>]*>/g, "")
            .trim();
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    useEffect(() => {
        let isMounted = true;

        const loadWishes = async () => {
            const { data, error } = await supabase
                .from("rsvp_responses")
                .select("id, name, message, created_at")
                .not("message", "is", null)
                .order("created_at", {
                    ascending: false,
                });

            if (error) {
                console.error("Gagal mengambil RSVP:", error);
                return;
            }

            if (!isMounted) return;

            const formattedData = (data || []).map((item) => ({
                id: `rsvp-${item.id}`,
                name: sanitizeText(item.name),
                message: sanitizeText(item.message),
                date: formatDate(item.created_at),
            }));

            setWishes(formattedData);
        };

        loadWishes();

        const channel = supabase
            .channel(`rsvp-wishes-${Date.now()}`)
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "rsvp_responses",
                },
                (payload) => {
                    console.log("DATA BARU DARI SUPABASE:", payload);

                    const item = payload.new;

                    if (!item.message) return;

                    const newWish = {
                        id: `rsvp-${item.id}`,
                        name: sanitizeText(item.name),
                        message: sanitizeText(item.message),
                        date: formatDate(item.created_at),
                    };

                    if (!isMounted) return;

                    setWishes((prev) => {
                        const alreadyExists = prev.some(
                            (wish) => wish.id === newWish.id
                        );

                        if (alreadyExists) {
                            return prev;
                        }

                        return [newWish, ...prev];
                    });
                }
            );

        channel.subscribe((status) => {
            console.log("Supabase Realtime:", status);
        });

        return () => {
            isMounted = false;
            supabase.removeChannel(channel);
        };
    }, []);

    const handleSend = async () => {
        if (!wish.trim()) {
            alert("Isi wish dulu");
            return;
        }

        const newWish = {
            id: `local-${Date.now()}`,
            name: "Guest",
            date: new Date().toLocaleString("id-ID"),
            message: sanitizeText(wish),
        };

        try {
            fetch(API_URL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    name: newWish.name,
                    date: newWish.date,
                    message: newWish.message,
                }),
            }).catch((error) => {
                console.error("Gagal mengirim ke Spreadsheet:", error);
            });

            // Langsung tampil di halaman
            setWishes((prev) => [
                newWish,
                ...prev,
            ]);

            setWish("");
        } catch (error) {
            console.error("Gagal mengirim wish:", error);
            alert("Wish gagal dikirim");
        }
    };

    const handleDelete = (index) => {
        setWishes((prev) =>
            prev.filter((_, i) => i !== index)
        );
    };

    return (
        <section
            className="relative flex min-h-140 w-full flex-col items-center overflow-hidden bg-cover bg-center px-4 pt-10"
            style={{
                backgroundImage: `url(${bgProfile})`,
            }}
        >
            <h2 className="text-center font-[Satisfy] text-[25px] text-[#694653]">
                Wedding Wish
            </h2>

            {/* INPUT WISH */}
            <div className="mt-4 w-full max-w-[320px]">
                <input
                    type="text"
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                    placeholder="Give you wish"
                    className="h-7 w-full rounded-full border border-[#b89198] bg-transparent px-3 text-[10px] text-[#8d6a74] outline-none placeholder:text-[#8d6a74]"
                />

                <button
                    type="button"
                    onClick={handleSend}
                    className="mt-3 h-5 w-full rounded-full bg-[#694653] text-[12px] text-white transition hover:opacity-90"
                >
                    Send
                </button>
            </div>

            {/* WISH LIST */}
            <div className="mt-8 flex w-full max-w-[320px] flex-col pb-24">
                {wishes.length === 0 ? (
                    <p className="text-center text-[10px] text-[#8d6a74]">
                        Belum ada ucapan.
                    </p>
                ) : (
                    wishes.map((item, index) => (
                        <div
                            key={item.id}
                            className="relative mb-10 w-full translate-y-5 rounded-lg bg-[#F1DEC8] px-3 py-2 text-[#8d6a74]"
                        >
                            <Trash2
                                onClick={() => handleDelete(index)}
                                size={12}
                                className="absolute right-3 top-2 cursor-pointer text-[#8d6a74]"
                            />

                            <p className="pr-6 text-[10px] font-medium">
                                {item.name}
                            </p>

                            <p className="text-[10px]">
                                {item.date}
                            </p>

                            <p className="mt-1 wrap-break-word text-[10px] leading-4">
                                {item.message}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <img
                src={bgBatik}
                alt=""
                className="pointer-events-none absolute bottom-0 left-0 z-10 w-full"
            />
        </section>
    );
}