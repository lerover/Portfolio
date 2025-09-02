"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Using JavaScript and its frameworks, I have built vibrant, functional user interfaces and developed frontend applications that seamlessly integrate with API data.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "With React Native, I have built cross-platform mobile applications, integrating APIs and modern UI components to deliver smooth, native-like experiences.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I’m well-versed in modern web and mobile development technologies, including PHP, Laravel, HTML5, CSS3, JavaScript, and frameworks such as React, Vue, React Native, Next.js, and Nuxt.js.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          A tech enthusiast with a passion for creating innovative and user-friendly web applications. I specialize in building responsive and interactive websites using the latest technologies and frameworks.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
