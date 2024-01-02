import React from "react";
import Logo from "../assets/Logo-horizontal.png";
import WhatsappLogo from "../assets/wasalogo.jpg";

const Header = () => {
  const whatsappNumber = "+573016722885";

  return (
    <header className="bg-white p-6 border-b-2 border-cyan-500 border-solid pb-2">
      <div className="flex items-center justify-between ">
        <img src={Logo} alt="Logo CMYKOLOR" className="h-15 w-15" />
        <nav className="space-x-6 text-lg font-semibold">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Inicio
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Bordados
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Colorantes
          </a>
        </nav>
        <div className="flex items-center">
          <p className="mr-4 text-lg font-semibold">Contáctenos</p>
          <a href={`https://wa.me/${whatsappNumber}`}>
            <img src={WhatsappLogo} alt="WhatsApp Logo" className="h-16 w-16" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
