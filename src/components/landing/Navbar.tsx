import { Button } from "@/components/ui/button";
import { Facebook, Youtube } from "lucide-react";
import logoImage from "@/assets/clowee logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          <img src={logoImage} alt="Clowee Logo" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="flex items-center gap-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <Button variant="hero" size="sm" onClick={() => scrollToSection("apply")} className="text-xs px-3 py-1">
            Partner
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className="bg-background/95 backdrop-blur-sm border-t border-border px-4 py-2">
        <div className="flex justify-center gap-4 text-xs">
          <button onClick={() => scrollToSection("how-it-works")} className="px-2 py-1 hover:text-primary transition-colors">
            How It Works
          </button>
          <button onClick={() => scrollToSection("earnings")} className="px-2 py-1 hover:text-primary transition-colors">
            Earnings
          </button>
          <button onClick={() => scrollToSection("our-partners")} className="px-2 py-1 hover:text-primary transition-colors">
            Partners
          </button>
          <button onClick={() => scrollToSection("faq")} className="px-2 py-1 hover:text-primary transition-colors">
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
