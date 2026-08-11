import { useEffect, useRef, useState } from "react";
import musicFile from "../assets/music/Maher_Zain-Rahmatun_LiAlameen.mp3";

export default function MusicPlayer({ isOpen }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (isOpen && audioRef.current) {
            audioRef.current
                .play()
                .then(() => setPlaying(true))
                .catch(() => {});
        }
    }, [isOpen]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={musicFile}
                loop
            />

            <button
                onClick={toggleMusic}
                className="fixed bottom-6 right-6 z-999 w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-xl flex items-center justify-center"
            >
                <span className={playing ? "animate-spin text-xl" : "text-xl"}>
                    🎵
                </span>
            </button>
        </>
    );
}