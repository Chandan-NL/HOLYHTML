"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Chandan N L",
        designation: "Software Engineer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/chandan.jpg?updatedAt=1734705651737"
    },
    {
        id: 2,
        name: "Varun M S",
        designation: "Product Manager",
        image: "https://ik.imagekit.io/p5dmneaken/Team/varun.jpg"
    },
    {
        id: 3,
        name: "Vinod Kumar",
        designation: "Data Scientist",
        image: "https://ik.imagekit.io/p5dmneaken/Team/vinod?updatedAt=1734706462445"
    },
    {
        id: 4,
        name: "Diwakar K",
        designation: "UX Designer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/diwakar?updatedAt=1734706326320"
    },
    {
        id: 5,
        name: "Anand Agarwal",
        designation: "Soap Developer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/anand.jpg"
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/dora.jpg"
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
            <AnimatedTooltip items={people} />

        </div>
    );
}
