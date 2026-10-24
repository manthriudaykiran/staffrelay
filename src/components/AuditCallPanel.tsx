import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, ArrowUpRight, Mail } from "lucide-react";
import { BOOKING_LINK } from "./Navbar";

const THREE_THINGS = [
  {
    title: "Where you lose customers today",
    description:
      "We identify exact points in your call flow where hiring managers and candidates hang up and contact your competitors.",
  },
  {
    title: "What to automate first",
    description:
      "We outline the highest-yield text back and intake messages tailored to your specific recruiting specialties.",
  },
  {
    title: "A clear price for your business",
    description:
      "You receive a transparent setup quote and operational plan customized to your agency size and volume.",
  },
];

export function AuditCallPanel() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#18181B] text-white border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#242428] rounded-[24px] p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FFB020]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Pill */}
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FFB020] mb-4">
              Free 1:1 Strategy Session
            </span>

            {/* Panel Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Get your AI growth plan in a free 1:1 call
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-10">
              In a twenty-minute call, we examine your current missed call leaks and design your automated intake flow.
            </p>

            {/* Three Things You Leave With */}
            <div className="space-y-6 mb-12">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                The three things you leave with
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {THREE_THINGS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#18181B] rounded-2xl p-5 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#FFB020] text-[#18181B] flex items-center justify-center mb-3 shrink-0">
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Action Buttons (No forms, no popups) */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-base hover:bg-[#F5A510] active:scale-95 transition-all shadow-lg"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
              </a>

              <a
                href="mailto:mudaykiran.8801@gmail.com?subject=StaffRelay%20Free%20Audit%20Call"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/15 transition-colors border border-white/10"
              >
                <Mail className="w-4 h-4 text-[#FFB020] shrink-0" aria-hidden="true" />
                <span>Email Uday directly</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
