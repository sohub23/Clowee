import { Facebook, Youtube, MessageCircle, Instagram } from "lucide-react";
import logoImage from "@/components/landing/clowee-navbar.png";
import QRExpandable from "./QRExpandable";

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
        <div className="text-center mb-6">
          <div className="bg-white/10 rounded-lg px-3 py-2 inline-block mb-4">
            <a href="mailto:support@i3technologies.com.bd" className="text-white text-xs font-medium hover:text-white/80 transition-colors">
              support@i3technologies.com.bd
            </a>
          </div>
          <div className="flex justify-center">
            <QRExpandable size="sm" />
          </div>
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
              <li><a href="#our-partners" className="text-white/90 hover:text-white transition-colors">Our Partners</a></li>
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

          {/* QR Code Section */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <h3 className="font-heading font-bold text-white mb-4">Hotscan</h3>
            <QRExpandable size="md" />
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
