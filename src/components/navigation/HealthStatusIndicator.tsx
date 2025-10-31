import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HealthStatusIndicator = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="health-indicator"
            >
              {/* Heartbeat line */}
              <path
                d="M3 12 L7 12 L9 8 L11 16 L13 12 L15 12 L17 9 L19 12 L21 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-all duration-300 ${
                  isHovered
                    ? "text-muted-foreground animate-health-spike"
                    : "text-muted-foreground/60"
                }`}
              />
            </svg>

            {/* Checkmark that appears after spike */}
            {isHovered && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 animate-health-check"
              >
                <circle cx="6" cy="6" r="6" className="fill-primary/20" />
                <path
                  d="M3 6 L5 8 L9 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                />
              </svg>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-medium">Status: Verifying Safety. Always In Sync.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HealthStatusIndicator;
