import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div
            className="bg-gray-200 dark:bg-gray-900 text-black h-screen snap-y snap-mandatory
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

            {/* Experiences */}
            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section className="snap-start" id="projects">
                <Projects />
            </section>

            {/* Contact */}
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <div className="p-2 border bg-gray-400 dark:bg-transparent rounded-full">
                            <ChevronUpIcon className="h-6 w-6 text-white animate-pulse" />
                        </div>
                    </div>
                </footer>
            </Link>
        </div>
    );
}
