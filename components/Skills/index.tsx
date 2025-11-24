"use client";

import { motion } from "framer-motion";
import React from "react";
import Skill from "../Skill";
import type { SKILLS_QUERYResult } from "@/sanity.types";

type Props = { skills: SKILLS_QUERYResult };

export default function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0 xl:px-10"
        >
            <h3 className="absolute top-20 text-xl font-medium uppercase tracking-[20px] text-gray-700 dark:text-gray-200 md:top-24 md:text-2xl">
                Skills
            </h3>
            <p className="absolute top-32 text-sm uppercase tracking-[3px] text-gray-500 dark:text-gray-400 md:top-36">
                Hover over a skill for current proficiency
            </p>

            <div className="grid grid-cols-4 gap-4 md:gap-5">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}

                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                    <Skill key={skill._id} skill={skill} directionLeft />
                ))}
            </div>
        </motion.div>
    );
}
