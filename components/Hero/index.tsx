"use client";

import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PAGE_INFO_QUERYResult } from "@/sanity.types";

type Props = { pageInfo: NonNullable<PAGE_INFO_QUERYResult> };

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, the name's Akram Ansari`,
            "I am a full-stack MERN developer",
            "Passionate about coding.",
            "Lifelong learner.",
            "Building awesome projects.",
            "Love problem-solving.",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <BackgroundCircles />

            <Image
                className="relative mx-auto h-32 w-32 rounded-full object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Hero Image"
                height={500}
                width={500}
                priority
            />

            <div className="z-20">
                <h1 className="pb-2 text-sm font-medium uppercase tracking-[10px] text-gray-600 dark:text-gray-200 md:tracking-[15px]">
                    {pageInfo?.role}
                </h1>
                <p className="px-10 text-xl font-semibold dark:text-white md:text-4xl">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="green" />
                </p>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="rounded-full border border-transparent px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gray-700 hover:border-gray-600 dark:text-gray-200">
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className="rounded-full border border-transparent px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gray-700 hover:border-gray-600 dark:text-gray-200">
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className="rounded-full border border-transparent px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gray-700 hover:border-gray-600 dark:text-gray-200">
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className="rounded-full border border-transparent px-6 py-2 text-sm font-semibold uppercase tracking-widest text-gray-700 hover:border-gray-600 dark:text-gray-200">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
