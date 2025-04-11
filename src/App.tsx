
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import MedicareReimbursementPage from "./pages/solutions/MedicareReimbursementPage";
import CareCoordinationPage from "./pages/solutions/CareCoordinationPage";
import HealthcareAnalyticsPage from "./pages/solutions/HealthcareAnalyticsPage";
import RiskAdjustmentPage from "./pages/solutions/RiskAdjustmentPage";
import RemotePatientMonitoringPage from "./pages/solutions/RemotePatientMonitoringPage";
import ChronicCareManagementPage from "./pages/solutions/ChronicCareManagementPage";
import WhitePapersPage from "./pages/WhitePapersPage";
import WebinarsPage from "./pages/WebinarsPage";
import MedicareGuidesPage from "./pages/MedicareGuidesPage";
import LeadershipPage from "./pages/company/LeadershipPage";
import CareersPage from "./pages/company/CareersPage";
import PressPage from "./pages/company/PressPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/medicare-reimbursement" element={<MedicareReimbursementPage />} />
          <Route path="/solutions/care-coordination" element={<CareCoordinationPage />} />
          <Route path="/solutions/healthcare-analytics" element={<HealthcareAnalyticsPage />} />
          <Route path="/solutions/risk-adjustment" element={<RiskAdjustmentPage />} />
          <Route path="/solutions/remote-patient-monitoring" element={<RemotePatientMonitoringPage />} />
          <Route path="/solutions/chronic-care-management" element={<ChronicCareManagementPage />} />
          
          {/* Resources Routes */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/blog" element={<BlogPage />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources/white-papers" element={<WhitePapersPage />} />
          <Route path="/resources/webinars" element={<WebinarsPage />} />
          <Route path="/resources/medicare-guides" element={<MedicareGuidesPage />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/careers" element={<CareersPage />} />
          <Route path="/about/press" element={<PressPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
