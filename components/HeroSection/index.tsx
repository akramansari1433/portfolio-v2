"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Example() {
    return (
        <div className="bg-white dark:bg-black">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-200/20">
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl  shadow-gray-600/10 ring-1 ring-indigo-50 dark:bg-black sm:-mr-80 lg:-mr-96"
                    aria-hidden="true"
                />
                <div className="flex h-[calc(100vh-5rem)] items-center justify-center p-10">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <motion.div
                            animate={{
                                opacity: [0, 1],
                                x: [-100, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="mx-auto max-w-lg">
                                <h1 className="text-5xl font-semibold">
                                    Hello there!
                                </h1>
                                <p className="text-xl">
                                    Anim aute id magna aliqua ad ad non deserunt
                                    sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat fugiat
                                    aliqua. Anim aute id magna aliqua ad ad non
                                    deserunt sunt. Qui irure qui lorem cupidatat
                                    commodo.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="#"
                                        className="rounded-md border-2 border-white bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-black hover:bg-white hover:text-black"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-3.5 py-2.5 text-sm font-semibold leading-6"
                                    >
                                        My Work{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{
                                opacity: [0, 1],
                                x: [100, 0],
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="rounded-xl border border-black p-3">
                                <Image
                                    src="/images/profile.jpg"
                                    alt=""
                                    className="rounded-xl"
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
