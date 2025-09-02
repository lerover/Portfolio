"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/project/fitness.png`,
    title: "Mobile Fitness App Development",
    desc: "I developed the Y-Gym mobile app from front to back, building both the frontend and backend. The app allows users to create accounts, log in securely, and track their daily fitness activities, providing a smooth and engaging experience for gym-goers.",
  },
  {
    img: `${getImagePrefix()}image/project/hitLanding.png`,
    title: "Learning Management System",
    desc: "I've contributed in the development of a Learning Management System (LMS) for HIT MYANMAR. The system includes features such as user registration, course enrollment, course videos uploading and progress tracking.",
  },
  {
    img: `${getImagePrefix()}image/project/zeekwekpos.png`,
    title: "Zeekwek POS Development",
    desc: "I've contributed in the development of a POS system for Zeekwek. The system includes features such as product management, sales reporting, and inventory management.",
  },

];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
