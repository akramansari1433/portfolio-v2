import { motion } from "framer-motion";
import React from "react";
import Skill from "../Skill";

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium">
                Skills
            </h3>
            <h3 className="absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 dark:text-gray-400 text-sm">
                Hover over a skill for current proficiency
            </h3>

            <div className="grid grid-cols-4 gap-4 md:gap-5">
                <Skill />
                <Skill />
                <Skill />
                <Skill />

                <Skill directionLeft />
                <Skill directionLeft />
                <Skill directionLeft />
            </div>
        </motion.div>
    );
}
