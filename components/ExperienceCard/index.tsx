"use client";

import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex drop-shadow-xl flex-col rounded-3xl items-center flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-gradient-to-tr from-gray-200 dark:from-gray-600  to-green-500/40 dark:to-green-600/20 p-5 md:p-8">
            <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
                <div className="mt-5 w-full px-0 md:px-10">
                    <p className="text-lg md:text-2xl font-light dark:text-white">{experience.jobTitle}</p>
                    <p className="font-bold text-md md:text-2xl mt-1 dark:text-white">{experience.company}</p>
                    <div className="flex overflow-auto scrollbar-none space-x-2 my-2">
                        {experience.technologies.map((technology) => (
                            <Image
                                key={technology._id}
                                className="h-10 w-10 object-cover"
                                src={urlForImage(technology.image.asset).url()}
                                alt={technology.title}
                                height={100}
                                width={100}
                            />
                        ))}
                    </div>
                    <p className="uppercase py-2 md:py-3 text-gray-600 dark:text-gray-300 text-sm md:text-lg">
                        {new Date(experience?.dateStarted).toDateString()} -{" "}
                        {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image
                        className="w-24 md:w-32 lg:w-36 h-auto rounded-full object-cover object-center"
                        src={urlForImage(experience.companyImage.asset).url()}
                        alt={experience.company}
                        height={150}
                        width={150}
                    />
                </motion.div>
            </div>

            <ul className="px-5 md:px-10 list-disc dark:text-white space-y-1 text-sm md:text-lg overflow-y-scroll">
                {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </article>
    );
}
