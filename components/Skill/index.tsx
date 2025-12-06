"use client";

import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import type { Skill } from "@/sanity.types";

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
    if (!skill?.image) return null;

    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    className="h-16 w-16 rounded-full border-2 border-green-500 object-contain p-1 filter transition duration-300 ease-in-out group-hover:grayscale md:h-20 md:w-20"
                    src={urlFor(skill.image).url()}
                    alt={skill?.title || "Skill"}
                    height={100}
                    width={100}
                />
            </motion.div>
        </div>
    );
}
