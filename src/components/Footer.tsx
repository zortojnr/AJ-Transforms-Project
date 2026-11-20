import { BRAND, PLACEHOLDER_DIRECTORY, type RouteKey } from '../data/consultancyData';

interface FooterProps {
  onNavigate: (route: RouteKey) => void;
}

const FOOTER_NAV: { key: RouteKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About AJ' },
  { key: 'capabilities', label: 'Capabilities' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'industries', label: 'Industries' },
  { key: 'insights', label: 'Insights' },
  { key: 'contact', label: 'Contact' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0C1422] text-[#C6CED9] border-t border-[#24344D]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#24344D]">
          <div className="md:col-span-5 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="font-display text-2xl sm:text-3xl text-[#F5F3EE] inline-block"
            >
              {BRAND.name}
            </a>
            <p className="text-sm text-[#8994A3] leading-relaxed max-w-md">
              {BRAND.positioning}
            </p>
            <p className="text-sm text-[#C6CED9] leading-relaxed max-w-md">
              {BRAND.philosophy}
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
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

          <div className="md:col-span-4 space-y-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#B69A70]">
              Direct Enquiries
            </h2>
            <div className="space-y-3 text-sm text-[#C6CED9]">
              <div>
                <span className="block text-xs text-[#8994A3]">Leadership</span>
                <span>
                  {BRAND.principal} · {BRAND.principalRole}
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#8994A3]">Business Email</span>
                <span className="text-[#F5F3EE]">{PLACEHOLDER_DIRECTORY.email}</span>
              </div>
              <div>
                <span className="block text-xs text-[#8994A3]">Telephone</span>
                <span className="text-[#F5F3EE]">{PLACEHOLDER_DIRECTORY.telephone}</span>
              </div>
              <div>
                <span className="block text-xs text-[#8994A3]">Office & Region</span>
                <span>{PLACEHOLDER_DIRECTORY.officeRegion}</span>
              </div>
            </div>
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
