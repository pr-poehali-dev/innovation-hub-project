
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-primary">INNOVATION HUB</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-primary transition">About Us</a>
          <a href="#products" className="text-gray-700 hover:text-primary transition">Core Products</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary transition">Contacts</a>
          <Button className="bg-primary text-white hover:bg-primary/90">Get in Touch</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Core Products
            </a>
            <a 
              href="#contacts" 
              className="text-gray-700 hover:text-primary transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacts
            </a>
            <Button className="bg-primary text-white hover:bg-primary/90 w-full">Get in Touch</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
