import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20">
                {projects?.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className=" h-28 xl:h-80 md:h-72 object-contain"
                            src={urlForImage(project.image.asset).url()}
                            alt=""
                        />

                        <div className="space-y-5 md:space-y-8 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-200">
                                {project.title}
                            </h4>
                            <div className="flex items-center space-x-2 justify-center ">
                                {project?.technologies.map((technology) => (
                                    <Image
                                        key={technology._id}
                                        className="h-10 w-10 rounded-full object-cover"
                                        src={urlForImage(technology?.image.asset).url()}
                                        alt=""
                                        height={100}
                                        width={100}
                                    />
                                ))}
                            </div>

                            <p className="text-sm md:text-md lg:text-lg text-justify dark:text-gray-300">
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[20%] md:top-[30%] bg-green-500/30 dark:bg-green-500/20 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}
