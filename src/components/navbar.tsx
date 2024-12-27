import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import NavbarLogo from "../assets/navbar-logo.svg";

import { Button } from "./ui/button";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("HOME");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full h-16 flex items-center justify-between px-5 sm:px-20 lg:px-40 py-2">
      {/* Logo */}
      <div>
        <img src={NavbarLogo} alt="Navbar Logo" />
      </div>

      {/* Navbar Items */}
      <ul className="flex items-center gap-x-5 sm:flex-row flex-col sm:gap-x-5 gap-y-4 sm:gap-y-0">
        {[
          "HOME",
          "ABOUT US",
          "PROJECTS",
          "OUR SERVICES",
          "MEDIA",
          "GALLERY",
          "CAREERS",
        ].map((item) => (
          <li
            key={item}
            className={`cursor-pointer text-sm flex items-center font-semibold ${
              activeItem === item
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-700"
            } transition duration-200`}
            onClick={() => handleItemClick(item)}
          >
            <a href={`#${item.split(" ").join("-").toLowerCase()}`}>{item}</a>

            {/* Chevron for dropdown items */}
            {["PROJECTS", "OUR SERVICES", "MEDIA"].includes(item) &&
              (activeItem === item ? (
                <ChevronUp className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1" />
              ))}
          </li>
        ))}
      </ul>

      {/* Contact Us Button */}
      <div className="hidden sm:block">
        <Button variant={"destructive"}>CONTACT US</Button>
      </div>

      {/* Mobile Hamburger Menu (for small screens) */}
      <div className="sm:hidden">
        <Button variant="destructive">Menu</Button>
      </div>
    </div>
  );
};
