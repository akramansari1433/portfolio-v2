import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const defaultSocials = [
    {
        title: "Twitter",
        url: "https://twitter.com/akramansari1433",
    },
    {
        title: "Facebook",
        url: "https://facebook.com/akramansari1433",
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com/akramansari1433",
    },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
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
                    <SocialIcon key={idx} url={social.url} fgColor="gray" bgColor="transparent" />
                ))}
            </motion.div>

            {/* <Link href="#contact"> */}
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
                className="flex cursor-pointer flex-row items-center text-gray-300"
            >
                <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
                <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">Get in touch</p>
            </motion.div>
            {/* </Link> */}
        </header>
    );
}
