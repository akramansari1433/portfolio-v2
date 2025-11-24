"use client";

import { urlFor } from "@/sanity/lib/image";
import {
    ArrowTopRightOnSquareIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import type { PROJECTS_QUERYResult } from "@/sanity.types";

type Props = { projects: PROJECTS_QUERYResult };

export default function Projects({ projects }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -window.innerWidth : window.innerWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

            setCurrentIndex((prevIndex) => {
                if (direction === "left") {
                    return Math.max(prevIndex - 1, 0);
                } else {
                    return Math.min(prevIndex + 1, projects.length - 1);
                }
            });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
        >
            <h3 className="absolute top-20 text-xl font-medium uppercase tracking-[20px] text-gray-700 dark:text-gray-200 md:top-24 md:text-2xl">
                Projects
            </h3>

            <div
                className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500 dark:scrollbar-thumb-green-500"
                ref={scrollRef}
            >
                {projects?.map((project, i) => (
                    <div
                        key={i}
                        className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10 md:flex-row lg:p-20"
                    >
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="md:w-1/3"
                        >
                            <Image
                                className="h-36 w-auto object-scale-down md:h-64"
                                src={urlFor(project?.image).url()}
                                alt="Project Image"
                                height={500}
                                width={500}
                            />
                        </motion.div>

                        <div className="max-w-3xl space-y-5 px-0 md:w-1/2 md:px-10">
                            <p className="text-center text-lg font-semibold dark:text-gray-200 md:text-2xl lg:text-3xl">
                                {project?.title}
                            </p>
                            <div className="flex items-center justify-center gap-x-5">
                                {project?.technologies?.map((technology) => (
                                    <Image
                                        key={technology._id}
                                        className="h-8 w-8 object-cover lg:h-10 lg:w-10"
                                        src={urlFor(technology?.image).url()}
                                        alt={technology?.title || "Technology"}
                                        height={100}
                                        width={100}
                                    />
                                ))}
                            </div>
                            <p className="md:text-md text-justify text-sm dark:text-gray-300 lg:text-lg">
                                {project?.summary}
                            </p>
                            <div className="flex items-center justify-center gap-10 dark:text-white">
                                {project.liveLink && (
                                    <a
                                        aria-label="Preview Link"
                                        href={project.liveLink}
                                        target="_blank"
                                    >
                                        <ArrowTopRightOnSquareIcon className="h-8 w-8" />
                                    </a>
                                )}
                                {project.sourceCodeLink && (
                                    <a
                                        aria-label="Source Code"
                                        href={project.sourceCodeLink}
                                        target="_blank"
                                    >
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            className="h-8 w-8"
                                        >
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute left-1 top-1/2 z-30 -translate-y-1/2 transform md:left-5">
                <button
                    onClick={() => scroll("left")}
                    disabled={currentIndex === 0}
                    className={`rounded-full bg-white p-2 shadow-lg hover:opacity-75 dark:bg-gray-800 ${
                        currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                >
                    <ChevronLeftIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 md:h-8 md:w-8" />
                </button>
            </div>

            <div className="absolute right-1 top-1/2 z-30 -translate-y-1/2 transform md:right-5">
                <button
                    onClick={() => scroll("right")}
                    disabled={currentIndex === projects.length - 1}
                    className={`rounded-full bg-white p-2 shadow-lg hover:opacity-75 dark:bg-gray-800 ${
                        currentIndex === projects.length - 1 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                >
                    <ChevronRightIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 md:h-8 md:w-8" />
                </button>
            </div>

            <div className="absolute left-0 top-[20%] h-[500px] w-full -skew-y-12 bg-green-500/30 dark:bg-green-500/20 md:top-[30%]"></div>
        </motion.section>
    );
}
