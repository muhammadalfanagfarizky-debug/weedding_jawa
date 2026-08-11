import { useState } from "react";

import bgProfile from "../assets/images/bg-texture.png";
import qrImage from "../assets/images/qr.png";

export default function GiftSection() {

    const API_URL =
        "https://script.google.com/macros/s/AKfycbxDHyaUvbv9Ow3wMF55SVsvzBdKV5ijBQtylVqi7joIYqLjXXaMAIY26WNLtvQqBkT_/exec";


    const [showQR, setShowQR] = useState(false);


    const [form, setForm] = useState({
        name: "",
        accountName: "",
        message: "",
        amount: "",
    });


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };


    const handleGiftSend = () => {

        fetch(API_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({

                name: form.name,

                accountName: form.accountName,

                message: form.message,

                amount: form.amount

            })
        });


        alert("Berhasil dikirim");

    };


    return (
        <section className="relative flex w-full justify-center overflow-hidden">

            <div className="relative min-h-165 w-full">

                <img
                    src={bgProfile}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />


                <div className="absolute left-0 right-0 top-15.5 z-40 text-center">

                    <h2 className="font-[Satisfy] text-[25px] text-[#694653]">
                        Wedding Gift
                    </h2>


                    <p className="mt-5 px-8 text-[10px] leading-6 text-[#6c5a55]">
                        Doa restu dan kehadiran Anda di acara pernikahan Kami sudah cukup bagi
                    </p>


                    <p className="mt-5 px-8 text-[10px] leading-2 text-[#6c5a55]">
                        Kami. Namun jika Anda ingin memberikan kado Kami menyediakan Amplop
                    </p>


                    <p className="mt-5 px-8 text-[10px] leading-5 text-[#6c5a55]">
                        Digital yang dapat Anda transfer ke rekening berikut ini.
                    </p>

                </div>



                <div className="absolute left-0 right-0 top-65 flex justify-center px-4">

                    <div className="w-75 overflow-hidden rounded-md bg-white shadow-sm">


                        {showQR ? (

                            <div className="flex flex-col items-center px-7 py-10">

                                <h2 className="text-[14px] font-semibold text-[#8d6a74]">
                                    Scan QR Code
                                </h2>


                                <img
                                    src={qrImage}
                                    alt="QR Code"
                                    className="mt-5 w-40"
                                />


                                <p className="mt-5 text-center text-[11px] text-[#8d6a74]">
                                    Silakan scan QR Code untuk melakukan transfer
                                </p>


                                <button
                                    onClick={() => setShowQR(false)}
                                    className="mt-8 h-8 w-full rounded-md bg-[#F1DDC8] text-[13px] font-semibold text-[#8d6a74]"
                                >
                                    Kembali
                                </button>

                            </div>


                        ) : (

                            <>

                                <div className="px-7 pb-6 pt-4">

                                    <h2 className="text-center text-[14px] font-semibold text-[#8d6a74]">
                                        Pilih bank tujuan
                                    </h2>


                                    <div className="flex justify-center">

                                        <select className="mt-3 h-5 w-60 rounded-md border border-[#b89198] indent-3 text-left text-[10px] font-semibold text-[#8d6a74]">

                                            <option>
                                                BANK BCA
                                            </option>

                                        </select>

                                    </div>


                                    <div className="mt-4 text-center text-[#8d6a74]">

                                        <p className="text-[13px] font-semibold">
                                            BANK BRI (002)
                                        </p>


                                        <p className="mt-1 text-[12px]">
                                            Nomor Rekening :
                                            <span className="font-semibold">
                                                {" "}0212345678262
                                            </span>
                                        </p>


                                        <p className="mt-1 text-[12px]">
                                            Nama pengguna
                                            <span className="font-semibold">
                                                {" "}Sarah
                                            </span>
                                        </p>

                                    </div>


                                    <p className="mt-6 text-center text-[13px] font-semibold text-[#8d6a74]">
                                        Isi formulir dibawah ini, silakan
                                    </p>


                                    <div className="mt-5 flex flex-col items-center space-y-3">

                                        <div className="mx-auto w-55">

                                            <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                                Nama
                                            </label>


                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="h-5 w-full rounded-md border border-[#b89198] pl-1! pr-2! text-sm font-normal not-italic text-[#8d6a74] outline-none"
                                            />

                                        </div>
                                        <div className="mx-auto w-55">

                                            <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                                Nama pemilik akun:
                                            </label>


                                            <input
                                                type="text"
                                                name="accountName"
                                                value={form.accountName}
                                                onChange={handleChange}
                                                className="h-5 w-full rounded-md border border-[#b89198] pl-1! pr-2! text-sm font-normal not-italic text-[#8d6a74] outline-none"
                                            />

                                        </div>

                                        <div className="mx-auto w-55">

                                            <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                                Pesan
                                            </label>


                                            <input
                                                type="text"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                className="h-5 w-full rounded-md border border-[#b89198] pl-1! pr-2! text-sm font-normal not-italic text-[#8d6a74] outline-none"
                                            />

                                        </div>

                                        <div className="mx-auto w-55">

                                            <label className="mb-1 block text-left text-[11px] font-semibold text-[#8d6a74]">
                                                Jumlah
                                            </label>


                                            <input
                                                type="text"
                                                name="amount"
                                                value={form.amount}
                                                onChange={handleChange}
                                                className="h-5 w-full rounded-md border border-[#b89198] pl-1! pr-2! text-sm font-normal not-italic text-[#8d6a74] outline-none"
                                            />

                                        </div>


                                    </div>


                                </div>



                                <div className="mt-6">

                                    <button
                                        onClick={() => {
                                            handleGiftSend();
                                            setShowQR(true);
                                        }}
                                        className="h-8 w-full bg-[#F1DDC8] text-[14px] font-semibold text-[#8d6a74]"
                                    >
                                        Berikutnya ❯
                                    </button>

                                </div>


                            </>

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}