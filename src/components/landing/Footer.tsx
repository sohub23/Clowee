const Footer = () => (
  <footer className="py-12 px-4" style={{ backgroundColor: '#E291BE' }}>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-heading font-bold text-[#E291BE]">C</div>
            <span className="font-heading font-bold text-white text-lg">Clowee</span>
          </div>
          <p className="text-sm mb-4 text-white/90">Smart claw machine partnership for restaurants in Bangladesh.</p>
          <a href="mailto:hello@sohub.com.bd" className="text-sm text-white/90 hover:text-white transition-colors">
            hello@sohub.com.bd
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How It Works</a></li>
            <li><a href="#earnings" className="text-white/90 hover:text-white transition-colors">Earnings</a></li>
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
          <h3 className="font-heading font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+8801325886868" className="text-white/90 hover:text-white transition-colors">01325886868</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-6 text-center text-sm text-white/90">
        <p>© {new Date().getFullYear()} i3 Technologies. Built for Bangladesh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
