import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, Menu, X } from "lucide-react";
import logoImage from "@/assets/clowee logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "how-it-works", label: "How It Works" },
    { id: "earnings", label: "Earnings" },
    { id: "our-partners", label: "Our Partners" },
    { id: "faq", label: "FAQ" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/i3clowee" },
    { icon: Instagram, href: "https://www.instagram.com/i3clowee/" },
    { icon: Youtube, href: "https://www.youtube.com/@i3clowee" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Clowee Logo" className="w-20 h-20 object-contain cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-foreground transition-colors ${
                activeSection === link.id ? "text-[#E291BE] font-semibold border-b-2 border-[#E291BE] pb-1" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
          <Button variant="hero" size="sm" onClick={() => scrollToSection("apply")}>
            Become a Partner
          </Button>
        </div>

        {/* Mobile menu & social links */}
        <div className="md:hidden flex items-center gap-1">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-1">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-lg font-medium transition-colors ${
                  activeSection === link.id ? "text-[#E291BE]" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-6 py-4 border-t border-border mt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <Button variant="hero" className="w-full" onClick={() => scrollToSection("apply")}>
              Become a Partner
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
