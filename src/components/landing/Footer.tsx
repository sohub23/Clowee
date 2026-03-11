import { Facebook, Youtube, MessageCircle, Instagram } from "lucide-react";
import qrScanner from "@/assets/clowee_hotscan.png";

const Footer = () => (
  <footer className="py-6 px-4" style={{ backgroundColor: '#E291BE' }}>
    <div className="container max-w-sm mx-auto">
      {/* Company Info */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center font-heading font-bold text-[#E291BE] text-sm">C</div>
          <span className="font-heading font-bold text-white text-base">Clowee</span>
        </div>
        <p className="text-xs text-white/90">Smart claw machine partnership for restaurants in Bangladesh.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-3 mb-6">
        <a href="https://www.facebook.com/i3technologiesbd" target="_blank" rel="noopener noreferrer" 
           className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
          <Facebook className="w-5 h-5 text-white" />
        </a>
        <a href="https://www.instagram.com/i3clowee/" target="_blank" rel="noopener noreferrer" 
           className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a href="https://www.youtube.com/@i3technologies" target="_blank" rel="noopener noreferrer" 
           className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
          <Youtube className="w-5 h-5 text-white" />
        </a>
        <a href="https://wa.me/8801325886868" target="_blank" rel="noopener noreferrer" 
           className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors">
          <MessageCircle className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* QR Scanner Section */}
      <div className="text-center space-y-3 mb-6">
        <div className="bg-white p-2 rounded-lg inline-block">
          <img src={qrScanner} alt="QR Scanner" className="w-24 h-24 object-contain" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Scan to Call Us</h3>
          <p className="text-white/80 text-xs">Tap to enlarge</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-center mb-4">
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How It Works</a>
          <a href="#earnings" className="text-white/90 hover:text-white transition-colors">Earnings</a>
          <a href="#our-partners" className="text-white/90 hover:text-white transition-colors">Partners</a>
          <a href="#faq" className="text-white/90 hover:text-white transition-colors">FAQ</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-3 text-center text-xs text-white/90">
        <p>© {new Date().getFullYear()} i3 Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
