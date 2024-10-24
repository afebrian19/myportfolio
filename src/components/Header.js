import React from "react";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm text-black">
            <a
              href="https://wa.me/6285246011055" // Ganti dengan nomor WhatsApp Anda
              target="_blank"
              rel="noopener noreferrer"
            >
              Work with me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
