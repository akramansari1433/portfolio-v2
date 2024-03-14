import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { SocialIcon } from "react-social-icons";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

type Props = { pageInfo: PageInfo; socials: Social[] };

export default function Hero({ pageInfo, socials }: Props) {
    const { theme } = useTheme();
    const [text, count] = useTypewriter({
        words: [
            "I am a full-stack MERN developer.",
            "Passionate about coding.",
            "Lifelong learner.",
            "Building awesome projects.",
            "Love problem-solving.",
        ],
        loop: true,
        delaySpeed: 3000,
    });

    return (
        <div className="h-screen w-full flex items-center overflow-hidden max-w-7xl mx-auto">
            <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-0">
                <div className="w-full md:w-2/3 flex flex-col justify-center gap-5 px-10 md:px-20">
                    <div>
                        <h1 className="text-5xl font-bold md:tracking-widest dark:text-white">{pageInfo.name}</h1>
                        <h3 className="tracking-[8px] uppercase text-green-700 dark:text-green-500">{pageInfo.role}</h3>
                    </div>
                    <p className="text-lg md:text-2xl font-semibold dark:text-white">
                        <span className="mr-3">{text}</span>
                        <Cursor cursorColor="orange" />
                    </p>
                    <div className="mt-5 flex gap-5">
                        <button className="px-3 py-2 dark:text-white bg-green-500 dark:bg-green-700 font-semibold tracking-widest rounded-md">
                            Resume
                        </button>
                        <button className="px-3 py-2 dark:text-white border border-green-700 font-semibold tracking-widest rounded-md">
                            Contact Me →
                        </button>
                    </div>
                    <div>
                        {/* React social icons */}
                        {socials.map((social, idx) => (
                            <SocialIcon
                                key={idx}
                                url={social.url}
                                fgColor={theme === "dark" ? "white" : "#4b5563"}
                                bgColor="transparent"
                            />
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, filter: "grayscale(100%)", x: 100 }}
                    whileInView={{ opacity: 1, filter: "grayscale(0%)", x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="w-auto flex justify-center md:justify-start "
                >
                    <Image
                        className="object-cover h-48 w-48 md:h-56 md:w-56 rounded-md"
                        src={urlForImage(pageInfo?.heroImage.asset).url()}
                        alt="Hero Image"
                        height={300}
                        width={300}
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}
