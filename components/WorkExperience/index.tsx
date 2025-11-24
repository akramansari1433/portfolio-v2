"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../ExperienceCard";
import type { EXPERIENCES_QUERYResult } from "@/sanity.types";

type Props = { experiences: EXPERIENCES_QUERYResult };

export default function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
        >
            <h3 className="absolute top-20 text-xl font-medium uppercase tracking-[20px] text-gray-700 dark:text-gray-200 md:top-24 md:text-2xl">
                Experience
            </h3>

            <div className="h-flex flex max-h-[75%] w-screen snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin md:w-full">
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    );
}
