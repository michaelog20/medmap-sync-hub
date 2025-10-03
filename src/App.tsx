import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import PilotSignup from "./pages/PilotSignup";
import Contact from "./pages/Contact";
import ResourcesHome from "./pages/resources/ResourcesHome";
import QuickStart from "./pages/resources/QuickStart";
import FAQ from "./pages/resources/FAQ";
import Privacy from "./pages/resources/Privacy";
import PilotProtocol from "./pages/resources/PilotProtocol";
import FHIRGuide from "./pages/resources/FHIRGuide";
import Partners from "./pages/resources/Partners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <FloatingContact />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pilot-signup" element={<PilotSignup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<ResourcesHome />} />
              <Route path="/resources/quickstart" element={<QuickStart />} />
              <Route path="/resources/faq" element={<FAQ />} />
              <Route path="/resources/privacy" element={<Privacy />} />
              <Route path="/resources/pilot-protocol" element={<PilotProtocol />} />
              <Route path="/resources/fhir-guide" element={<FHIRGuide />} />
              <Route path="/resources/partners" element={<Partners />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
