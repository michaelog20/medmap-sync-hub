import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const FloatingContact = () => {
  return (
    <Link
      to="/contact"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground px-4 py-3 rounded-r-lg shadow-lg hover:pl-6 transition-all duration-300 group"
      aria-label="Contact Us"
    >
      <div className="flex items-center gap-2">
        <MessageSquare size={20} />
        <span className="text-sm font-medium whitespace-nowrap">
          Contact Us
        </span>
      </div>
    </Link>
  );
};

export default FloatingContact;
