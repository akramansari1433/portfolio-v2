"use client";

import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { PageInfoQueryResult } from "@/sanity.types";

type Props = { pageInfo: NonNullable<PageInfoQueryResult> };

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium">
                About
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                // viewport={{ once: true }}
                className="-mb-24 md:mb-0 flex-shrink-0 "
            >
                <Image
                    className="w-52 md:w-64 rounded-full md:rounded-lg aspect-square"
                    src={urlForImage(pageInfo?.profilePic).url()}
                    alt={pageInfo?.name || "Profile"}
                    height={256}
                    width={256}
                    priority
                />
            </motion.div>
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 ">
                <p className="text-xl md:text-4xl font-semibold dark:text-gray-200">
                    Here is a <span className=" underline decoration-green-500">little</span> background
                </p>
                <p className="text-sm md:text-lg lg:text-lg text-justify dark:text-gray-300">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}
