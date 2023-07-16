import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:mitch.sparrow@hotmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-700 dark:text-gray-200 text-xl md:text-2xl font-medium">
                Contact
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
                <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center dark:text-gray-200">
                    I have got just what you need. <span className="decoration-green-500 underline">Lets talk.</span>
                </h4>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col items-center space-y-3 w-80 md:w-fit mx-auto"
                >
                    <div className="md:flex md:space-x-2 space-y-3 md:space-y-0 ">
                        <input
                            {...register("name")}
                            placeholder="Name"
                            className="outline-none bg-slate-400/20 dark:bg-slate-600/20 rounded-lg  px-6 py-3 text-gray-700 dark:text-gray-100 placeholder-gray-500 transition-all w-80 md:w-auto"
                            type="text"
                        />{" "}
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="outline-none bg-slate-400/20 dark:bg-slate-600/20 rounded-lg  px-6 py-3 md:py-4  text-gray-700 dark:text-gray-100 placeholder-gray-500 transition-all focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20 w-80 md:w-auto"
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        placeholder="Subject"
                        className="outline-none w-full bg-slate-400/20 dark:bg-slate-600/20 rounded-lg  px-6 py-3 md:py-4  text-gray-700 dark:text-gray-100 placeholder-gray-500 transition-all focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20 "
                        type="text"
                    />
                    <textarea
                        {...register("message")}
                        placeholder="Message"
                        className="outline-none w-full bg-slate-400/20 dark:bg-slate-600/20 rounded-lg  px-6 py-3 md:py-4 text-gray-700 dark:text-gray-100 placeholder-gray-500 transition-all focus:border-darkGreen/20 focus:text-darkGreen/80 hover:border-darkGreen/20"
                    />
                    <button className="bg-green-600 dark:bg-green-800 w-fit py-2  px-5 rounded-lg text-white font-bold text-lg">
                        {" "}
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
