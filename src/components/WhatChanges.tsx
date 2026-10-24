import { motion, useReducedMotion } from "motion/react";
import { PhoneForwarded, ClipboardCheck, UserCheck } from "lucide-react";

interface ChangeCard {
  problemHeading: string;
  whatChanges: string;
  icon: typeof PhoneForwarded;
}

const CARDS: ChangeCard[] = [
  {
    problemHeading:
      "You lose urgent requisitions when hiring managers call competitor agencies after one missed ring",
    whatChanges:
      "When a client calls during candidate interviews or after hours, we text them back within sixty seconds. Your agency captures the requisition before they dial another vendor.",
    icon: PhoneForwarded,
  },
  {
    problemHeading:
      "Your recruiters waste hours chasing voicemails instead of pitching qualified candidates",
    whatChanges:
      "The text back immediately asks what role, tech stack, and location they need. Your recruiter sees the exact requirement on their screen before making the callback.",
    icon: ClipboardCheck,
  },
  {
    problemHeading:
      "Your agency loses top tech talent who accept another interview while waiting for your call",
    whatChanges:
      "Consultants who ring your office receive an immediate message confirming their interest and collecting their primary skills. You lock in their availability first.",
    icon: UserCheck,
  },
];

export function WhatChanges() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="what-changes"
      className="py-20 md:py-28 bg-[#F6F5F1] text-[#18181B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-500 mb-3">
            What changes for you
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight">
            Stop losing job orders to an unanswered phone.
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Big icon in a rounded highlight tile */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB020] text-[#18181B] flex items-center justify-center mb-6 shadow-sm shrink-0">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>

                  {/* Problem heading starting with You or Your */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#18181B] leading-snug mb-4">
                    {card.problemHeading}
                  </h3>
                </div>

                {/* What changes for you */}
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-4 border-t border-stone-100">
                  {card.whatChanges}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
