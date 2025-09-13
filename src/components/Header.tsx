import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </div>
          
          {/* Login Button */}
          <Button
            variant="outline"
            className="text-white hover:text-black hover:bg-white transition-colors"
            onClick={() => window.location.href = 'https://cliquee.biz/login'}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
