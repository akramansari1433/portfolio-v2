import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { client } from "@/sanity/lib/client";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Link from "next/link";
import React from "react";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
    return (
        <>
            <Head>
                <title>{pageInfo.name}</title>
                <meta name="description" content="Portfolio" />
                <meta property="og:title" content="Portfolio" key="title" />
            </Head>
            <div
                className="h-screen snap-y snap-mandatory
            overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
            >
                {/* Hero */}
                <section id="hero" className="snap-start">
                    <Hero pageInfo={pageInfo} socials={socials} />
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
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const socialsQuery = groq`
    *[_type == 'social']`;

    const pageInfoQuery = groq`
    *[_type == 'pageInfo'][0]
    `;

    const skillQuery = groq`
    *[_type == 'skill']
    `;

    const projectQuery = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
    `;

    const experienceQuery = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
    `;

    const socials: Social[] = await client.fetch(socialsQuery);
    const experiences: Experience[] = await client.fetch(experienceQuery);
    const skills: Skill[] = await client.fetch(skillQuery);
    const projects: Project[] = await client.fetch(projectQuery);
    const pageInfo: PageInfo = await client.fetch(pageInfoQuery);

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },
        revalidate: 30,
    };
};
