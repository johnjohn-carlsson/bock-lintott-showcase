import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            Bock & Lintott
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Om oss
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Showroom
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Aktuellt
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Om oss
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Showroom
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="block w-full text-left py-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Aktuellt
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
              className="w-full"
            >
              Kontakt
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
