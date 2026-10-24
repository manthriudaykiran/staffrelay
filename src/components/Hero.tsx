import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { PhoneCall, MessageSquare, UserCheck, ArrowUpRight } from "lucide-react";
import { BOOKING_LINK } from "./Navbar";

interface ChatMessage {
  sender: "caller" | "agency" | "recruiter";
  text: string;
  time: string;
}

interface ChatTab {
  id: string;
  title: string;
  icon: typeof PhoneCall;
  callerName: string;
  callerStatus: string;
  messages: ChatMessage[];
}

const CHAT_TABS: ChatTab[] = [
  {
    id: "text-back",
    title: "Missed call text back",
    icon: PhoneCall,
    callerName: "David Miller (Tech Director)",
    callerStatus: "Missed call just now",
    messages: [
      {
        sender: "agency",
        text: "Hi David, this is your agency. We missed your call while assisting another client. Are you looking to hire tech talent or looking for your next role?",
        time: "10:14 AM",
      },
      {
        sender: "caller",
        text: "Need to hire immediately. We have an urgent opening for a cloud engineer.",
        time: "10:15 AM",
      },
    ],
  },
  {
    id: "skill-intake",
    title: "Role & skill intake",
    icon: MessageSquare,
    callerName: "Sarah Chen (VP Engineering)",
    callerStatus: "Active requisition",
    messages: [
      {
        sender: "agency",
        text: "Understood. What specific tech stack, role seniority, and start date do you need?",
        time: "02:30 PM",
      },
      {
        sender: "caller",
        text: "Senior AWS and Kubernetes engineer. Contract to hire. Needs to start in two weeks.",
        time: "02:31 PM",
      },
      {
        sender: "agency",
        text: "Got it. Is this role remote or on site in the United States?",
        time: "02:31 PM",
      },
      {
        sender: "caller",
        text: "Fully remote within the US.",
        time: "02:32 PM",
      },
    ],
  },
  {
    id: "recruiter-dispatch",
    title: "Recruiter order dispatch",
    icon: UserCheck,
    callerName: "Agency Dispatch Line",
    callerStatus: "Recruiter Queue",
    messages: [
      {
        sender: "agency",
        text: "New Requisition Alert: Senior AWS and Kubernetes Engineer. Direct client ready for recruiter callback with matched profiles.",
        time: "02:33 PM",
      },
      {
        sender: "recruiter",
        text: "Order claimed. Reviewing our candidate pool and calling Sarah right now.",
        time: "02:33 PM",
      },
    ],
  },
];

export function Hero() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Auto-rotate tabs if user hasn't manually clicked
  useEffect(() => {
    if (isManual || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % CHAT_TABS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isManual, shouldReduceMotion]);

  const activeTab = CHAT_TABS[activeTabIdx];

  return (
    <section className="relative bg-[#18181B] text-white overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-white/10">
      {/* Drifting highlight glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? { opacity: 0.15 }
            : {
                x: [0, 60, -40, 0],
                y: [0, -50, 40, 0],
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.18, 0.28, 0.18],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#FFB020] blur-[140px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-stone-200 mb-6">
              <span>For IT staffing and recruiting agencies in the United States</span>
            </div>

            {/* Big headline naming the problem said to the reader */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-white mb-6 text-balance">
              You lose candidate placements and client job orders every time a call goes unanswered.
            </h1>

            {/* One plain sentence under it */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-xl">
              We set up an automated text back that messages every missed caller in a minute, asks what role or skill they need, and puts the reply in front of your recruiter.
            </p>

            {/* Action button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-base hover:bg-[#F5A510] active:scale-95 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Book a free audit call</span>
                <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* One small line under the buttons */}
            <p className="text-xs sm:text-sm text-stone-400 mt-4">
              Free 1:1 call. You leave with a plan to grow your agency with AI.
            </p>
          </motion.div>

          {/* Right Column: Phone showing WhatsApp chat */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Tab buttons */}
            <div className="w-full max-w-sm flex p-1 bg-white/10 rounded-xl mb-4 gap-1">
              {CHAT_TABS.map((tab, idx) => {
                const Icon = tab.icon;
                const isSelected = idx === activeTabIdx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTabIdx(idx);
                      setIsManual(true);
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-[#FFB020] text-[#18181B] shadow-sm"
                        : "text-stone-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{tab.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Phone container mockup */}
            <div className="w-full max-w-sm rounded-[32px] p-3 bg-[#0F0F11] border-2 border-stone-800 shadow-2xl">
              <div className="bg-[#121B22] rounded-[24px] overflow-hidden border border-white/5 flex flex-col h-[400px]">
                {/* Chat header */}
                <div className="bg-[#1F2C34] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-xs flex items-center justify-center shrink-0">
                    SR
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-white truncate">
                      {activeTab.callerName}
                    </p>
                    <p className="text-[10px] text-stone-400 truncate">
                      {activeTab.callerStatus}
                    </p>
                  </div>
                </div>

                {/* Chat message stream */}
                <div className="flex-1 p-3.5 overflow-y-auto space-y-2.5 bg-[#0B141A]">
                  <div className="text-center my-1">
                    <span className="text-[10px] bg-[#182229] text-stone-400 px-2.5 py-1 rounded-md">
                      Today · Instant Text Back
                    </span>
                  </div>

                  {activeTab.messages.map((msg, mIdx) => {
                    const isCaller = msg.sender === "caller";
                    const isRecruiter = msg.sender === "recruiter";
                    return (
                      <motion.div
                        key={`${activeTab.id}-${mIdx}`}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, y: 8 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: shouldReduceMotion ? 0 : mIdx * 0.4,
                        }}
                        className={`flex flex-col ${
                          isCaller ? "items-end" : "items-start"
                        }`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                            isCaller
                              ? "bg-[#005C4B] text-white rounded-br-xs"
                              : isRecruiter
                              ? "bg-[#FFB020] text-[#18181B] font-medium rounded-bl-xs"
                              : "bg-[#202C33] text-stone-100 rounded-bl-xs"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <span
                            className={`block text-[9px] text-right mt-1 ${
                              isCaller
                                ? "text-emerald-200"
                                : isRecruiter
                                ? "text-stone-800"
                                : "text-stone-400"
                            }`}
                          >
                            {msg.time}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Chat bottom bar */}
                <div className="bg-[#1F2C34] px-3 py-2 flex items-center gap-2 border-t border-white/5">
                  <div className="flex-1 h-8 bg-[#2A3942] rounded-full px-3 flex items-center text-[11px] text-stone-400">
                    Type a message...
                  </div>
                </div>
              </div>
            </div>

            {/* Small caption under phone */}
            <p className="text-xs text-stone-400 mt-2.5 text-center">
              Example chat
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
