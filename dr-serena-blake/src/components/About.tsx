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
                        About Dr. Jennifer Hahm
                    </h2>

                    {/* Image — visible in center on mobile */}
                    <div className="md:hidden mb-6 flex justify-center">
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
                            Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
                        </p>
                        <p>
                            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
                        </p>
                        <p>
                            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
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
