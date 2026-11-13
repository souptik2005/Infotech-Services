import { useState } from 'react';
import { Navbar, type NavItemId } from './components/Navbar';

interface PillarItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const HERO_CHECKLIST = [
  'End-To-End Compliance Support',
  'Regulatory Filings Made Simple',
  'Tailored Solutions For Independent Analysts & Firms',
];

const COMPLIANCE_PILLARS: PillarItem[] = [
  {
    id: 'regulatory-clarity',
    icon: '/assets/aistudio/Regulatory_Clarity_f0374d52.png',
    title: 'Regulatory Clarity',
    description:
      'We Decode Complex Compliance Rules Into Simple, Actionable Steps.',
  },
  {
    id: 'hassle-free-filings',
    icon: '/assets/aistudio/Hassle-Free_Filings_Clarity_9877165a.png',
    title: 'Hassle-Free Filings Clarity',
    description:
      'From Registration To Ongoing Reporting—We Manage It End-To-End.',
  },
  {
    id: 'risk-protection',
    icon: '/assets/aistudio/Risk_Protection_fd29a1c7.png',
    title: 'Risk Protection',
    description:
      'Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support.',
  },
];

export default function App() {
  const [activeNav, setActiveNav] = useState<NavItemId>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectNav = (id: NavItemId) => {
    setActiveNav(id);
    if (id === 'home') {
      scrollToSection('home');
    } else if (id === 'about' || id === 'services') {
      scrollToSection('why-compliance');
    }
  };

  const handleGetStarted = () => {
    setActiveNav('services');
    scrollToSection('why-compliance');
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#3e54d3]/15 selection:text-[#3e54d3]">
      <Navbar
        activeNav={activeNav}
        isDrawerOpen={isDrawerOpen}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onCloseDrawer={() => setIsDrawerOpen(false)}
        onSelectNav={handleSelectNav}
        onContactClick={() => setActiveNav('contact')}
      />

      <main>
        {/* SECTION 1: HERO */}
        <section
          id="home"
          className="scroll-mt-24 overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-12 xl:px-[100px]">
            <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
              {/* Hero Text Column */}
              <div className="text-center lg:col-span-6 lg:text-left">
                <h1 className="text-[38px] leading-[48px] font-bold tracking-[-0.01em] text-[#111827] md:text-[54px] md:leading-[75px] lg:text-[52px] lg:leading-[70px] xl:text-[64px] xl:leading-[85px]">
                  Simplifying
                  <br className="hidden lg:block" />{' '}
                  <span className="relative inline-block text-[#3e54d3]">
                    Compliance
                    <img
                      src="/assets/aistudio/underline-Vector_54b53722.png"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-1 left-0 h-auto w-full select-none md:-bottom-1.5"
                    />
                  </span>
                  <br className="lg:hidden" />
                  <span className="hidden lg:inline"> For</span>
                  <span className="lg:hidden">For Research Analysts</span>
                  <br className="hidden lg:block" />
                  <span className="hidden lg:inline">Research Analysts</span>
                </h1>

                <p className="mx-auto mt-5 max-w-[590px] text-[18px] leading-[32px] font-normal text-[#374151] md:mt-6 lg:mx-0">
                  Stay Focused On Your Insights—We&apos;ll Handle The Compliance.
                  Our Expert Solutions Ensure Your Research Practices Meet Every
                  Regulatory Requirement With Confidence And Ease.
                </p>

                {/* Checklist */}
                <ul className="mx-auto mt-6 w-fit space-y-3 text-left md:mt-7 md:space-y-3.5 lg:mx-0">
                  {HERO_CHECKLIST.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <img
                        src="/assets/aistudio/check-sign_180ec6dd.png"
                        alt=""
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 object-contain"
                      />
                      <span className="text-[16px] leading-[26px] font-medium text-[#1F2937] sm:text-[18px] sm:leading-[28px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hero CTA Buttons */}
                <div className="mt-8 flex flex-col items-center gap-3.5 md:flex-row md:justify-center md:gap-5 lg:justify-start">
                  <button
                    type="button"
                    onClick={handleGetStarted}
                    className="w-full max-w-[230px] cursor-pointer rounded-[6px] border border-[#3e54d3] bg-[#3e54d3] px-7 py-3 text-[16px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#3e54d3] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] focus-visible:ring-offset-2 md:w-auto md:max-w-none"
                  >
                    Get Started
                  </button>
                  <button
                    type="button"
                    onClick={() => {}}
                    className="w-full max-w-[230px] cursor-pointer rounded-[6px] border border-[#3e54d3] bg-white px-7 py-3 text-[16px] font-medium text-[#3e54d3] transition-all duration-200 hover:bg-[#3e54d3] hover:text-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] focus-visible:ring-offset-2 md:w-auto md:max-w-none"
                  >
                    Book A Consultation
                  </button>
                </div>
              </div>

              {/* Hero Banner Illustration Column */}
              <div className="flex justify-center lg:col-span-6 lg:justify-end">
                <img
                  src="/assets/aistudio/Banner_Image_105f171c.png"
                  alt="Research analyst working on laptop with 4.8 client rating and trusted by 250+ professionals badges"
                  className="h-auto w-full max-w-[460px] object-contain md:max-w-[540px] lg:max-w-[600px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY COMPLIANCE MATTERS */}
        <section
          id="why-compliance"
          className="scroll-mt-24 border-t border-[#F1F3FB] bg-white pt-14 pb-20 md:pt-20 md:pb-24 lg:pt-20 lg:pb-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-12 xl:px-[100px]">
            {/* Top Header Row */}
            <div className="relative grid grid-cols-1 items-start gap-5 text-center md:gap-6 lg:grid-cols-12 lg:gap-10 lg:text-left">
              <div className="lg:col-span-5">
                <h2 className="text-[34px] leading-[48px] font-semibold tracking-[-0.01em] text-[#111827] md:text-[46px] md:leading-[60px] lg:text-[42px] lg:leading-[58px] xl:text-[48px] xl:leading-[70px]">
                  Why{' '}
                  <span className="text-[#3e54d3]">Compliance Matters</span>
                  <br />
                  For Research Analysts
                </h2>
              </div>

              <div className="lg:col-span-7 lg:pt-2">
                <p className="mx-auto max-w-[680px] text-[18px] leading-[32px] font-normal text-[#374151] lg:mx-0">
                  In Today&apos;s Regulatory Environment, Even A Small Oversight
                  Can Lead To Penalties, Reputational Risks, And Loss Of Client
                  Trust. We Help Research Analysts And Firms Navigate Complex
                  Compliance Requirements So They Can Focus On Delivering
                  High-Quality Research Without Worry.
                </p>
              </div>
            </div>

            {/* Decorative Curly Arrow (Vector1) */}
            <div className="flex justify-end pr-6 pt-3 pb-2 md:pr-16 lg:justify-center lg:pr-0 lg:pt-1 lg:pb-4">
              <img
                src="/assets/aistudio/Vector1_34bd89c6.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-14 w-auto select-none md:h-20 lg:-ml-24 lg:h-[88px]"
              />
            </div>

            {/* Lower Content Row: Illustration + Interactive Cards */}
            <div className="mt-2 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-14">
              {/* Illustration Left */}
              <div className="relative flex justify-center lg:col-span-6 lg:justify-start">
                <div className="relative w-full max-w-[440px] md:max-w-[520px] lg:max-w-[560px]">
                  <img
                    src="/assets/aistudio/Section2-Image_4afaee9b.png"
                    alt="Analyst reviewing compliance score dashboard 50/100"
                    className="h-auto w-full object-contain"
                  />
                  {/* Decorative Chevrons (Vector2) */}
                  <img
                    src="/assets/aistudio/Vector2_1ccb3074.png"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none mt-4 h-6 w-auto select-none md:h-7 lg:-ml-4"
                  />
                </div>
              </div>

              {/* 3 Interactive Feature Cards Right */}
              <div className="space-y-5 lg:col-span-6">
                {COMPLIANCE_PILLARS.map((pillar) => {
                  const isSelected = selectedPillarId === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      onClick={() =>
                        setSelectedPillarId(isSelected ? null : pillar.id)
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedPillarId(isSelected ? null : pillar.id);
                        }
                      }}
                      className={`group cursor-pointer rounded-[12px] border-[1.5px] p-5 transition-all duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3e54d3] sm:p-6 ${
                        isSelected
                          ? 'border-[#3e54d3] bg-white shadow-[0_10px_28px_rgba(62,84,211,0.12)]'
                          : 'border-transparent bg-[#F7F8FE] shadow-[0_2px_10px_rgba(17,24,39,0.04)] hover:border-[#3e54d3] hover:bg-white hover:shadow-[0_10px_28px_rgba(62,84,211,0.12)]'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={pillar.icon}
                          alt=""
                          aria-hidden="true"
                          className="mt-0.5 h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
                        />
                        <div className="flex-1">
                          <h3 className="text-[19px] leading-snug font-medium text-[#3e54d3] md:text-[20px]">
                            {pillar.title}
                          </h3>
                          <p className="mt-1.5 text-[16px] leading-[28px] font-normal text-[#374151] sm:text-[18px] sm:leading-[32px]">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
