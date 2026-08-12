import { useEffect, useRef } from "react";
import { useMusic } from "../context/MusicContext";
import BackgroundMusic from "../assets/music/Maher_Zain-Rahmatun_LiAlameen.mp3";
import VinylRecord from "../assets/images/vinyl-record.png";
import Tonearm from "../assets/images/tonearm.png";

function MusicPlayer() {
  const audioRef = useRef(null);
  const hasAutoPlayed = useRef(false);

  const {
    isPlaying,
    toggleMusic,
    isInvitationOpened,
    isDesktop,
  } = useMusic();

  useEffect(() => {
    if (!isInvitationOpened || hasAutoPlayed.current) return;

    hasAutoPlayed.current = true;

    if (!isPlaying) {
      toggleMusic();
    }
  }, [isInvitationOpened]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.log("Audio belum dapat diputar:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  if (isDesktop && isInvitationOpened) {
    return null;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={BackgroundMusic}
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Matikan background music"
            : "Nyalakan background music"
        }
        className="fixed bottom-6 right-6 z-9999 h-15 w-15 cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2">
            <img
              src={VinylRecord}
              alt="Music"
              className={`h-full w-full object-contain ${
                isPlaying
                  ? "animate-[spin_2.5s_linear_infinite]"
                  : ""
              }`}
            />
          </div>

          <img
            src={Tonearm}
            alt=""
            className={`absolute -right-3 -top-1 h-15 w-10 origin-top-right object-contain transition-transform duration-500 ease-in-out ${
              isPlaying ? "rotate-18" : "rotate-[-8deg]"
            }`}
          />
        </div>
      </button>
    </>
  );
}

export default MusicPlayer;