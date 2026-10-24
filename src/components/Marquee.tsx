import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const ROW_ONE_ITEMS = [
  "Missed call instant text back",
  "Role and skill intake",
  "Direct recruiter order dispatch",
  "Custom agency response scripts",
];

const ROW_TWO_ITEMS = [
  "FOR IT STAFFING AND RECRUITING AGENCIES",
  "THE UNITED STATES",
  "RUNS ON YOUR WHATSAPP",
];

export function Marquee() {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Repeat items to ensure seamless loop
  const repeatedRowOne = [...ROW_ONE_ITEMS, ...ROW_ONE_ITEMS, ...ROW_ONE_ITEMS, ...ROW_ONE_ITEMS];
  const repeatedRowTwo = [...ROW_TWO_ITEMS, ...ROW_TWO_ITEMS, ...ROW_TWO_ITEMS, ...ROW_TWO_ITEMS];

  return (
    <section
      aria-label="Features summary marquee"
      className="w-full bg-[#18181B] border-b border-white/10 py-6 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Big and bold in white, heading font, moves left */}
        <div className="relative w-full overflow-hidden flex">
          <motion.div
            className="flex items-center shrink-0"
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : { x: ["0%", "-50%"] }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isHovered ? 45 : 22,
                ease: "linear",
              },
            }}
          >
            {repeatedRowOne.map((item, index) => (
              <div key={`row1-${index}`} className="flex items-center shrink-0">
                <span className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                  {item}
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-[#FFB020] mx-4 sm:mx-6 shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Half size, uppercase, wide spacing, off-white at 60%, moves right */}
        <div className="relative w-full overflow-hidden flex">
          <motion.div
            className="flex items-center shrink-0"
            animate={
              shouldReduceMotion
                ? { x: 0 }
                : { x: ["-50%", "0%"] }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isHovered ? 50 : 25,
                ease: "linear",
              },
            }}
          >
            {repeatedRowTwo.map((item, index) => (
              <div key={`row2-${index}`} className="flex items-center shrink-0">
                <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#F6F5F1]/60 whitespace-nowrap">
                  {item}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#FFB020] mx-4 sm:mx-6 shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
