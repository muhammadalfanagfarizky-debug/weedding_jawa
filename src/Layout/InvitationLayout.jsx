import { useState } from "react";
import InvitationCover from "../components/InvitationCover";

function InvitationLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  return (
    <section id='invitation-layout'>
      <div className="hidden lg:flex h-screen bg-[#F7F0DE] overflow-hidden">
        <div className="flex-1 h-screen sticky top-0 overflow-hidden">
          <InvitationCover />
        </div>
        <div className=" h-screen overflow-y-auto bg-[#F7F0DE] shadow-2xl border-l border-[#E8DDC9]">
          <div className="w-97.5 mx-auto bg-[#F7F0DE]">
            {children}
          </div>
        </div>
      </div>
      <div className="lg:hidden overflow-hidden">
        {!isOpen ? (
          <div
            className={`transition-all duration-700 ${
              isClosing
                ? "opacity-0 scale-95"
                : "opacity-100 scale-100"
            }`}
          >
            <InvitationCover onOpen={handleOpen} />
          </div>
        ) : (
          <div className="animate-mobile-open">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default InvitationLayout;
