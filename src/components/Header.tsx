import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop: logo à esquerda, Mobile: logo centralizada */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/lovable-uploads/logo.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
