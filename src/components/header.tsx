import { Mail, PhoneCall } from "lucide-react";

import HeaderLogo from "../assets/header-logo.svg";

export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center h-16 bg-[#12324F] px-4 sm:px-20 lg:px-40 py-2">
      {/* Contact Section */}
      <div className="flex gap-x-6 sm:gap-x-8 md:flex-row text-white flex-wrap justify-center sm:justify-start">
        <div className="text-xs flex items-center hover:text-gray-300 transition duration-200 mb-2 sm:mb-0">
          <PhoneCall className="w-5 h-5 mr-2" aria-label="Phone icon" />
          <a href="tel:+966568309142" className="block">
            +966568309142
          </a>
        </div>
        <div className="text-xs flex items-center hover:text-gray-300 transition duration-200">
          <Mail className="w-5 h-5 mr-2" aria-label="Mail icon" />
          <a href="mailto:support@wosol.com" className="block">
            support@wosol.com
          </a>
        </div>
      </div>

      {/* Logo Section */}
      <div className="text-lg font-semibold flex justify-center sm:justify-start">
        <img
          src={HeaderLogo}
          alt="Header Logo"
          className="w-auto h-10 sm:h-12"
        />
      </div>
    </div>
  );
};
