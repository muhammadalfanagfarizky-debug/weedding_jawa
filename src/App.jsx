import Reveal from "./components/Reveal";
import Invitationlayout from "./layout/Invitationlayout";
import HeromobileSection from "./components/HeromobileSection";
import QuoteSection from "./components/QuoteSection";
import ProfileSection from "./components/ProfileSection";
import CowoSection from "./components/CowoSection";
import DaySection from "./components/DaySection";
import DresSection from "./components/DresSection";
import KonfirmasiSection from "./components/KonfirmasiSection";
import PotraitSection from "./components/PotraitSection";
import FootageSection from "./components/FootageSection";
import InstagramSection from "./components/InstagramSection";
import GiftSection from "./components/GiftSection";
import SendgiftSection from "./components/SendgiftSection";
import KedatanganSection from "./components/KedatanganSection";
import ClosingSection from "./components/ClosingSection";




export default function App() {
    return (

        <Invitationlayout>

            <Reveal>
                <HeromobileSection />
            </Reveal>

            <Reveal delay={100}>
                <QuoteSection />
            </Reveal>

            <Reveal delay={200}>
                <ProfileSection />
            </Reveal>

            <Reveal delay={300}>
                <CowoSection />
            </Reveal>

            <Reveal delay={400}>
                <DaySection />
            </Reveal>

            <Reveal delay={500}>
                <DresSection />
            </Reveal>

            <Reveal delay={600}>
                <KonfirmasiSection />
            </Reveal>

            <Reveal delay={700}>
                <PotraitSection />
            </Reveal>

            <Reveal delay={800}>
                <FootageSection />
            </Reveal>

            <Reveal delay={900}>
                <InstagramSection />
            </Reveal>

            <Reveal delay={1000}>
                <GiftSection />
            </Reveal>

            <Reveal delay={1100}>
                <SendgiftSection />
            </Reveal>

            <Reveal delay={1200}>
                <KedatanganSection />
            </Reveal>

            <Reveal direction="up" duration={1200}>
                <div className="min-h-screen">
                    <ClosingSection />
                </div>
            </Reveal>


        </Invitationlayout>
    );
}