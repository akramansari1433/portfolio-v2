"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";
import { SocialIcon } from "react-social-icons";
import type { SOCIALS_QUERYResult } from "@/sanity.types";

type Props = {
    socials: SOCIALS_QUERYResult;
};

export default function Header({ socials }: Props) {
    const { theme, setTheme } = useTheme();

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center justify-between p-5 ">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className=" flex flex-row items-center"
            >
                {/* React social icons */}
                {socials.map((social, idx) => (
                    <SocialIcon
                        key={idx}
                        url={social?.url}
                        fgColor={theme === "dark" ? "white" : "#4b5563"}
                        bgColor="transparent"
                    />
                ))}
                <button
                    id="get-in-touch-button"
                    aria-label="Get in touch"
                    className="flex  flex-row items-center "
                    onClick={scrollToContact}
                >
                    <SocialIcon
                        role='button'
                        className="cursor-pointer"
                        network="email"
                        fgColor={theme === "dark" ? "white" : "#4b5563"}
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-600 dark:text-gray-200">
                        Get in touch
                    </p>
                </button>
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0.5,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >
                <button
                    id="toggle-theme"
                    aria-label="Toggle Theme"
                    className="border-2 p-1 border-gray-400 rounded-full text-gray-600 dark:text-white"
                    onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
                >
                    {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
            </motion.div>
        </header>
    );
}
