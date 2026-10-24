import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { CalendarCheck, FileSpreadsheet, Wrench } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: typeof CalendarCheck;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Book your free audit call",
    description:
      "Schedule a twenty-minute session to review your agency phone flow and see where you lose inbound calls.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Get your plan",
    description:
      "We map out your automated text back flow, role qualification questions, and recruiter order alerts.",
    icon: FileSpreadsheet,
  },
  {
    number: "03",
    title: "We set it up on your WhatsApp",
    description:
      "We connect your numbers, test your intake sequences, and train your recruitment team.",
    icon: Wrench,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "center center"],
  });

  const lineWidth = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="py-20 md:py-28 bg-[#F6F5F1] text-[#18181B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-500 mb-3">
            Simple 3-step process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight">
            How it works for your agency
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Highlight Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-stone-200">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-[#FFB020] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 24 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : idx * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white rounded-[24px] p-7 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Step indicator with icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#FFB020] text-[#18181B] flex items-center justify-center font-['Space_Grotesk'] font-bold text-lg shadow-sm">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-['Space_Grotesk'] font-bold text-2xl text-stone-300">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#18181B] tracking-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
