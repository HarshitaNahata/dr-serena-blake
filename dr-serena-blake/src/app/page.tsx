import Head from 'next/head';
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // <-- Import About section
import Services from '@/components/Services';
import Frequent from '@/components/Frequent';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jenifer&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TopBar />
      <Hero />
      <About />
      <Services />
      <Frequent />
      <Contact />
      <Footer />
    </>
  );
}
