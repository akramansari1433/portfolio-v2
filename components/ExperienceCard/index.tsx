import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex drop-shadow-xl flex-col rounded-3xl items-center flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-gradient-to-tr from-gray-200  to-green-500/40 p-5 md:p-8 hover:opacity-80 transition-opacity duration-200 ">
            <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
                <div className="mt-5 w-full px-0 md:px-10">
                    <h4 className="text-lg md:text-2xl font-light text-black">{experience.jobTitle}</h4>
                    <p className="font-bold text-md md:text-2xl  mt-1 text-lightGreen">{experience.company}</p>
                    <div className="flex space-x-2 my-2">
                        {experience.technologies.map((technology) => (
                            <Image
                                key={technology._id}
                                className="h-10 w-10 rounded-full object-cover"
                                src={urlForImage(technology.image.asset).url()}
                                alt={technology.title}
                                height={100}
                                width={100}
                            />
                        ))}
                    </div>
                    <p className="uppercase py-2 md:py-3 text-gray-500 text-sm md:text-lg">
                        {new Date(experience?.dateStarted).toDateString()} -{" "}
                        {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
                    </p>
                </div>
                <motion.img
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="w-32 h-32 rounded-full lg:w-36 lg:h-36 object-cover object-center"
                    src={urlForImage(experience.companyImage.asset).url()}
                    alt={experience.company}
                />
            </div>

            <ul className="px-5 md:px-10 list-disc text-black space-y-1 text-sm md:text-lg overflow-y-scroll scrollbar-thin">
                {experience?.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </article>
    );
}
