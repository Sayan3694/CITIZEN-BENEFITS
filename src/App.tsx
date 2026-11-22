import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SchemeSaathiLogo } from './components/SchemeSaathiLogo';
import { MobileBottomNav, Sidebar } from './components/Sidebar';
import { SchemeProvider, useSchemes } from './context/SchemeContext';
import { CategoriesView } from './views/CategoriesView';
import { DashboardView } from './views/DashboardView';
import { DocumentsView } from './views/DocumentsView';
import { FamilyBenefitsView } from './views/FamilyBenefitsView';
import { HomeView } from './views/HomeView';
import { ProfileWizardView } from './views/ProfileWizardView';
import { SavedSchemesView } from './views/SavedSchemesView';
import { SchemeDetailsView } from './views/SchemeDetailsView';
import { SchemeExplorerView } from './views/SchemeExplorerView';
import { SettingsView } from './views/SettingsView';
import { SupportView } from './views/SupportView';

function SchemeSaathiShell() {
  const { activeView, selectedSchemeId, toastMessage } = useSchemes();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setInitializing(false), 320);
    return () => window.clearTimeout(timer);
  }, []);

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'dashboard':
        return <DashboardView />;
      case 'explorer':
        return <SchemeExplorerView />;
      case 'categories':
        return <CategoriesView />;
      case 'details':
        return <SchemeDetailsView />;
      case 'profile':
        return <ProfileWizardView />;
      case 'family':
        return <FamilyBenefitsView />;
      case 'saved':
        return <SavedSchemesView />;
      case 'documents':
        return <DocumentsView />;
      case 'support':
        return <SupportView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#C8E3A9] sm:p-4 lg:p-6 flex items-stretch justify-center">
      {/* Main Black Rounded Dashboard Shell (mirrors Screenshot 2) */}
      <div className="w-full max-w-[1440px] min-h-screen sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)] bg-[#050505] text-white sm:rounded-[28px] lg:rounded-[34px] border border-[#1E1E1E] shadow-[0_24px_70px_rgba(5,5,5,0.28)] flex flex-col overflow-hidden relative">
        {/* Brief Branded Loading Screen */}
        <AnimatePresence>
          {initializing && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed sm:absolute inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center gap-3"
            >
              <SchemeSaathiLogo size={54} variant="lime" />
              <p className="font-display text-lg font-bold tracking-widest text-white uppercase">
                SchemeSaathi
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Dark Top Navbar inside the black container */}
        <Navbar />

        {/* Body Split: Left Vertical Circular Icon Sidebar + Main Content Area */}
        <div className="flex flex-1 min-h-0">
          <Sidebar />

          <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView === 'details' ? `details-${selectedSchemeId}` : activeView}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderActiveView()}
              </motion.div>
            </AnimatePresence>

            <Footer />
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
      </div>

      {/* Transient Feedback Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-16 md:bottom-8 right-5 md:right-9 z-50 bg-[#1D1D1D] border border-[#B6FF50]/60 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-2xl max-w-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#B6FF50] shrink-0" aria-hidden="true" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <SchemeProvider>
        <SchemeSaathiShell />
      </SchemeProvider>
    </ErrorBoundary>
  );
}
