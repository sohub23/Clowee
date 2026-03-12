import { useState } from "react";
import { createPortal } from "react-dom";
import { Facebook, Youtube, MessageCircle, Instagram, Maximize2, X } from "lucide-react";
import qrScanner from "@/assets/clowee_hotscan.png";
import logoImage from "@/components/landing/clowee-navbar.png";

/* QR CODE EXPANDABLE COMPONENT */
const QRExpandable = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setExpanded(true)}
          className="bg-white rounded-xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 relative group cursor-pointer transition-transform hover:scale-105"
        >
          <img src={qrScanner} alt="Call With Hotscan" className="w-24 h-24 object-contain" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-xl transition-colors flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-[#E291BE] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
        <div>
          <p className="text-xs font-medium text-white/90">Call With<br />Hotscan</p>
          <p className="text-[10px] text-white/60 mt-0.5">Tap to enlarge</p>
        </div>
      </div>

      {/* Expanded Modal */}
      {expanded && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-xs w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <div className="text-center">
              <p className="text-[16px] font-semibold text-[#202124] mb-1">Call With Hotscan</p>
              <p className="text-[13px] text-[#5f6368] mb-5">Point your phone camera at this QR code</p>
              <div className="bg-[#f8f9fa] rounded-2xl p-6 inline-block border border-gray-100">
                <img src={qrScanner} alt="Call With Hotscan" className="w-56 h-56 object-contain" />
              </div>
              <p className="text-[12px] text-[#5f6368] mt-4">Clowee by i3 Technologies</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

const Footer = () => (
  <footer className="py-8 px-4" style={{ backgroundColor: '#E291BE' }}>
    <div className="container">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-3 mb-6 text-center">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors block">How It Works</a></li>
              <li><a href="#earnings" className="text-white/80 hover:text-white transition-colors block">Earnings</a></li>
              <li><a href="#our-partners" className="text-white/80 hover:text-white transition-colors block">Our Partners</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors block">FAQ</a></li>
              <li><a href="#apply" className="text-white/80 hover:text-white transition-colors block">Apply Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="https://erp.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors block">Clowee ERP</a></li>
              <li><a href="https://claw.tolpar.com.bd" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors block">Admin Dashboard</a></li>
              <li><a href="https://p2m.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors block">Online Payment</a></li>
              <li className="text-white/80 block">Installation</li>
              <li className="text-white/80 block">Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <a href="https://www.facebook.com/i3clowee" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Facebook className="w-4 h-4 text-white" />
          </a>
          <a href="https://www.instagram.com/i3clowee/" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Instagram className="w-4 h-4 text-white" />
          </a>
          <a href="https://www.youtube.com/@i3clowee" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <Youtube className="w-4 h-4 text-white" />
          </a>
          <a href="https://wa.me/8801325886868" target="_blank" rel="noopener noreferrer" 
             className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <MessageCircle className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Contact Info Above Scanner */}
        <div className="text-center mb-4">
          <div className="bg-white/10 rounded-lg px-3 py-2 inline-block">
            <a href="mailto:support@i3technologies.com.bd" className="text-white text-xs font-medium hover:text-white/80 transition-colors">
              support@i3technologies.com.bd
            </a>
          </div>
        </div>

        {/* Scanner Section */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="bg-white rounded-lg p-2 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 relative group cursor-pointer transition-transform hover:scale-105"
            >
              <img src={qrScanner} alt="Call With Hotscan" className="w-16 h-16 object-contain" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 rounded-lg transition-colors flex items-center justify-center">
                <Maximize2 className="w-4 h-4 text-[#E291BE] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          </div>
          <p className="text-xs text-white/60 mt-2">Scan to Visit Website</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="Clowee Logo" className="w-24 h-24 object-contain" />
            </div>
            <p className="text-sm mb-4 text-white/90">Smart claw machine partnership for restaurants in Bangladesh.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#earnings" className="text-white/90 hover:text-white transition-colors">Earnings</a></li>
              <li><a href="#our-partners" className="text-white/90 hover:text-white transition-colors">Ours Partner</a></li>
              <li><a href="#faq" className="text-white/90 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#apply" className="text-white/90 hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://erp.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">Clowee ERP</a></li>
              <li><a href="https://claw.tolpar.com.bd" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">Admin Dashboard</a></li>
              <li><a href="https://p2m.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">Online Payment</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.youtube.com/@i3clowee" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/i3clowee" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/i3clowee/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801325886868" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="pt-2">
                <a href="mailto:support@i3technologies.com.bd" className="text-white/90 hover:text-white transition-colors text-sm">
                  support@i3technologies.com.bd
                </a>
              </li>
            </ul>
          </div>

          {/* Scanner */}
          <div className="flex flex-col items-center justify-start">
            <QRExpandable />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-6 text-center text-sm text-white/90">
        <p>© {new Date().getFullYear()} i3 Technologies. Built for Bangladesh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
