
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import TechnologyPage from "./pages/TechnologyPage";
import OurSolutionsPage from "./pages/OurSolutionsPage";
import ARVRPage from "./pages/technology/ARVRPage";
import BlockchainPage from "./pages/technology/BlockchainPage";
import ClinicPage from "./pages/ClinicPage";
import CareAtHomePage from "./pages/clinic/CareAtHomePage";
import PodcastPage from "./pages/PodcastPage";
import LeadershipPage from "./pages/company/LeadershipPage";
import CareersPage from "./pages/company/CareersPage";
import PressPage from "./pages/company/PressPage";
import ContactUsPage from "./pages/ContactUsPage";
import WholePersonNavigationPage from "./pages/clinic/WholePersonNavigationPage";
import ChronicConditionOptimizationPage from "./pages/clinic/ChronicConditionOptimizationPage";
import AIGenerativeAIPage from "./pages/technology/AIGenerativeAIPage";
import IOMTPage from "./pages/technology/IOMTPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20 md:pt-24">
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Clinic Routes */}
              <Route path="/clinic" element={<ClinicPage />} />
              <Route path="/clinic/care-at-home" element={<CareAtHomePage />} />
              <Route path="/clinic/whole-person-navigation" element={<WholePersonNavigationPage />} />
              <Route path="/clinic/chronic-condition-optimization" element={<ChronicConditionOptimizationPage />} />
              
              
              {/* Technology Routes */}
              <Route path="/technology" element={<TechnologyPage />} />
              
              <Route path="/technology/ar-vr" element={<ARVRPage />} />
              <Route path="/technology/blockchain" element={<BlockchainPage />} />
              <Route path="/technology/ai-generative" element={<AIGenerativeAIPage />} />
              <Route path="/technology/iomt" element={<IOMTPage />} />
              {/* Solutions */}
              <Route path="/our-solutions" element={<OurSolutionsPage />} />
              {/* Podcast Route */}
              <Route path="/podcast" element={<PodcastPage />} />
              
              {/* Company Routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/leadership" element={<LeadershipPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about/press" element={<PressPage />} />
              
              {/* Contact Route */}
              <Route path="/contact" element={<ContactUsPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
