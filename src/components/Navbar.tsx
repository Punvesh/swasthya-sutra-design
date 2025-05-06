
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, User } from "lucide-react";
import Logo from "./Logo";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        ) : (
          <nav className="flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <a className="text-gray-600 hover:text-sage-600 transition-colors" href="#features">Features</a>
              <a className="text-gray-600 hover:text-sage-600 transition-colors" href="#how-it-works">How It Works</a>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-sage-600 transition-colors">
                  Resources <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute -left-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 pt-2">
                  <div className="bg-white rounded-md shadow-md border border-gray-100 overflow-hidden w-48">
                    <a className="block px-4 py-2 text-gray-700 hover:bg-sage-50" href="#">Diet Tips</a>
                    <a className="block px-4 py-2 text-gray-700 hover:bg-sage-50" href="#">Nutrition Guide</a>
                    <a className="block px-4 py-2 text-gray-700 hover:bg-sage-50" href="#">Recipe Database</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-700">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white border-0">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="container mx-auto px-4 py-3 bg-white border-t border-gray-100 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <a className="text-gray-600 py-2 border-b border-gray-50" href="#features">Features</a>
            <a className="text-gray-600 py-2 border-b border-gray-50" href="#how-it-works">How It Works</a>
            <a className="text-gray-600 py-2 border-b border-gray-50" href="#">Resources</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-sage-500 to-sage-600">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
