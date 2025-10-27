import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Footer Links */}
      <div className="py-12">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-background/70 hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-background/70 hover:text-background transition-colors">How It Works</Link></li>
              <li><Link to="/pilot-signup" className="text-background/70 hover:text-background transition-colors">Pilot Signup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/quickstart" className="text-background/70 hover:text-background transition-colors">Quick-Start Guide</Link></li>
              <li><Link to="/resources/faq" className="text-background/70 hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/resources/pilot-protocol" className="text-background/70 hover:text-background transition-colors">Pilot Protocol</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/privacy" className="text-background/70 hover:text-background transition-colors">Privacy & Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MedMap. Health Informatics Pilot Project.
          </p>
          <p className="text-background/70 text-sm">
            University of Toronto, Dalla Lana School of Public Health
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
