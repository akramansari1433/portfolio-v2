import Image from "next/image";
import Navbar from "../Navbar";
import { useTheme } from "next-themes";

export default function Example() {
    const { theme } = useTheme();
    return (
        <div className="dark:bg-black">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-500/20">
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] dark:bg-black  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                    aria-hidden="true"
                />
                <div className="h-screen px-6 py-40 sm:py-40 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <div className="md:w-1/2">
                            <p className="text-lg">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat
                                aliqua. Anim aute id magna aliqua ad ad non
                                deserunt sunt. Qui irure qui lorem cupidatat
                                commodo.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-semibold leading-6"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/profile.jpg"
                                alt=""
                                className="rounded-xl"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
