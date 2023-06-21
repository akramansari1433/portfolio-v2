"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import {
    Bars3Icon,
    MoonIcon,
    SunIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

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
        <header className="sticky top-0 z-50 dark:bg-black">
            <nav
                className="flex items-center justify-between p-6 lg:px-8 font-mono"
                aria-label="Global"
            >
                <div className="">
                    <div className="w-10 h-10 flex justify-center items-center text-lg font-sans bg-black rounded-[50%] p-2 text-white">
                        AA
                    </div>
                </div>
                <div className="w-full flex justify-end md:hidden">
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
                                        ? "border-black"
                                        : "border-transparent"
                                } text-lg font-semibold border-b-2  hover:border-black`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="hidden md:flex">
                    <button
                        className="border p-2 rounded-full"
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
            <Dialog
                as="div"
                className="md:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex justify-end gap-3">
                        <button
                            className="border p-1 rounded-full"
                            onClick={() =>
                                theme === "light"
                                    ? setTheme("dark")
                                    : setTheme("light")
                            }
                        >
                            {theme === "dark" ? (
                                <MoonIcon className="h-6 w-6" />
                            ) : (
                                <SunIcon className="h-6 w-6" />
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
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`${
                                                isActive
                                                    ? "bg-black text-white"
                                                    : "text-black"
                                            } -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-black hover:text-white`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
