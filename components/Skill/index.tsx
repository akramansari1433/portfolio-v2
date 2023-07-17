import React from "react";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    className="rounded-full p-1 border-2 border-green-500 object-contain w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
                    src={urlForImage(skill.image.asset).url()}
                    alt={skill.title}
                    height={100}
                    width={100}
                />
            </motion.div>

            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl md:text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
                </div>
            </div>
        </div>
    );
}
