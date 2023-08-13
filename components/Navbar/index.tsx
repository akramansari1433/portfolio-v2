import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type Props = {};

const navItems = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Projects",
        link: "#projects",
    },
];

export default function Navbar({}: Props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    return (
        <div className="sticky top-0 h-20">
            {/* desktop nav */}
            <nav className="flex items-center justify-between p-5">
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        scale: [0.5, 1],
                        opacity: [0, 1],
                    }}
                >
                    <Image
                        className="rounded-full object-cover"
                        src="/images/profile2.gif"
                        alt="logo"
                        height={50}
                        width={50}
                    />
                </motion.div>
                <div className="hidden md:flex gap-5">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.link}
                            className="px-3 py-1.5 font-semibold tracking-widest uppercase dark:text-white border-b-2 border-transparent hover:border-primary-500"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:block">
                    <button
                        id="toggle-theme"
                        aria-label="Toggle Theme"
                        className="border-2 p-1 border-gray-400 rounded-full text-gray-600 dark:text-white"
                        onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
                    >
                        {theme === "dark" ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                </div>
                <div className="md:hidden fixed top-6 right-6 z-50">
                    <motion.button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                    </motion.button>
                </div>
            </nav>
        </div>
    );
}
