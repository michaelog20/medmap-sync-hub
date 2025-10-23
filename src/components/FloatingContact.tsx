import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <>
      {/* Floating Contact Tab - Always visible on left side */}
      <Link
        to="/contact"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-4 py-3 rounded-r-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:pl-5 flex items-center gap-2 group"
        aria-label="Contact Us"
      >
        <MessageCircle size={20} className="flex-shrink-0" />
        <span className="text-sm font-medium whitespace-nowrap">Contact Us</span>
      </Link>

      {/* Join the Pilot Floating Tab - Below Contact */}
      <Link
        to="/pilot-signup"
        className="fixed left-0 top-1/2 translate-y-12 z-40 bg-secondary text-secondary-foreground px-4 py-3 rounded-r-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:pl-5 flex items-center gap-2 group"
        aria-label="Join the Pilot"
      >
        <span className="text-sm font-medium whitespace-nowrap">Join the Pilot</span>
      </Link>
    </>
  );
};

export default FloatingContact;
