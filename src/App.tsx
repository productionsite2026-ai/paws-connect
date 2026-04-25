import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import PlomberieGenerale from "./pages/PlomberieGenerale.tsx";
import DepannagePlomberie from "./pages/DepannagePlomberie.tsx";
import ChauffagisteInstallation from "./pages/ChauffagisteInstallation.tsx";
import ChauffagisteEntretien from "./pages/ChauffagisteEntretien.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plomberie-generale" element={<PlomberieGenerale />} />
          <Route path="/depannage-plomberie" element={<DepannagePlomberie />} />
          <Route path="/chauffagiste-installation-depannage" element={<ChauffagisteInstallation />} />
          <Route path="/chauffagiste-entretien-reparation" element={<ChauffagisteEntretien />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
