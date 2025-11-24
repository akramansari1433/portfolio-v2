import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { client } from "@/sanity/lib/client";
import {
    EXPERIENCES_QUERY,
    PAGE_INFO_QUERY,
    PROJECTS_QUERY,
    SKILLS_QUERY,
    SOCIALS_QUERY,
} from "@/sanity/lib/queries";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const revalidate = 30;

async function getPageData() {
    const [socials, experiences, skills, projects, pageInfo] = await Promise.all([
        client.fetch(SOCIALS_QUERY),
        client.fetch(EXPERIENCES_QUERY),
        client.fetch(SKILLS_QUERY),
        client.fetch(PROJECTS_QUERY),
        client.fetch(PAGE_INFO_QUERY),
    ]);

    return {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
    };
}

export async function generateMetadata() {
    const { pageInfo } = await getPageData();

    return {
        title: pageInfo?.name || "Portfolio",
        description: "Portfolio",
        openGraph: {
            title: "Portfolio",
        },
    };
}

export default async function Home() {
    const { pageInfo, experiences, projects, skills, socials } = await getPageData();

    if (!pageInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div
            className="bg-gray-200 dark:bg-gray-900 text-black h-screen snap-y snap-mandatory
            overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
        >
            <Header socials={socials} />

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>

            {/* Experiences */}
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>

            {/* Skills */}
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            {/* Projects */}
            <section className="snap-start" id="projects">
                <Projects projects={projects} />
            </section>

            {/* Contact */}
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>

            <footer className="sticky bottom-5 w-full cursor-pointer">
                <div className="flex items-center justify-center">
                    <Link
                        aria-label="Home"
                        href="#hero"
                        className="p-2 border bg-gray-600 dark:bg-transparent rounded-full"
                    >
                        <ChevronUpIcon className="h-6 w-6 text-white animate-pulse" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}
