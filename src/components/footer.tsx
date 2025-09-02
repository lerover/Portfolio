import { Typography, Button } from "@material-tailwind/react";

const LINKS = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  }, 
  {
    name: "Resume",
    href: "#resume",
  },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-end gap-y-4 border-t border-gray-200 py-6 ">
 
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li>
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
