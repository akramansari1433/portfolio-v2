"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<ContactFormData>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<ContactFormData> = async (formData) => {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            reset();
        } else {
            alert("Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
            <h3 className="absolute top-20 text-xl font-medium uppercase tracking-[20px] text-gray-700 dark:text-gray-200 md:top-24 md:text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
                <p className="text-center text-xl font-semibold dark:text-gray-200 md:text-2xl lg:text-3xl 2xl:text-4xl">
                    I have got just what you need.{" "}
                    <span className="underline decoration-green-500">Lets talk.</span>
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-auto flex w-80 flex-col items-center space-y-3 md:w-fit"
                >
                    <div className="space-y-3 md:flex md:space-x-2 md:space-y-0">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="w-80 rounded-lg bg-slate-400/20 px-6 py-3 text-gray-700 placeholder-gray-500 outline-none transition-all dark:bg-slate-600/20 dark:text-gray-100 md:w-auto"
                            type="text"
                        />{" "}
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20 w-80 rounded-lg bg-slate-400/20 px-6 py-3 text-gray-700 placeholder-gray-500 outline-none transition-all dark:bg-slate-600/20 dark:text-gray-100 md:w-auto md:py-4"
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20 w-full rounded-lg bg-slate-400/20 px-6 py-3 text-gray-700 placeholder-gray-500 outline-none transition-all dark:bg-slate-600/20 dark:text-gray-100 md:py-4"
                        type="text"
                    />
                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20 w-full rounded-lg bg-slate-400/20 px-6 py-3 text-gray-700 placeholder-gray-500 outline-none transition-all dark:bg-slate-600/20 dark:text-gray-100 md:py-4"
                    />
                    <button className="w-fit rounded-lg bg-green-700 px-5 py-2 text-lg font-bold text-white dark:bg-green-800">
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
}
