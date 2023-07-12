import Link from "next/link";


export default function HeroSection() {
    return (
        <div>
            <div className="overflow-hidden bg-gradient-to-b from-gray-100/20">
                <div className="flex h-[calc(100vh-5rem)] items-center justify-center p-10">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        
                            <div className="mx-auto max-w-lg">
                                <h1 className="text-5xl font-semibold">
                                    Hello there!
                                </h1>
                                <p className="text-xl">
                                    Anim aute id magna aliqua ad ad non deserunt
                                    sunt. Qui irure qui lorem cupidatat commodo.
                                    Elit sunt amet fugiat veniam occaecat fugiat
                                    aliqua. Anim aute id magna aliqua ad ad non
                                    deserunt sunt. Qui irure qui lorem cupidatat
                                    commodo.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href="/about"
                                        className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:border-black hover:dark:border-white hover:bg-white hover:dark:bg-black hover:text-black hover:dark:text-white"
                                    >
                                        About Me{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
