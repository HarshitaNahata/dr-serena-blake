"use client";
// src/components/Frequent.tsx
import { useState } from "react";

const faqs = [
    {
        question: "What are your fees?",
        answer:
            "Individual sessions are $200 and couples sessions are $240. Please contact for more details or sliding scale availability.",
    },
    {
        question: "Do you take insurance?",
        answer:
            "No, but a superbill is provided for self-submission to your insurance provider.",
    },
    {
        question: "Do you provide online counseling?",
        answer:
            "Yes, all virtual sessions are conducted via Zoom for your convenience and privacy.",
    },
    {
        question: "What are your office hours?",
        answer:
            "In-person: Tue & Thu, 10 AM–6 PM. Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM.",
    },
    {
        question: "What geographic areas do you serve?",
        answer:
            "In-person sessions are available in Los Angeles, CA. Virtual sessions are available to California residents.",
    },
    {
        question: "What services do you offer?",
        answer:
            "Anxiety & Stress Management, Relationship Counseling, and Trauma Recovery. See the Services section for details.",
    },
];

export default function Frequent() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">


            <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 font-sans"
                    style={{
                        color: "#5a5a3f",
                        letterSpacing: "-0.5px",
                    }}
                >
                    Frequently Asked Questions
                </h2>
                <div className="divide-y divide-[#5a5a3f] bg-[#c6e4e7] rounded-xl shadow-md">


                    {faqs.map((faq, idx) => (
                        <div key={faq.question}>
                            <button
                                className="w-full flex justify-between items-center py-6 px-6 text-left text-lg md:text-xl font-semibold font-sans text-[#444] focus:outline-none transition"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-content-${idx}`}
                            >
                                <span>{faq.question}</span>
                                <span className="ml-4">
                                    <svg
                                        className={`w-6 h-6 text-[#5a5a3f] transition-transform duration-300 ${openIndex === idx ? "rotate-45" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-content-${idx}`}
                                className={`px-6 pb-6 text-base md:text-lg text-[#5e5e5e] font-sans transition-all duration-300 ease-in-out ${openIndex === idx
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                                style={{
                                    lineHeight: "1.7",
                                }}
                                aria-hidden={openIndex !== idx}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
