import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who is this for?",
    answer:
      "This is built for IT staffing and recruiting agencies in the United States that want to stop losing candidate placements and client job orders to missed phone rings.",
  },
  {
    question: "What does it cost?",
    answer:
      "It depends on your business. You get a clear plan and a clear price for your agency on the free audit call.",
  },
  {
    question: "What do we set up?",
    answer:
      "We set up the Missed Call Text Back Fix for IT staffing agencies. When a vendor or candidate calls and no one picks up, it texts them back in a minute, asks what role or skill they need, and puts the reply in front of your recruiter. Your recruiter stops losing orders to a missed ring. Bonus: we write your response scripts.",
  },
  {
    question: "How do you start?",
    answer:
      "Book your free audit call. We examine your current call flow, show you where you lose opportunities, and map out your automated text back setup.",
  },
];

export function Questions() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  function toggleQuestion(idx: number) {
    setOpenIdx(openIdx === idx ? null : idx);
  }

  return (
    <section id="questions" className="py-20 md:py-28 bg-[#F6F5F1] text-[#18181B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-500 mb-3">
            Common questions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] border border-stone-200 overflow-hidden shadow-xs transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB020]"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Space_Grotesk'] font-bold text-lg sm:text-xl text-[#18181B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#FFB020] text-[#18181B] rotate-180"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion ? false : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
