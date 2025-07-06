// src/components/Contact.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
    name: string;
    phone: string;
    email: string;
    message: string;
    time: string;
    agree: boolean;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
    });

    const [errors, setErrors] = useState<ErrorState>({});

    const validate = () => {
        const errs: ErrorState = {};
        if (!form.name) errs.name = "Name is required";
        if (!form.phone) errs.phone = "Phone is required";
        if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required";
        if (!form.message) errs.message = "Please tell us what brings you here";
        if (!form.time) errs.time = "Preferred time is required";
        if (!form.agree) errs.agree = "You must agree to be contacted";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const updatedValue = type === "checkbox" && "checked" in e.target
            ? (e.target as HTMLInputElement).checked
            : value;

        setForm((f) => ({
            ...f,
            [name]: updatedValue,
        }));
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted! (No backend, so this is just a demo.)");
        }
    };

    return (
        <section className="py-24 bg-[#f7f5f0]" id="contact">
            <div className="max-w-xl mx-auto px-6 md:px-8 lg:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-sans" style={{ color: "#5a5a3f", letterSpacing: "-0.5px" }}>
                    Contact Dr. Serena Blake
                </h2>
                <form className="bg-white rounded-2xl shadow-lg p-10 space-y-7" onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div>
                        <label className="block font-semibold mb-2 text-[#5a5a3f] font-sans">Name</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 font-sans text-black text-base focus:outline-none focus:ring-2 focus:ring-[#b7c9c6] transition"
                            autoComplete="off"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block font-semibold mb-2 text-[#5a5a3f] font-sans">Phone</label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 font-sans text-black text-base focus:outline-none focus:ring-2 focus:ring-[#b7c9c6] transition"
                            autoComplete="off"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-semibold mb-2 text-[#5a5a3f] font-sans">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 font-sans text-black text-base focus:outline-none focus:ring-2 focus:ring-[#b7c9c6] transition"
                            autoComplete="off"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block font-semibold mb-2 text-[#5a5a3f] font-sans">What brings you here?</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 font-sans text-black text-base focus:outline-none focus:ring-2 focus:ring-[#b7c9c6] transition"
                            rows={4}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block font-semibold mb-2 text-[#5a5a3f] font-sans">Preferred time to reach you</label>
                        <input
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="w-full border border-[#e5e5e5] rounded-lg px-4 py-3 font-sans text-black text-base focus:outline-none focus:ring-2 focus:ring-[#b7c9c6] transition"
                            autoComplete="off"
                        />
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>

                    {/* Agree */}
                    <div className="flex items-center">
                        <input
                            name="agree"
                            type="checkbox"
                            checked={form.agree}
                            onChange={handleChange}
                            className="mr-2 accent-[#b7c9c6] w-5 h-5"
                        />
                        <label className="font-sans text-[#5a5a3f]">I agree to be contacted</label>
                    </div>
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#c6e4e7] text-[#5a5a3f] font-bold py-4 rounded-full text-lg font-sans shadow-md hover:bg-[#b3d4d7] transition"
                    >
                        Send Message
                    </button>

                </form>

                {/* Contact Info */}
                <div className="mt-10 text-left text-[#5a5a3f] font-sans text-base flex items-start">
                    <span className="mr-2 text-lg">◎</span>
                    <p>
                        By clicking submit you consent to receive texts and emails from <strong>Dr. Selena Blake</strong>
                    </p>
                </div>

            </div>
        </section>
    );
}
