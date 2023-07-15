import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

export default function Home() {
    return (
        <div
            className="bg-gray-200 text-black h-screen snap-y snap-mandatory
            overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
        >
            <Header />
            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero />
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About />
            </section>
        </div>
    );
}
