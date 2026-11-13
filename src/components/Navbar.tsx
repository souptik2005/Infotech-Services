import { useEffect } from 'react';
import { X } from 'lucide-react';

export type NavItemId =
  | 'home'
  | 'about'
  | 'services'
  | 'pricing'
  | 'faq'
  | 'contact';

export interface NavItem {
  id: NavItemId;
  label: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: '/assets/aistudio/Home_44d9b2f8.png' },
  {
    id: 'about',
    label: 'About Us',
    icon: '/assets/aistudio/AboutUs_0f14296c.png',
  },
  {
    id: 'services',
    label: 'Our Services',
    icon: '/assets/aistudio/Our_Services_2486be29.png',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: '/assets/aistudio/Pricing_4155c650.png',
  },
  { id: 'faq', label: 'FAQ', icon: '/assets/aistudio/FAQ_f589f334.png' },
  {
    id: 'contact',
    label: 'Contact',
    icon: '/assets/aistudio/Contact_a112eccb.png',
  },
];

interface NavbarProps {
  activeNav: NavItemId;
  isDrawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
  onSelectNav: (id: NavItemId) => void;
  onContactClick: () => void;
}

export function Navbar({
  activeNav,
  isDrawerOpen,
  onOpenDrawer,
  onCloseDrawer,
  onSelectNav,
  onContactClick,
}: NavbarProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        onCloseDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, onCloseDrawer]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#EEF1FB] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[82px] md:px-8 lg:h-[88px] lg:px-12 xl:px-[100px]">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onSelectNav('home');
            }}
            className="flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] rounded"
            aria-label="Go to Home"
          >
            <img
              src="/assets/aistudio/Logo_9649f3ba.png"
              alt="Logo"
              className="h-8 w-auto object-contain md:h-9"
            />
          </a>

          {/* Desktop Center Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 lg:flex xl:gap-10"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectNav(item.id)}
                  className={`cursor-pointer text-[16px] xl:text-[17px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] rounded px-1 py-0.5 ${
                    isActive
                      ? 'font-medium text-[#3e54d3]'
                      : 'font-normal text-[#1F2937] hover:text-[#3e54d3]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Contact Us (Tablet & Desktop) + Hamburger (Mobile & Tablet) */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onContactClick}
              className="group hidden cursor-pointer items-center gap-2 rounded-[6px] border border-[#3e54d3] bg-[#3e54d3] px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#3e54d3] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] focus-visible:ring-offset-2 md:inline-flex"
            >
              <img
                src="/assets/aistudio/Contact-icon_ffbcc915.png"
                alt=""
                aria-hidden="true"
                className="icon-white-to-brand h-4 w-4 object-contain"
              />
              <span>Contact Us</span>
            </button>

            <button
              type="button"
              onClick={onOpenDrawer}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-[#111827] transition-colors hover:bg-[#F5F7FE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] lg:hidden"
            >
              <img
                src="/assets/aistudio/Menu_f02d3d32.png"
                alt="Menu"
                className="h-5 w-6 object-contain"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Tablet & Mobile Slide-Over Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isDrawerOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/45 transition-opacity"
          onClick={onCloseDrawer}
        />

        {/* Right Drawer Panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`absolute top-0 right-0 flex h-full w-[280px] max-w-[82vw] flex-col bg-[#F9FAFE] shadow-2xl transition-transform duration-300 ease-out sm:w-[310px] ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[#E5E9F8] px-6 py-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onSelectNav('home');
                onCloseDrawer();
              }}
              className="flex items-center"
            >
              <img
                src="/assets/aistudio/Logo_9649f3ba.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
            <button
              type="button"
              onClick={onCloseDrawer}
              aria-label="Close navigation menu"
              className="cursor-pointer rounded-md p-1.5 text-[#3e54d3] transition-colors hover:bg-[#EEF1FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3]"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          {/* Drawer Navigation Links with Icons */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectNav(item.id);
                        onCloseDrawer();
                      }}
                      className={`flex w-full cursor-pointer items-center gap-4 rounded-lg px-3 py-3 text-left text-[17px] transition-colors duration-150 ${
                        isActive
                          ? 'bg-[#EEF1FC] font-medium text-[#3e54d3]'
                          : 'font-normal text-[#1F2937] hover:bg-[#F0F3FD] hover:text-[#3e54d3]'
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 object-contain ${
                          isActive ? 'drawer-icon-brand' : 'drawer-icon-dark'
                        }`}
                      />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Bottom Full-Width Contact Us CTA */}
          <div className="border-t border-[#E5E9F8] p-6">
            <button
              type="button"
              onClick={() => {
                onCloseDrawer();
                onContactClick();
              }}
              className="w-full cursor-pointer rounded-[6px] border border-[#3e54d3] bg-[#3e54d3] py-3 text-center text-[16px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#3e54d3] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3]"
            >
              Contact Us
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
