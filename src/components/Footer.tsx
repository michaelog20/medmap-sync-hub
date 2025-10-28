import { Link } from "react-router-dom";
import { useState } from "react";
import { DataStreamBackground } from "./footer/DataStreamBackground";
import { DataFlowIndicator } from "./footer/DataFlowIndicator";

const Footer = () => {
  const [isDataStreamPaused, setIsDataStreamPaused] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 text-foreground overflow-hidden">
      {/* Animated Data Stream Background */}
      <DataStreamBackground isPaused={isDataStreamPaused} />
      
      {/* Footer Content */}
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/pilot-signup" className="text-gray-300 hover:text-white transition-colors">Pilot Signup</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources/quickstart" className="text-gray-300 hover:text-white transition-colors">Quick-Start Guide</Link></li>
                <li><Link to="/resources/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/resources/pilot-protocol" className="text-gray-300 hover:text-white transition-colors">Pilot Protocol</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <DataFlowIndicator />
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/resources/privacy" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                    onMouseEnter={() => setIsDataStreamPaused(true)}
                    onMouseLeave={() => setIsDataStreamPaused(false)}
                  >
                    Privacy & Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} MedMap. Health Informatics Pilot Project.
            </p>
            <p className="text-gray-400 text-sm">
              University of Toronto, Dalla Lana School of Public Health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
