import { Metadata } from "next";
import React from "react";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
    title: "Akram Ansari",
};

export default function Home() {
    return (
        <div>
            <HeroSection />
        </div>
    );
}
