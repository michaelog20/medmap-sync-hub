import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent via-slate-900/80 to-blue-950 text-foreground">
      {/* Footer Links */}
      <div className="py-12">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</Link></li>
              <li><Link to="/pilot-signup" className="text-foreground/80 hover:text-foreground transition-colors">Pilot Signup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/quickstart" className="text-foreground/80 hover:text-foreground transition-colors">Quick-Start Guide</Link></li>
              <li><Link to="/resources/faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/resources/pilot-protocol" className="text-foreground/80 hover:text-foreground transition-colors">Pilot Protocol</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/privacy" className="text-foreground/80 hover:text-foreground transition-colors">Privacy & Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/80 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MedMap. Health Informatics Pilot Project.
          </p>
          <p className="text-foreground/80 text-sm">
            University of Toronto, Dalla Lana School of Public Health
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
