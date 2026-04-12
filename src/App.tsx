import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./views/Index.tsx";
import WhyUs from "./views/WhyUs.tsx";
import SafetyNets from "./views/SafetyNets.tsx";
import BirdProtection from "./views/BirdProtection.tsx";
import AllSportsNets from "./views/AllSportsNets.tsx";
import Contact from "./views/Contact.tsx";
import Gallery from "./views/Gallery.tsx";
import FAQ from "./views/FAQ.tsx";
import ServiceDetail from "./views/ServiceDetail.tsx";
import NotFound from "./views/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/safety-nets" element={<SafetyNets />} />
          <Route path="/safety-nets/:type" element={<ServiceDetail />} />
          <Route path="/bird-protection" element={<BirdProtection />} />
          <Route path="/bird-protection/:type" element={<ServiceDetail />} />
          <Route path="/sports-nets" element={<AllSportsNets />} />
          <Route path="/sports-nets/:type" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
