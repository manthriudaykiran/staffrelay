import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { MessageCircle, CheckCircle2, BellRing } from "lucide-react";

interface SampleBuildItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  whatYouGet: string;
  whatChangesForYou: string;
  bubbleIcon: typeof MessageCircle;
  bubbleSender: string;
  bubbleText: string;
  imageOnRight: boolean;
}

const BUILDS: SampleBuildItem[] = [
  {
    id: "build-1",
    imageSrc: "/work-1.jpg",
    imageAlt:
      "Staff member smiling at phone at IT staffing agency front desk in the United States",
    title: "Instant Missed Call Text Back",
    whatYouGet:
      "An automated text back configured on your agency phone lines that messages every unanswered caller within sixty seconds.",
    whatChangesForYou:
      "You never lose an urgent requisition to another agency simply because your recruiters were on client calls.",
    bubbleIcon: MessageCircle,
    bubbleSender: "StaffRelay Automated Reply",
    bubbleText:
      "Hi, sorry we missed your call. What role or tech skill are you looking to fill?",
    imageOnRight: false,
  },
  {
    id: "build-2",
    imageSrc: "/work-2.jpg",
    imageAlt:
      "IT recruiting agency director in contemporary open-plan office in the United States glancing at phone",
    title: "Automated Role & Skill Intake",
    whatYouGet:
      "A conversational intake script that asks the caller what role, seniority, technology stack, and timeline they need.",
    whatChangesForYou:
      "Your team stops playing phone tag. You get structured requisition notes before your recruiter dials the client back.",
    bubbleIcon: CheckCircle2,
    bubbleSender: "Hiring Manager Intake",
    bubbleText:
      "Need 2 Senior DevOps engineers with AWS and Kubernetes for an immediate contract.",
    imageOnRight: true,
  },
  {
    id: "build-3",
    imageSrc: "/work-3.jpg",
    imageAlt:
      "Satisfied hiring client leaving IT staffing agency office in the United States holding phone",
    title: "Direct Recruiter Alert & Order Routing",
    whatYouGet:
      "Instant notification delivery straight into your recruiter team chat with the complete caller transcript and order details.",
    whatChangesForYou:
      "Your recruiters call back qualified leads in minutes. You build a reputation as the fastest staffing partner in your market.",
    bubbleIcon: BellRing,
    bubbleSender: "Recruiter Queue Alert",
    bubbleText:
      "New requisition captured. Client ready for recruiter callback with matched profiles.",
    imageOnRight: false,
  },
];

function BuildRow({
  build,
  index,
}: {
  build: SampleBuildItem;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Soft parallax drift for photo
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-16, 16]
  );

  const BubbleIcon = build.bubbleIcon;

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
        index !== 0 ? "pt-16 sm:pt-20 border-t border-stone-200/60" : ""
      }`}
    >
      {/* Image container */}
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }
        }
        whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`relative lg:col-span-6 ${
          build.imageOnRight ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.div
          style={{ y: imageY }}
          className="relative rounded-[24px] overflow-hidden shadow-lg border border-stone-200 aspect-[3/2] bg-stone-100"
        >
          <img
            src={build.imageSrc}
            alt={build.imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Overlapping small coded chat bubble or notification */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#18181B]/95 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/15 shadow-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-[#FFB020] text-[#18181B] flex items-center justify-center shrink-0">
                <BubbleIcon className="w-3 h-3" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-bold text-stone-200 truncate">
                {build.bubbleSender}
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-snug">
              {build.bubbleText}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Text details */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`lg:col-span-6 flex flex-col justify-center ${
          build.imageOnRight ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Sample build label */}
        <span className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
          Sample build
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight mb-6">
          {build.title}
        </h3>

        {/* What you get */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2">
            What you get
          </h4>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {build.whatYouGet}
          </p>
        </div>

        {/* What changes for you */}
        <div className="pt-5 border-t border-stone-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2">
            What changes for you
          </h4>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {build.whatChangesForYou}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function SampleBuilds() {
  return (
    <section
      id="sample-builds"
      className="py-20 md:py-28 bg-[#F6F5F1] text-[#18181B]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-500 mb-3">
            How it works in practice
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#18181B] leading-tight">
            Built for your agency workflow.
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {BUILDS.map((build, index) => (
            <BuildRow key={build.id} build={build} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
