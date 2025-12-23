
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import WhitePapersPage from "./pages/WhitePapersPage";
import WebinarsPage from "./pages/WebinarsPage";
import MedicareGuidesPage from "./pages/MedicareGuidesPage";
import TechnologyPage from "./pages/TechnologyPage";
import OurSolutionsPage from "./pages/technology/OurSolutionsPage";
import ClinicPage from "./pages/ClinicPage";
import HybridClinicsPage from "./pages/clinic/HybridClinicsPage";
import MobileClinicsPage from "./pages/clinic/MobileClinicsPage";
import CareAtHomePage from "./pages/clinic/CareAtHomePage";
import CareNavigationPage from "./pages/clinic/CareNavigationPage";
import PodcastPage from "./pages/PodcastPage";
import LeadershipPage from "./pages/company/LeadershipPage";
import CareersPage from "./pages/company/CareersPage";
import PressPage from "./pages/company/PressPage";
import ContactUsPage from "./pages/ContactUsPage";

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
              <Route path="/clinic/hybrid-clinics" element={<HybridClinicsPage />} />
              <Route path="/clinic/mobile-clinics" element={<MobileClinicsPage />} />
              <Route path="/clinic/care-at-home" element={<CareAtHomePage />} />
              <Route path="/clinic/care-navigation" element={<CareNavigationPage />} />
              
              {/* Resources Routes */}
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/blog" element={<BlogPage />} />
              <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
              <Route path="/resources/white-papers" element={<WhitePapersPage />} />
              <Route path="/resources/webinars" element={<WebinarsPage />} />
              <Route path="/resources/medicare-guides" element={<MedicareGuidesPage />} />
              
              {/* Technology Routes */}
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/technology/our-solutions" element={<OurSolutionsPage />} />
              
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
