import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SocialIcon } from "react-social-icons";

const defaultSocials = [
    {
        title: "Github",
        url: "https://github.com/akramansari1433",
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/akram-ansari-2474ab156/",
    },
];

export default function Header() {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
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
                {defaultSocials.map((social, idx) => (
                    <SocialIcon
                        key={idx}
                        url={social.url}
                        fgColor={theme === "dark" ? "white" : "gray"}
                        bgColor="transparent"
                    />
                ))}
                <button className="flex  flex-row items-center " onClick={() => router.push("#contact")}>
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor={theme === "dark" ? "white" : "gray"}
                        bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400 dark:text-gray-200">
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
                    className="border-2 p-1 border-gray-300 rounded-full text-gray-400 dark:text-white"
                    onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
                >
                    {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
            </motion.div>
        </header>
    );
}
