import { ArrowUpRight } from "lucide-react";
import { BOOKING_LINK } from "./Navbar";

export function StickyMobileBar() {
  return (
    <div
      aria-label="Sticky mobile action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#18181B]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl"
    >
      <a
        href={BOOKING_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-sm hover:bg-[#F5A510] active:scale-95 transition-all shadow-md"
      >
        <span>Book a free audit call</span>
        <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}
