import { useState } from "react";
import ConfirmationResult from "./ConfirmationResult";
import ConfirmationForm from "./ConfirmationForm";

export default function KonfirmasiSection() {
    const [isEdit, setIsEdit] = useState(false);

    const [confirmation, setConfirmation] = useState({
        status: "Hadir",
        guest: 1,
    });

    const handleSave = (data) => {
        setConfirmation(data);
        setIsEdit(false);
    };

    return (
        <section className="relative flex w-full justify-center overflow-hidden">
            {!isEdit ? (
                <ConfirmationResult
                    confirmation={confirmation}
                    onEdit={() => setIsEdit(true)}
                />
            ) : (
                <ConfirmationForm
                    confirmation={confirmation}
                    onSave={handleSave}
                    onCancel={() => setIsEdit(false)}
                />
            )}
        </section>
    );
}