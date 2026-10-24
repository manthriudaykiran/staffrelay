import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { BOOKING_LINK } from "./Navbar";

export function ClosingAndFooter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Closing Section with place.jpg background */}
      <section className="relative py-28 md:py-36 bg-[#18181B] text-white overflow-hidden">
        {/* Background photo place.jpg */}
        <div className="absolute inset-0">
          <img
            src="/place.jpg"
            alt="Interior view inside a modern IT staffing and recruiting agency in the United States"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Dark colour layer */}
          <div className="absolute inset-0 bg-[#18181B]/88 backdrop-blur-xs" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight text-balance">
              Stop losing candidate placements and client orders to an unanswered phone.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
              We connect the text back system to your agency lines, capture caller requirements immediately, and put them in front of your recruiters.
            </p>

            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-base sm:text-lg hover:bg-[#F5A510] active:scale-95 transition-all shadow-xl hover:shadow-2xl"
            >
              <span>Book a free audit call</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F11] text-stone-400 py-12 sm:py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
            {/* Logo */}
            <div>
              <Logo light size="md" />
              <p className="text-xs text-stone-400 mt-2">
                The Missed Call Text Back Fix for IT staffing agencies
              </p>
            </div>

            {/* Navigation links mirror */}
            <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <a
                href="#what-changes"
                className="hover:text-white transition-colors"
              >
                What changes
              </a>
              <a
                href="#sample-builds"
                className="hover:text-white transition-colors"
              >
                Sample builds
              </a>
              <a
                href="#cost-calculator"
                className="hover:text-white transition-colors"
              >
                Cost calculator
              </a>
              <a
                href="#how-it-works"
                className="hover:text-white transition-colors"
              >
                How it works
              </a>
              <a
                href="#questions"
                className="hover:text-white transition-colors"
              >
                Questions
              </a>
            </nav>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
            {/* City */}
            <p>Serving agencies throughout the United States</p>

            {/* Copyright */}
            <p>© {new Date().getFullYear()} StaffRelay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
