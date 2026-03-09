const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 px-4">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold">C</div>
            <span className="font-heading font-bold text-white text-lg">Clowee</span>
          </div>
          <p className="text-sm mb-4">Smart claw machine partnership for restaurants in Bangladesh.</p>
          <a href="mailto:info@clowee.com" className="text-sm hover:text-primary transition-colors">
            info@clowee.com
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="#earnings" className="hover:text-primary transition-colors">Earnings</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#apply" className="hover:text-primary transition-colors">Apply Now</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://erp.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Clowee ERP</a></li>
            <li><a href="https://claw.tolpar.com.bd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Admin Dashboard</a></li>
            <li><a href="https://p2m.tolpar.com.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Online Payment</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="tel:+8801234567890" className="hover:text-primary transition-colors">+880 1234 567890</a></li>
            <li><a href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} i3 Technologies. Built for Bangladesh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
