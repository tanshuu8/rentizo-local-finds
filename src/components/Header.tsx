
import { useState } from 'react';
import { Menu, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Rentizo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
            <a href="#categories" className="text-gray-700 hover:text-primary transition-colors">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              List Item
            </Button>
            <Button className="bg-accent hover:bg-accent/90">
              Browse Rentals
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How It Works</a>
              <a href="#categories" className="text-gray-700 hover:text-primary transition-colors">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-primary text-primary">
                  List Item
                </Button>
                <Button className="bg-accent hover:bg-accent/90">
                  Browse Rentals
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
