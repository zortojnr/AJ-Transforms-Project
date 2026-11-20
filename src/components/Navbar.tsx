import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { BRAND, type RouteKey } from '../data/consultancyData';

interface NavbarProps {
  activeRoute: RouteKey;
  onNavigate: (route: RouteKey) => void;
}

const NAV_LINKS: { key: RouteKey; label: string }[] = [
  { key: 'about', label: 'About AJ' },
  { key: 'capabilities', label: 'Capabilities' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'industries', label: 'Industries' },
  { key: 'insights', label: 'Insights' },
];

export function Navbar({ activeRoute, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (route: RouteKey) => {
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101B2D]/95 backdrop-blur-sm border-b border-[#24344D]">
      {/* Architectural Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#B69A70] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-[1.45rem] sm:text-[1.7rem] tracking-[-0.01em] text-[#F5F3EE] whitespace-nowrap shrink-0 hover:text-[#B69A70] transition-colors duration-150"
        >
          {BRAND.shortName}
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeRoute === item.key;
            return (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.key);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#F5F3EE]'
                    : 'text-[#C6CED9] hover:text-[#F5F3EE]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    aria-hidden="true"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-[#B69A70]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 min-h-[40px] ${
              activeRoute === 'contact'
                ? 'bg-[#F5F3EE] text-[#101B2D]'
                : 'bg-[#B69A70] text-[#101B2D] hover:bg-[#C9AF87]'
            }`}
          >
            Contact
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#24344D] text-[#F5F3EE] hover:border-[#B69A70] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-[#24344D] bg-[#101B2D] px-5 py-5"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('home');
                }}
                className={`py-3.5 text-base font-medium border-b border-[#1E2E46] ${
                  activeRoute === 'home' ? 'text-[#B69A70]' : 'text-[#F5F3EE]'
                }`}
              >
                Home
              </a>
              {NAV_LINKS.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.key);
                  }}
                  className={`py-3.5 text-base font-medium border-b border-[#1E2E46] ${
                    activeRoute === item.key ? 'text-[#B69A70]' : 'text-[#F5F3EE]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="mt-5 w-full py-3.5 px-5 bg-[#B69A70] text-[#101B2D] text-sm font-semibold tracking-wide min-h-[44px]"
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
