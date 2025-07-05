'use client';

export default function Hero() {
    return (
        // <section className="relative h-[85vh] max-w-7xl mx-auto my-12 overflow-hidden shadow-md">
        <section className="relative h-[85vh] w-full max-w-7xl mx-auto md:mt-0 overflow-hidden px-4 sm:px-6 md:px-0">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover -z-10"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/hero-fallback.jpg"
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/25 -z-10" />

            {/* Content */}
            {/* <div className="relative z-10 text-center text-white px-4 flex flex-col justify-center items-center h-full font-serif"> */}
            <div className="relative z-10 text-center text-white px-2 sm:px-4 flex flex-col justify-center items-center h-full font-serif">
                <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-4 drop-shadow-lg">
                    Psychological Care for <br />
                    <span className="block mt-2">Change, Insight, and Well-Being</span>
                </h1>
                <p className="text-md md:text-lg mb-8 font-light max-w-2xl drop-shadow">
                    Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
                </p>
                <a
                    href="#contact"
                    className="text-white text-sm font-semibold tracking-wide uppercase w-[280px] h-[60px] md:w-[380px] md:h-[72px] flex items-center justify-center shadow-md hover:bg-[#b0cbc8] transition-all font-sans lens-shape"
                >
                    Schedule a Consultation
                </a>

                <style jsx>{`
  .lens-shape {
    background-color: #bfd2cc;
    clip-path: path(
      "M10,30 C10,8 55,0 140,0 C225,0 270,8 270,30 C270,52 225,60 140,60 C55,60 10,52 10,30 Z"
    );
  }

  @media (min-width: 768px) {
    .lens-shape {
      clip-path: path(
        "M10,36 C10,10 70,0 190,0 C310,0 370,10 370,36 C370,62 310,72 190,72 C70,72 10,62 10,36 Z"
      );
    }
  }
`}</style>


            </div>
        </section>
    );
}
