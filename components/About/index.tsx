import { motion } from "framer-motion";
import React from "react";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                className="-mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src="/images/profile.jpg"
            />
            <div className="space-y-5 md:space-y-10 px-0 md:px-10">
                <h4 className="text-xl md:text-4xl font-semibold">
                    Here is a <span className=" underline decoration-green-500">little</span> background
                </h4>
                <p className="text-sm md:text-lg lg:text-lg text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident nisi, dignissimos deleniti
                    mollitia modi recusandae et iusto totam dolore. Dolore, repellat? Sint excepturi autem magnam
                    corrupti quidem sed laudantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reiciendis qui minus adipisci. Culpa nemo a labore pariatur, quod expedita sapiente
                    eveniet? Mollitia amet, minima quam ipsum et perferendis animi.
                </p>
            </div>
        </motion.div>
    );
}
