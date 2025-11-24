"use client";

import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import type { PAGE_INFO_QUERYResult } from "@/sanity.types";

type Props = { pageInfo: NonNullable<PAGE_INFO_QUERYResult> };

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="absolute top-20 text-xl font-medium uppercase tracking-[20px] text-gray-700 dark:text-gray-200 md:top-24 md:text-2xl">
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
                className="-mb-24 flex-shrink-0 md:mb-0"
            >
                <Image
                    className="aspect-square w-52 rounded-full md:w-64 md:rounded-lg"
                    src={urlFor(pageInfo?.profilePic).url()}
                    alt={pageInfo?.name || "Profile"}
                    height={256}
                    width={256}
                    priority
                />
            </motion.div>
            <div className="space-y-5 px-0 md:space-y-10 md:px-10">
                <p className="text-xl font-semibold dark:text-gray-200 md:text-4xl">
                    Here is a <span className="underline decoration-green-500">little</span>{" "}
                    background
                </p>
                <p className="text-justify text-sm dark:text-gray-300 md:text-lg lg:text-lg">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}
