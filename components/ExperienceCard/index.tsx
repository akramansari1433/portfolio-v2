import { motion } from "framer-motion";
import React from "react";

const demoExperience = {
    jobTitle: "Software Engineer",
    company: "TechCo",
    companyImage: {
        url: "https://www.torinit.com/static/media/logo.c2a69a4f.svg", // Replace with the actual company image URL
    },
    technologies: [
        {
            _id: "tech1",
            image: {
                url: "https://skillicons.dev/icons?i=react", // Replace with the actual technology 1 image URL
            },
        },
        {
            _id: "tech2",
            image: {
                url: "https://skillicons.dev/icons?i=nodejs", // Replace with the actual technology 2 image URL
            },
        },
        // Add more technologies if needed
    ],
    dateStarted: "2022-01-01", // Replace with a valid date
    dateEnded: "2023-07-15", // Replace with a valid date
    isCurrentlyWorkingHere: false, // Set to true if the person is still working here
    points: [
        "Developed new features for the company's flagship product.",
        "Collaborated with cross-functional teams to improve performance.",
        "Implemented automated testing to enhance code quality.",
        // Add more points about the experience
    ],
};

export default function ExperienceCard() {
    return (
        <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-gradient-to-tr from-white  to-green-500/20 p-5 md:p10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 ">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className=" md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
                src={demoExperience.companyImage.url}
                alt=""
            />
            <div className="w-full px-0 md:px-10">
                <div className=" md:flex md:justify-between items-center">
                    <div>
                        <h4 className="text-lg md:text-3xl font-light text-black">{demoExperience.jobTitle}</h4>
                        <p className="font-bold text-md md:text-2xl  mt-1 text-lightGreen">{demoExperience.company}</p>
                        <div className="flex space-x-2 my-2">
                            {demoExperience?.technologies.map((technology) => (
                                <img
                                    key={technology._id}
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={technology.image.url}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-36  rounded-full mb-0 object-contain object-center"
                        src={demoExperience.companyImage.url}
                        alt=""
                    />
                </div>
                <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
                    {new Date(demoExperience?.dateStarted).toDateString()} -{" "}
                    {demoExperience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(demoExperience?.dateEnded).toDateString()}
                </p>
            </div>
            <ul className="px-0 md:px-10 list-disc  text-black space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
                {demoExperience?.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </article>
    );
}
