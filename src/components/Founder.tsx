import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { BOOKING_LINK } from "./Navbar";

export function Founder() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const founderPhotoSrc =
    "https://dashboard.freedomwithai.com/api/hk/site-photo/IB4k3iYsodj6o3WSSURqk7tS.webp";

  return (
    <section className="py-20 md:py-28 bg-[#F6F5F1] text-[#18181B] border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[24px] p-8 sm:p-12 md:p-16 border border-stone-200/80 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* 4:5 Frame for Founder Photo */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[24px] overflow-hidden bg-stone-100 border border-stone-200 shadow-md">
                {!imageError ? (
                  <img
                    src={founderPhotoSrc}
                    alt="Uday Kiran, Founder of StaffRelay"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#18181B] text-white p-6">
                    <Logo light size="lg" />
                    <p className="mt-4 text-xs text-stone-400 text-center font-medium">
                      StaffRelay Founder
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Founder Bio and Booking CTA */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 flex flex-col items-start"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Founder, StaffRelay
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] mb-4">
                Uday Kiran
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                We help IT staffing and recruiting agencies across the United States capture every candidate and client requisition with instant automated text back systems.
              </p>

              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-sm sm:text-base hover:bg-[#F5A510] active:scale-95 transition-all shadow-md hover:shadow-lg"
              >
                <span>Book a free call with Uday</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
