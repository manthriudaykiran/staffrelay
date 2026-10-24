import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_LINK } from "./Navbar";

function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(val);
}

export function CostCalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState<number>(80);
  const [unansweredShare, setUnansweredShare] = useState<number>(25);
  const [averageValue, setAverageValue] = useState<number>(4000);

  const shouldReduceMotion = useReducedMotion();

  // Calculations
  const missedCallsMonth = Math.round(callsPerMonth * (unansweredShare / 100));
  const lostPerMonth = missedCallsMonth * averageValue;
  const lostPerYear = lostPerMonth * 12;

  // Animated numbers
  const [displayMonth, setDisplayMonth] = useState<number>(lostPerMonth);
  const [displayYear, setDisplayYear] = useState<number>(lostPerYear);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayMonth(lostPerMonth);
      setDisplayYear(lostPerYear);
      return;
    }

    const startMonth = displayMonth;
    const startYear = displayYear;
    const diffMonth = lostPerMonth - startMonth;
    const diffYear = lostPerYear - startYear;

    let startTime: number | null = null;
    const duration = 240;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayMonth(Math.round(startMonth + diffMonth * progress));
      setDisplayYear(Math.round(startYear + diffYear * progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [lostPerMonth, lostPerYear, shouldReduceMotion]);

  return (
    <section
      id="cost-calculator"
      className="py-20 md:py-28 bg-[#18181B] text-white border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-400 mb-3">
            Inbound call economics
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            What missed candidate and client calls cost you
          </h2>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#242428] rounded-[24px] p-6 sm:p-10 border border-white/10">
          {/* Sliders Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB020] block mb-6">
                Your numbers
              </span>

              {/* Slider 1 */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="calls-slider" className="text-stone-300 font-medium">
                    Inbound calls a month
                  </label>
                  <span className="font-['Space_Grotesk'] font-bold text-white text-base tabular-nums">
                    {callsPerMonth}
                  </span>
                </div>
                <input
                  id="calls-slider"
                  type="range"
                  min="20"
                  max="300"
                  step="5"
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>20 calls</span>
                  <span>300 calls</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="unanswered-slider" className="text-stone-300 font-medium">
                    Share of calls that go unanswered
                  </label>
                  <span className="font-['Space_Grotesk'] font-bold text-white text-base tabular-nums">
                    {unansweredShare}%
                  </span>
                </div>
                <input
                  id="unanswered-slider"
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={unansweredShare}
                  onChange={(e) => setUnansweredShare(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>5%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="value-slider" className="text-stone-300 font-medium">
                    Average placement or order value
                  </label>
                  <span className="font-['Space_Grotesk'] font-bold text-white text-base tabular-nums">
                    {formatCurrency(averageValue)}
                  </span>
                </div>
                <input
                  id="value-slider"
                  type="range"
                  min="1000"
                  max="12000"
                  step="500"
                  value={averageValue}
                  onChange={(e) => setAverageValue(Number(e.target.value))}
                  className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#FFB020]"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>$1,000</span>
                  <span>$12,000</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 pt-4 border-t border-white/10">
              Move the sliders to match your current staffing call volume and fee structure.
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-[#0F0F11] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5">
            <div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-4">
                Estimated opportunity loss
              </span>

              {/* Monthly lost */}
              <div className="mb-6">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  Money lost a month
                </p>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#FFB020] tabular-nums tracking-tight">
                  {formatCurrency(displayMonth)}
                </div>
              </div>

              {/* Annual lost */}
              <div className="pt-5 border-t border-white/10 mb-8">
                <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  Money lost a year
                </p>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-white tabular-nums tracking-tight">
                  {formatCurrency(displayYear)}
                </div>
              </div>

              {/* Required note: "Your estimate. We go through it on the free audit call." */}
              <p className="text-sm text-stone-300 italic mb-8">
                Your estimate. We go through it on the free audit call.
              </p>
            </div>

            {/* CTA button */}
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#FFB020] text-[#18181B] font-bold text-sm sm:text-base hover:bg-[#F5A510] active:scale-95 transition-all shadow-md"
            >
              <span>Book a free audit call</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
