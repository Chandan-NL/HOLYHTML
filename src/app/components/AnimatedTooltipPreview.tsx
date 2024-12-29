"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Chandan N L",
        designation: "Frontend Developer & Team Lead",
        image: "https://ik.imagekit.io/p5dmneaken/Team/chandan.jpg?updatedAt=1734705651737"
    },
    {
        id: 2,
        name: "Varun M S",
        designation: "Fullstack Developer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/varun.jpg"
    },
    {
        id: 3,
        name: "Vinod Kumar",
        designation: "Web Developer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/vinod.jpg?updatedAt=1734857494962"
    },
    {
        id: 4,
        name: "Diwakar K",
        designation: "Project Manager",
        image: "https://ik.imagekit.io/p5dmneaken/Team/diwakar?updatedAt=1735459666515"
    },
    {
        id: 5,
        name: "Anand Agarwal",
        designation: "React Developer",
        image: "https://ik.imagekit.io/p5dmneaken/Team/anand.jpg"
    },

];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
