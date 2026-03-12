import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook } from "lucide-react";
import logoImage from "@/assets/clowee logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["how-it-works", "earnings", "our-partners", "faq"];
      const scrollPosition = window.scrollY + 150;
      
      let currentSection = "";
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Clowee Logo" className="w-20 h-20 object-contain" />
          
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollToSection("how-it-works")} className={`hover:text-foreground transition-colors ${activeSection === "how-it-works" ? "text-[#E291BE] font-semibold border-b-2 border-[#E291BE] pb-1" : ""}`}>How It Works</button>
          <button onClick={() => scrollToSection("earnings")} className={`hover:text-foreground transition-colors ${activeSection === "earnings" ? "text-[#E291BE] font-semibold border-b-2 border-[#E291BE] pb-1" : ""}`}>Earnings</button>
          <button onClick={() => scrollToSection("our-partners")} className={`hover:text-foreground transition-colors ${activeSection === "our-partners" ? "text-[#E291BE] font-semibold border-b-2 border-[#E291BE] pb-1" : ""}`}>Ours Partner</button>
          <button onClick={() => scrollToSection("faq")} className={`hover:text-foreground transition-colors ${activeSection === "faq" ? "text-[#E291BE] font-semibold border-b-2 border-[#E291BE] pb-1" : ""}`}>FAQ</button>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <Button variant="hero" size="sm" onClick={() => scrollToSection("apply")}>
            Become a Partner
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
