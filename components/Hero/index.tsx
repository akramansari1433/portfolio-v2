import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [`Hi, the name's Akram Ansari`, "I am a fullstack developer"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <Image
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="/images/profile.jpg"
                alt=""
                height={500}
                width={500}
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
                    Software Engineer
                </h2>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#68B2A0" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="px-6 rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 hover:border-gray-600 hover:text-gray-500">
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button className="px-6 rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 hover:border-gray-600 hover:text-gray-500">
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className="px-6 rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 hover:border-gray-600 hover:text-gray-500">
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button className="px-6 rounded-full py-2 text-sm uppercase border border-transparent tracking-widest text-gray-700 hover:border-gray-600 hover:text-gray-500">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
