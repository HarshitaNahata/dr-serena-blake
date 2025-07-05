// src/components/TopBar.tsx
export default function TopBar() {
    return (
        <header className="w-full bg-[#f7f5f0] py-6 px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Optional: Logo SVG */}
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="15" stroke="#b7c9c6" strokeWidth="2" />
                </svg>
                <div className="flex flex-col justify-center py-2 md:py-4">
                    <div className="text-lg md:text-xl font-serif text-[#5a5a3f]">
                        Dr. Serena Blake, PsyD
                    </div>
                    <div className="text-lg md:text-xl font-serif text-[#5a5a3f]">
                        Psychological Services
                    </div>
                </div>
            </div>
            {/* Optional: Hamburger menu for mobile */}
            <button className="md:hidden">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <rect y="4" width="24" height="2" rx="1" fill="#5a5a3f" />
                    <rect y="11" width="24" height="2" rx="1" fill="#5a5a3f" />
                    <rect y="18" width="24" height="2" rx="1" fill="#5a5a3f" />
                </svg>
            </button>
        </header>
    );
}
