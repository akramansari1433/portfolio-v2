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
        <article className="flex drop-shadow-xl flex-col rounded-3xl items-center flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-gradient-to-tr from-gray-200  to-green-500/40 p-5 md:p-8 hover:opacity-80 transition-opacity duration-200 ">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
                src={demoExperience.companyImage.url}
                alt=""
            />
            <div className="w-full px-0 md:px-10">
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
                <p className="uppercase py-2 md:py-3 text-gray-500 text-sm md:text-lg">
                    {new Date(demoExperience?.dateStarted).toDateString()} -{" "}
                    {demoExperience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(demoExperience?.dateEnded).toDateString()}
                </p>
            </div>
            <ul className="px-5 md:px-10 list-disc text-black space-y-2 text-justify text-sm md:text-lg overflow-y-scroll scrollbar-thin">
                {demoExperience?.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </article>
    );
}
