import { BRAND, MEDIA_ASSETS, type RouteKey } from '../data/consultancyData';

interface FooterProps {
  onNavigate: (route: RouteKey) => void;
}

const FOOTER_NAV: { key: RouteKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Us' },
  { key: 'capabilities', label: 'Capabilities' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'industries', label: 'Industries' },
  { key: 'insights', label: 'Insights' },
  { key: 'contact', label: 'Contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0C1422] text-[#C6CED9] border-t border-[#24344D]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 sm:pb-12 border-b border-[#24344D]">
          <div className="md:col-span-7 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-3 sm:gap-4 font-display text-2xl sm:text-3xl text-[#F5F3EE]"
            >
              <img
                src={MEDIA_ASSETS.logo}
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 aspect-square shrink-0 rounded-full object-contain bg-white"
              />
              {BRAND.name}
            </a>
            <p className="text-sm text-[#8994A3] leading-relaxed max-w-md">
              {BRAND.positioning}
            </p>
            <p className="text-sm text-[#C6CED9] leading-relaxed max-w-md">
              {BRAND.philosophy}
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#B69A70]">
              Navigation
            </h2>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.key);
                    }}
                    className="text-sm text-[#C6CED9] hover:text-[#F5F3EE] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8994A3]">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>{BRAND.concept}</p>
        </div>
      </div>
    </footer>
  );
}
