
import React from "react";
import { ChefHat } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-sage-400 to-sage-500">
        <ChefHat className="w-5 h-5 text-white" />
      </div>
      <span className="font-semibold text-xl tracking-tight">
        <span className="text-sage-600">Swasthya</span>
        <span className="text-terracotta-500">Sutra</span>
      </span>
    </div>
  );
};

export default Logo;
