import QuoteSection from "./components/QuoteSection";
import ProfileSection from "./components/ProfileSection";
import CowoSection from "./components/CowoSection";
import DaySection from "./components/DaySection";


export default function App() {
    return (
        <div className="min-h-screen bg-[#ddd9d0] flex justify-center">

            <div className="w-100 overflow-hidden bg-[#f8f7f2]">

                <QuoteSection />

                <ProfileSection />

                <CowoSection />

                <DaySection />


            </div>

        </div>
    );
}