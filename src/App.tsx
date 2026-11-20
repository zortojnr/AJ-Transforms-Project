import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import {
  AboutPage,
  CapabilitiesPage,
  ContactPage,
  IndustriesPage,
  InsightsPage,
  SolutionsPage,
} from './components/SubPages';
import { type RouteKey } from './data/consultancyData';

const VALID_ROUTES: RouteKey[] = [
  'home',
  'about',
  'capabilities',
  'solutions',
  'industries',
  'insights',
  'contact',
];

function parseHashRoute(): RouteKey {
  const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (VALID_ROUTES.includes(raw as RouteKey)) {
    return raw as RouteKey;
  }
  return 'home';
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState<RouteKey>(() => parseHashRoute());
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);
  const [consultationFocus, setConsultationFocus] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveRoute(parseHashRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (route: RouteKey) => {
    setActiveRoute(route);
    if (route !== 'insights') {
      setSelectedInsightId(null);
    }
    if (window.location.hash !== `#${route}`) {
      window.history.pushState(null, '', `#${route}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInsight = (articleId: string) => {
    setSelectedInsightId(articleId);
    setActiveRoute('insights');
    window.history.pushState(null, '', '#insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartConsultation = (focusTopic?: string) => {
    setConsultationFocus(focusTopic);
    navigate('contact');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F5F3EE] text-[#303640]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#B69A70] focus:text-[#101B2D] focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar activeRoute={activeRoute} onNavigate={navigate} />

        <main id="main-content" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoute}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeRoute === 'home' && (
                <HomePage
                  onNavigate={navigate}
                  onOpenInsight={handleOpenInsight}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'about' && (
                <AboutPage
                  onNavigate={navigate}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'capabilities' && (
                <CapabilitiesPage
                  onNavigate={navigate}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'solutions' && (
                <SolutionsPage
                  onNavigate={navigate}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'industries' && (
                <IndustriesPage
                  onNavigate={navigate}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'insights' && (
                <InsightsPage
                  selectedArticleId={selectedInsightId}
                  onSelectArticle={(id) => {
                    setSelectedInsightId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onNavigate={navigate}
                  onStartConsultation={handleStartConsultation}
                />
              )}
              {activeRoute === 'contact' && (
                <ContactPage
                  initialFocus={consultationFocus}
                  onNavigate={navigate}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
