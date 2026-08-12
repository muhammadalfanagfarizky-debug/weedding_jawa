import { createContext, useContext, useEffect, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  const openInvitation = () => {
    setIsInvitationOpened(true);
    setIsPlaying(true);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        toggleMusic,
        isInvitationOpened,
        openInvitation,
        isDesktop,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}