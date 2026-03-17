import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import FeedPage from "@/pages/FeedPage";
import JobsPage from "@/pages/JobsPage";
import EventsPage from "@/pages/EventsPage";
import ForumPage from "@/pages/ForumPage";
import DirectoryPage from "@/pages/DirectoryPage";
import AlumniTalksPage from "@/pages/AlumniTalksPage";
import DiscountsPage from "@/pages/DiscountsPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<FeedPage />} />
            <Route path="/empleo" element={<JobsPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/foro" element={<ForumPage />} />
            <Route path="/directorio" element={<DirectoryPage />} />
            <Route path="/alumni-talks" element={<AlumniTalksPage />} />
            <Route path="/descuentos" element={<DiscountsPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
