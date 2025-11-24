"use client";

import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { EXPERIENCES_QUERYResult } from "@/sanity.types";

type Props = { experience: EXPERIENCES_QUERYResult[0] };

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex w-72 flex-shrink-0 snap-center flex-col items-center rounded-3xl bg-gradient-to-tr from-gray-200 to-green-500/40 p-5 drop-shadow-xl dark:from-gray-600 dark:to-green-600/20 md:w-[600px] md:p-8 xl:w-[700px]">
            <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
                <div className="mt-5 w-full px-0 md:px-10">
                    <p className="text-lg font-light dark:text-white md:text-2xl">
                        {experience?.jobTitle}
                    </p>
                    <p className="text-md mt-1 font-bold dark:text-white md:text-2xl">
                        {experience?.company}
                    </p>
                    <div className="my-2 flex space-x-2 overflow-auto scrollbar-none">
                        {experience?.technologies?.map((technology) => (
                            <Image
                                key={technology._id}
                                className="h-10 w-10 object-cover"
                                src={urlFor(technology?.image).url()}
                                alt={technology?.title || "Technology"}
                                height={100}
                                width={100}
                            />
                        ))}
                    </div>
                    <p className="py-2 text-sm uppercase text-gray-600 dark:text-gray-300 md:py-3 md:text-lg">
                        {experience?.dateStarted && new Date(experience.dateStarted).toDateString()}{" "}
                        -{" "}
                        {experience?.isCurrentlyWorkingHere
                            ? "Present"
                            : experience?.dateEnded &&
                              new Date(experience.dateEnded).toDateString()}
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image
                        className="h-auto w-24 rounded-full object-cover object-center md:w-32 lg:w-36"
                        src={urlFor(experience?.companyImage).url()}
                        alt={experience?.company || "Company"}
                        height={150}
                        width={150}
                    />
                </motion.div>
            </div>

            <ul className="list-disc space-y-1 overflow-y-scroll px-5 text-sm dark:text-white md:px-10 md:text-lg">
                {experience?.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </article>
    );
}
