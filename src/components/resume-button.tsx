// components/ResumeButton.tsx
import { jsPDF } from "jspdf";

export function ResumeButton() {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(14);
    doc.text("Ar Kar Moe", 20, 20);
    
    doc.setFontSize(12);
    doc.text("Full Stack Developer", 20, 25);

    doc.setFontSize(12);
    doc.text("Email: arkarmoe.dev@gmail.com", 20, 30);
    doc.text("Phone: +95 9756282119", 20, 35);

    doc.text("Skills:", 20, 45);
    doc.text("HTML, CSS, JavaScript, React, Vue, Laravel, PHP", 30, 55);

    doc.text("Experience:", 20, 60);
    doc.text("Developed multiple frontend and full-stack applications...", 30, 70);

    // left side 
    //github link 
    doc.setFontSize(10);
    doc.text("Github: https://github.com/ArKar524/", 20, 110);
    
    //personal qualification
    doc.setFontSize(10);
    doc.text("Personal Qualification",20,120);
    doc.setFontSize(8);
    doc.text("HTML, CSS, JavaScript",20,125);
    doc.text("Tailwind CSS, Bootstrap",20,130);
    doc.text("PHP, Laravel, Livewire, Alpine",20,135);
    doc.text("Typescript, React", 20, 140);
    doc.text("Git & GitHub",20,145); 

    //personal profile
    doc.setFontSize(10);
    doc.text("Personal Profile",20,155);
    doc.setFontSize(8);
    doc.text("DOB               : 08/FEB/2004",20,160);
    doc.text("NRC NO.           : 5/YaMaPa(N)161086",20,165);
    doc.text("Martial Status    : Single",20,170);


    // Save the PDF
    doc.save("John_Doe_Resume.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download Resume
    </button>
  );
};

export default ResumeButton;
