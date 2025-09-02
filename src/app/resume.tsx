"use client";

import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import NewResumeButton from "@/components/new-resume-btn";
import { getImagePrefix } from "../../utils/utils";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer ",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Frontend Framework Proficiency Certification",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and creative Web Developer with experience in crafting visually stunning and functionally robust web applications and mobile applications.
          </Typography>
       
          <NewResumeButton/>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/resume/myResume.png`}
          className="h-[36rem] w-full rounded-xl object-cover lg:object-contain"
        />
        </div>
      </div>
    </section>
  );
}

export default Resume;
