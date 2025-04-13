
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-agricultural-100 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-agricultural-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2">
                  SC
                </div>
                <span className="text-xl font-heading font-semibold text-agricultural-800">
                  Smart Crop <span className="text-agricultural-600">Recommender</span>
                </span>
              </Link>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-agricultural-700 hover:text-agricultural-500 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-agricultural-700 hover:text-agricultural-500 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-agricultural-700 hover:text-agricultural-500 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
          
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-agricultural-100">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-agricultural-700 hover:text-agricultural-500 hover:bg-agricultural-50"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-agricultural-700 hover:text-agricultural-500 hover:bg-agricultural-50"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-agricultural-700 hover:text-agricultural-500 hover:bg-agricultural-50"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
