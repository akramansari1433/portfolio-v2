"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
    Bars3Icon,
    MoonIcon,
    SunIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 h-20 bg-white dark:bg-black">
            <nav
                className="flex items-center justify-between p-6 font-mono lg:px-8"
                aria-label="Global"
            >
                <Link href={"/"}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-black dark:bg-white p-2 font-sans text-lg text-white dark:text-black">
                        AA
                    </div>
                </Link>
                <div className="flex w-full justify-end md:hidden">
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden md:flex md:gap-x-12">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${
                                    isActive
                                        ? "border-black dark:border-white"
                                        : "border-transparent"
                                } border-b-2 px-2 py-1 text-lg font-semibold  hover:border-black`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden md:flex">
                    <button
                        className="rounded-full border p-2"
                        onClick={() =>
                            theme === "light"
                                ? setTheme("dark")
                                : setTheme("light")
                        }
                    >
                        {theme === "dark" ? (
                            <MoonIcon className="h-5 w-5" />
                        ) : (
                            <SunIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </nav>
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-white dark:bg-black p-6 font-mono md:hidden">
                    <div className="flex items-center justify-end gap-3">
                        <button
                            className="rounded-full border p-2"
                            onClick={() =>
                                theme === "light"
                                    ? setTheme("dark")
                                    : setTheme("light")
                            }
                        >
                            {theme === "dark" ? (
                                <MoonIcon className="h-5 w-5" />
                            ) : (
                                <SunIcon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <motion.div
                            className="space-y-1"
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {navigation.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 200 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className={`${
                                                isActive
                                                    ? "bg-black dark:bg-white text-white dark:text-black"
                                                    : ""
                                            } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-black hover:text-white`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            )}
        </header>
    );
}
