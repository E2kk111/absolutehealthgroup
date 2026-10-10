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
import CareInABoxPage from "./pages/CareInABoxPage";
import VMSHealthspanPage from "./pages/VMSHealthspanPage";
import IndependentPhysicianPage from "./pages/IndependentPhysicianPage";
import BlogPage from "./pages/BlogPage";
import NewsletterPage from "./pages/NewsletterPage";
import FlyerPage from "./pages/FlyerPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import AIONIntelligencePage from "./pages/AIONIntelligencePage";
import DermalQPage from "./pages/DermalQPage";
import GitHealthWorldOSPage from "./pages/GitHealthWorldOSPage";

const queryClient = new QueryClient();

const App = () => (
 <QueryClientProvider client={queryClient}><TooltipProvider><Toaster/><Sonner/><BrowserRouter>
  <div className="flex min-h-screen flex-col"><Header/><main className="flex-grow pt-20 md:pt-24"><Routes>
   <Route path="/" element={<Index/>}/><Route path="/githealth/worldos" element={<GitHealthWorldOSPage/>}/><Route path="/aion-intelligence" element={<AIONIntelligencePage/>}/><Route path="/dermalq" element={<DermalQPage/>}/>
   <Route path="/clinic" element={<ClinicPage/>}/><Route path="/clinic/care-at-home" element={<CareAtHomePage/>}/><Route path="/clinic/whole-person-navigation" element={<WholePersonNavigationPage/>}/><Route path="/clinic/chronic-condition-optimization" element={<ChronicConditionOptimizationPage/>}/>
   <Route path="/technology" element={<TechnologyPage/>}/><Route path="/technology/ar-vr" element={<ARVRPage/>}/><Route path="/technology/blockchain" element={<BlockchainPage/>}/><Route path="/technology/ai-generative" element={<AIGenerativeAIPage/>}/><Route path="/technology/iomt" element={<IOMTPage/>}/>
   <Route path="/our-solutions" element={<OurSolutionsPage/>}/><Route path="/care-in-a-box" element={<CareInABoxPage/>}/><Route path="/independent-physician" element={<IndependentPhysicianPage/>}/><Route path="/vms-healthspan" element={<VMSHealthspanPage/>}/>
   <Route path="/newsletter" element={<NewsletterPage/>}/><Route path="/blog" element={<BlogPage/>}/><Route path="/flyer" element={<FlyerPage/>}/><Route path="/social-media" element={<SocialMediaPage/>}/>
   <Route path="/podcast" element={<PodcastPage/>}/>
   <Route path="/about" element={<AboutPage/>}/><Route path="/about/leadership" element={<LeadershipPage/>}/><Route path="/careers" element={<CareersPage/>}/><Route path="/about/press" element={<PressPage/>}/>
   <Route path="/contact" element={<ContactUsPage/>}/><Route path="*" element={<NotFound/>}/>
  </Routes></main></div>
 </BrowserRouter></TooltipProvider></QueryClientProvider>
);
export default App;
