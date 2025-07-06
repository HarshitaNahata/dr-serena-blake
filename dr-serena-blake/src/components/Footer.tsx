import Link from "next/link";
// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer
            className="w-full bg-white text-center py-12 px-4"
            style={{
                fontFamily: "Georgia, serif",
                color: "#5a5a3f",
                fontSize: "1.1rem",
                lineHeight: "1.8",
            }}
        >
            <h2 className="text-xl font-semibold mb-2">
                Dr. Serena Blake, PsyD, Licensed Clinical Psychologist
            </h2>

            <p>
                <Link
                    href="mailto:serena@blakepsychology.com"
                    className="underline hover:text-[#b7c9c6]"
                >
                    serena@blakepsychology.com
                </Link>
            </p>

            <p>
                Phone:{" "}
                <Link href="tel:3235550192" className="underline">
                    (323) 555-0192
                </Link>{" "}
                Fax: (323) 555-0193
            </p>

            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

            {/* Office Hours added here */}
            <div className="mt-2">
                <p><strong>Office Hours:</strong></p>
                <p>In-person: Tue &amp; Thu, 10 AM–6 PM</p>
                <p>Virtual via Zoom: Mon, Wed &amp; Fri, 1 PM–5 PM</p>
            </div>

            <div className="mt-4 space-x-4">
                <Link href="/" className="underline">
                    Home
                </Link>
                <Link href="/privacy-policy" className="underline">
                    Privacy Policy
                </Link>
                <Link href="/good-faith-estimate" className="underline">
                    Good Faith Estimate
                </Link>
            </div>

            <div className="mt-6">
                <Link
                    href="/client-portal"
                    className="underline font-medium hover:text-[#b7c9c6]"
                >
                    Client Portal
                </Link>
            </div>

            <p className="mt-10 text-sm text-[#5a5a3f]">
                &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
            </p>
        </footer>
    );
}
