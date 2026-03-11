import { Facebook, Youtube, MessageCircle, Instagram } from "lucide-react";
import qrScanner from "@/assets/clowee_hotscan.png";

const Footer = () => (
  <footer className="py-8 px-4" style={{ backgroundColor: '#E291BE' }}>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-heading font-bold text-[#E291BE]">C</div>
            <span className="font-heading font-bold text-white text-lg">Clowee</span>
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

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-white mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://www.youtube.com/@i3technologies" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/i3technologiesbd" target="_blank" rel="noopener noreferrer" 
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
          <h3 className="font-heading font-bold text-white mb-4">Scan to Connect</h3>
          <div className="bg-white p-2 rounded-lg">
            <img src={qrScanner} alt="QR Scanner" className="w-24 h-24 object-contain" />
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
