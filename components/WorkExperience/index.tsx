import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../ExperienceCard";

export default function WorkExperience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium">
                Experience
            </h3>

            <div className="w-screen md:w-full h-flex max-h-[75%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    );
}
