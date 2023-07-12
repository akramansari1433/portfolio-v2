import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-bold">About Me.</h1>
            <div className="my-10 grid grid-cols-1 gap-y-10 md:grid-cols-2">
                <div className="flex h-full w-full items-center justify-center">
                    <p className="text-3xl font-light leading-10 text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam obcaecati tempora dolorum
                        aperiam assumenda nihil praesentium blanditiis? Veritatis qui quisquam ab blanditiis!
                        Repudiandae ipsa quam, assumenda aspernatur porro nam!
                    </p>
                </div>
                <div className="flex w-full justify-center">
                    <div className="rounded-xl border border-black p-3 dark:border-white">
                        <Image
                            src="/images/profile.jpg"
                            alt=""
                            className="rounded-xl"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="my-10">
                <h2 className="w-fit border-b-2 text-3xl font-semibold">Skills</h2>
                <div className="py-5 flex flex-wrap gap-3">
                    <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                        <p className="tracking-wider text-white dark:text-black">HTML</p>
                    </div>
                    <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                        <p className="tracking-wider text-white dark:text-black">CSS</p>
                    </div>
                    <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                        <p className="tracking-wider text-white dark:text-black">Javascript</p>
                    </div>
                    <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                        <p className="tracking-wider text-white dark:text-black">React</p>
                    </div>
                    <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                        <p className="tracking-wider text-white dark:text-black">Node</p>
                    </div>
                </div>
            </div>

            <div className="my-10">
                <h2 className="w-fit border-b-2 text-3xl font-semibold">Experience</h2>
                <div className="flex flex-col gap-10 py-5">
                    <div className="flex max-w-xl flex-col gap-x-5 md:flex-row">
                        <div className="">
                            <div className="flex flex-row gap-x-3">
                                <span className="text-lg">2022</span>
                                <span>-</span>
                                <span className="text-lg">Present</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-1">
                                <p className="text-xl font-semibold">Company Name</p>
                                <p className="text-lg font-medium">Designation</p>
                                <p className="text-md mt-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad praesentium
                                    obcaecati doloribus sit aut perferendis voluptatem voluptas illo nesciunt delectus
                                    qui pariatur cum dolores error tempore repudiandae quas possimus.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">HTML</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">CSS</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">Javascript</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">React</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">Node</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-w-xl flex-col gap-x-5 md:flex-row">
                        <div className="">
                            <div className="flex flex-row gap-x-3">
                                <span className="text-lg">2022</span>
                                <span>-</span>
                                <span className="text-lg">Present</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-1">
                                <p className="text-xl font-semibold">Company Name</p>
                                <p className="text-lg font-medium">Designation</p>
                                <p className="text-md mt-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad praesentium
                                    obcaecati doloribus sit aut perferendis voluptatem voluptas illo nesciunt delectus
                                    qui pariatur cum dolores error tempore repudiandae quas possimus.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">HTML</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">CSS</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">Javascript</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">React</p>
                                </div>
                                <div className="w-fit rounded-2xl bg-black px-3 py-1 dark:bg-white">
                                    <p className="tracking-wider text-white dark:text-black">Node</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
