// src/components/Services.tsx
import Image from "next/image";

const services = [
    {
        title: "Anxiety & Stress Management",
        image: "/service-healthcare.jpg",
        description: `Dr. Blake provides personalized support to help individuals manage overwhelming anxiety, chronic worry, and daily stress. Using evidence-based methods such as cognitive-behavioral therapy (CBT) and mindfulness, she works collaboratively with clients to understand root causes, identify thought patterns, and develop healthier coping strategies. Whether you're facing work-related pressure, panic attacks, or generalized anxiety, Dr. Blake helps you build emotional resilience and regain a sense of calm and control in your life.`,
    },
    {
        title: "Relationship Counseling",
        image: "/service-immigrant.jpg",
        description: `Whether you're struggling with communication, trust issues, or navigating life transitions as a couple, Dr. Blake offers a safe, nonjudgmental space to explore your relationship dynamics. She helps individuals and couples strengthen emotional bonds, improve communication, and work through conflict in a constructive, respectful way. Her approach focuses on empathy, connection, and practical tools to foster intimacy and long-term relational health.`,
    },
    {
        title: "Trauma Recovery",
        image: "/service-trauma.jpg",
        description: `Healing from trauma takes time, courage, and the right kind of support. Dr. Blake specializes in trauma-informed care, helping clients process painful experiences such as abuse, loss, or past emotional wounds. With compassion and clinical skill, she helps individuals feel safe, empowered, and more in control of their lives. Her trauma recovery work includes grounding techniques, emotional regulation skills, and narrative processing to support long-term healing and post-traumatic growth.`,
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
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-64 md:w-[22.5rem] aspect-square object-cover rounded-full border-2 border-[#e5e5e5] shadow mb-8"
                                    style={{ background: "#fff" }}
                                    width={360}
                                    height={360}
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
