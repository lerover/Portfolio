"use client";
import dynamic from "next/dynamic";
import MyDocument from "./new-resume";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

// Dynamically load PDFDownloadLink only on client
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false }
);

export function NewResumeButton() {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
      {({ loading }) => (
        <Button variant="text" color="gray" className="flex items-center gap-2">
          {loading ? "Generating..." : (
            <>
              Download My Resume
              <ArrowDownTrayIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </>
          )}
        </Button>
      )}
    </PDFDownloadLink>
  );
}

export default NewResumeButton;
