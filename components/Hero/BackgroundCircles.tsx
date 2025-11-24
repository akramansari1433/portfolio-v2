"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative flex items-center justify-center"
        >
            <div className="md:mt:52 absolute mt-64 h-[200px] w-[200px] animate-ping rounded-full border border-gray-500 opacity-30" />
            <div />
            <div className="md:mt:52 absolute mt-64 h-[300px] w-[300px] animate-ping rounded-full border border-gray-500 opacity-30" />
            <div />
            <div className="md:mt:52 absolute mt-64 h-[500px] w-[500px] animate-ping rounded-full border border-gray-500 opacity-30" />
            <div />
            <div className="md:mt:52 absolute mt-64 h-[510px] w-[510px] animate-pulse rounded-full border border-green-500 opacity-20 md:h-[650px] md:w-[650px]" />
            <div />
            <div className="md:mt:52 absolute mt-64 h-[800px] w-[800px] animate-ping rounded-full border border-gray-500 opacity-30" />
            <div />
        </motion.div>
    );
}
