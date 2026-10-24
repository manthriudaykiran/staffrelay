import { Logo } from "./Logo";

export const BOOKING_LINK = "#contact";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#18181B]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020] rounded-lg"
          aria-label="StaffRelay Home"
        >
          <Logo light size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-300"
          aria-label="Main Navigation"
        >
          <a
            href="#what-changes"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Sample builds
          </a>
          <a
            href="#cost-calculator"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Cost calculator
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            How it works
          </a>
          <a
            href="#questions"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Questions
          </a>
        </nav>

        {/* Zone 3: Primary Action Pill */}
        <div className="flex items-center shrink-0">
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#FFB020] text-[#18181B] hover:bg-[#F5A510] active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            Free audit call
          </a>
        </div>
      </div>
    </header>
  );
}
