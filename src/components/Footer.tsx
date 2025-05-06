
import React from "react";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              Personalized Indian diet plans that blend traditional wisdom with modern nutrition science.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-sage-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sage-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sage-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Diet Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Nutrition Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Recipe Database
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Nutrition Facts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Health Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Swasthya Sutra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
