"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Chandan N L",
        designation: "Software Engineer",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
    {
        id: 2,
        name: "Varun M S",
        designation: "Product Manager",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
    {
        id: 3,
        name: "Vinod Kumar",
        designation: "Data Scientist",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
    {
        id: 4,
        name: "Diwakar K",
        designation: "UX Designer",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
    {
        id: 5,
        name: "Anand Agarwal",
        designation: "Soap Developer",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: "https://ik.imagekit.io/p5dmneaken/photo.webp"
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
            <AnimatedTooltip items={people} />

        </div>
    );
}
