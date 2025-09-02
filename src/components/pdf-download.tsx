import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

export default function DownloadButton() {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/assets/ArKarMoe.pdf"; // path inside public/
      link.download = "ArKarMoe.pdf";   // name for the saved file
      link.click();
    };
  
    return (
    //   <button onClick={handleDownload}>
    //     Download Resume
    //   </button>

      <Button variant="text" color="gray" className="flex items-center gap-2" onClick={handleDownload}>
        Download Resume

        <ArrowDownTrayIcon
          strokeWidth={3}
          className="h-3.5 w-3.5 text-gray-900"
        />
      </Button>
    );
  }

//   <Button variant="text" color="gray" className="flex items-center gap-2">
//   {loading ? "Generating..." : (
//     <>
//       Download My Resume
//       <ArrowDownTrayIcon
//         strokeWidth={3}
//         className="h-3.5 w-3.5 text-gray-900"
//       />
//     </>
//   )}
// </Button>