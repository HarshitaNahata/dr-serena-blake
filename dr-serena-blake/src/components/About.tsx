export default function About() {
    return (
        <section className="pt-32 pb-24 mt-12 bg-[#fdfbf7]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:gap-x-[69px] gap-y-16 px-6 md:px-8 lg:px-12">


                {/* Left Column: Text */}
                <div className="md:w-2/3 flex flex-col">
                    {/* Heading */}
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{
                            color: "#5a5a3f",
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        About Dr. Selena Blake
                    </h2>

                    {/* Image — visible in center on mobile */}
                    <div className="md:hidden mb-6 flex justify-center" >
                        <img
                            src="/serena-blake-headshot.jpg"
                            alt="Dr. Jennifer Hahm"
                            className="w-[300px] h-[360px] object-cover rounded-md shadow-md"
                            style={{
                                background: "#f7f5f0",
                                border: "1.5px solid #e5e5e5",
                            }}
                        />
                    </div>

                    {/* Paragraph Text with Animation */}
                    <div
                        className="space-y-6 text-base md:text-lg fade-in"
                        style={{
                            color: "#5e5e5e",
                            fontFamily: "'Georgia', 'Times New Roman', serif",
                            lineHeight: "1.8",
                            fontWeight: "300",
                            whiteSpace: "pre-wrap",
                            transitionTimingFunction: "ease",
                            transitionDuration: "0.9s",
                            transitionDelay: "0.144s",
                            opacity: 1,
                            transform: "translateY(0)",
                        }}
                    >
                        <p>
                            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, California, with over eight years of professional experience and more than 500 client sessions. She is deeply committed to walking alongside individuals as they navigate life’s emotional challenges, offering both warmth and clinical expertise in every session. Her work is grounded in empathy, authenticity, and the belief that healing begins in a space where clients feel truly seen and heard.
                        </p>
                        <p>
                            With a strong foundation in evidence-based practices, Dr. Blake integrates cognitive-behavioral therapy (CBT), mindfulness techniques, and trauma-informed care to address a range of issues—from anxiety and stress to relationship struggles and past emotional wounds. Her approach is personalized and collaborative, ensuring that each session is tailored to the client’s goals, pace, and comfort. She values building trust and helping clients develop effective coping strategies while fostering deeper self-awareness and resilience.
                        </p>
                        <p>
                            Whether meeting in-person at her serene Maplewood Drive office or virtually via secure Zoom sessions, Dr. Blake creates a safe, supportive environment where growth is not only possible—but encouraged. She works with adults from all walks of life and is passionate about helping clients reclaim their inner strength, improve emotional well-being, and live more connected, fulfilling lives.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image only on desktop */}
                <div className="hidden md:block md:w-[420px] mt-20">
                    <img
                        src="/serena-blake-headshot.jpg"
                        alt="Dr. Jennifer Hahm"
                        className="w-full h-auto object-cover rounded-md shadow-md"
                        style={{
                            background: "#f7f5f0",
                            border: "1.5px solid #e5e5e5",
                        }}
                    />
                </div>

            </div>
        </section>
    );
}
