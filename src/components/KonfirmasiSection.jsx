import { useState } from "react";
import ConfirmationResult from "./ConfirmationResult";
import ConfirmationForm from "./ConfirmationForm";

export default function KonfirmasiSection() {
    const [isEdit, setIsEdit] = useState(true);

    const [confirmation, setConfirmation] = useState(null);

    const handleSave = (data) => {
        setConfirmation(data);
        setIsEdit(false);
    };

    return (
        <section className="relative flex w-full justify-center overflow-hidden">
            {!isEdit && confirmation ? (
                <ConfirmationResult
                    confirmation={confirmation}
                    onEdit={() => setIsEdit(true)}
                />
            ) : (
                <ConfirmationForm
                    confirmation={
                        confirmation || {
                            name: "",
                            status: "Hadir",
                            guest_count: 1,
                            message: "",
                        }
                    }
                    onSave={handleSave}
                    onCancel={() => {
                        if (confirmation) {
                            setIsEdit(false);
                        }
                    }}
                />
            )}
        </section>
    );
}