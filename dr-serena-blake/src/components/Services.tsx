// src/components/Services.tsx

const services = [
    {
        title: "Therapy for Healthcare Providers and Students",
        image: "/service-healthcare.jpg",
        description: `The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you’re in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.`,
    },
    {
        title: "Therapy for Trauma and Grief",
        image: "/service-trauma.jpg",
        description: `Life’s challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.`,
    },
    {
        title: "Therapy for Second Generation Individuals in Immigrant Families",
        image: "/service-immigrant.jpg",
        description: `Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.`,
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-[#f7f5f0]">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center mb-16 font-sans"
                    style={{
                        color: "#5a5a3f",
                        letterSpacing: "-0.5px",
                    }}
                >
                    Areas of Focus
                </h2>

                <div className="flex flex-col gap-20 md:flex-row md:justify-between md:items-start">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`w-full md:flex-1 flex flex-col items-center text-center font-sans h-full
                                ${index === 0
                                    ? "md:mr-20 md:-ml-12"
                                    : index === 1
                                        ? "md:mx-6"
                                        : "md:ml-20 md:-mr-12"
                                }`}
                        >
                            <div className="flex flex-col items-center justify-start h-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-64 md:w-[22.5rem] aspect-square object-cover rounded-full border-2 border-[#e5e5e5] shadow mb-8"
                                    style={{ background: "#fff" }}
                                />


                                <h3
                                    className="text-xl md:text-2xl font-bold mb-4"
                                    style={{
                                        color: "#5a5a3f",
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="text-base md:text-lg"
                                    style={{
                                        color: "#5e5e5e",
                                        lineHeight: "1.7",
                                        fontWeight: 400,
                                    }}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
