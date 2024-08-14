"use client";

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiGit } from "react-icons/si";



export default function Skill() {
  const skills = [
    {
      text: "React",
      Icons: FaReact, // Renamed iconType to Icons
    },
    {
      text: "Express",
      Icons: SiExpress,
    },
    {
      text: "MongoDB",
      Icons: SiMongodb,
    },
    {
      text: "Node.js",
      Icons: FaNodeJs,
    },
    {
      text: "Next.js",
      Icons: SiNextdotjs,
    },
    {
      text: "Python",
      Icons: SiPython,
    },
    {
      text: "TailwindCSS",
      Icons: SiTailwindcss,
    },
    {
      text: "TypeScript",
      Icons: SiTypescript,
    },
    {
      text: "Git",
      Icons: SiGit,
    },
  ];

  return (
    <section className="group mx-w-5xl mx-auto px-8 justify-center items-center text-center md: pt-10">
      <h2 className="font-bold text-3xl mb-8 title-bottom-line">Skills</h2>
      <div className="mx-auto max-w-[70%]">
        <HoverEffect items={skills} />
      </div>
    </section>
  );
}