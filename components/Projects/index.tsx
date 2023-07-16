import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
    const projects = [1, 2, 3, 4, 5];
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
                            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                            alt=""
                        />

                        <div className="space-y-5 md:space-y-8 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center dark:text-gray-200">
                                Project {i + 1}: Some App
                            </h4>
                            <div className="flex items-center space-x-2 justify-center ">
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src="https://skillicons.dev/icons?i=react"
                                    alt=""
                                />
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src="https://skillicons.dev/icons?i=react"
                                    alt=""
                                />
                                <img
                                    className="h-8 w-8 rounded-full object-cover"
                                    src="https://skillicons.dev/icons?i=react"
                                    alt=""
                                />
                            </div>

                            <p className="text-sm md:text-md lg:text-lg text-justify dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae optio laborum cupiditate
                                quibusdam molestiae pariatur facere quidem odit tenetur deleniti eum asperiores
                                distinctio nemo delectus quia harum, fuga laudantium in.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[20%] md:top-[30%] bg-green-500/30 dark:bg-green-500/20 left-0 h-[500px] -skew-y-12"></div>
        </motion.div>
    );
}
