import React from "react";
import Navbar from "../Navbar";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="bg-gray-200 dark:bg-gray-900">
            <Navbar />
            {children}
        </div>
    );
}
