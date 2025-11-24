"use client";

import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import type { PageInfoQueryResult } from "@/sanity.types";

type Props = { pageInfo: NonNullable<PageInfoQueryResult> };

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
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <Image
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlForImage(pageInfo?.heroImage).url()}
                alt="Hero Image"
                height={500}
                width={500}
                priority
            />

            <div className="z-20">
                <h1 className="text-sm font-medium uppercase text-gray-600 dark:text-gray-200 pb-2 tracking-[10px] md:tracking-[15px]">
                    {pageInfo?.role}
                </h1>
                <p className="text-xl md:text-4xl font-semibold px-10 dark:text-white">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="green" />
                </p>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="px-6 font-semibold rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 dark:text-gray-200 hover:border-gray-600">
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className="px-6 font-semibold rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 dark:text-gray-200 hover:border-gray-600">
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className="px-6 font-semibold rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 dark:text-gray-200 hover:border-gray-600 ">
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className="px-6 font-semibold rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 dark:text-gray-200 hover:border-gray-600">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
