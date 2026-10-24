/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { WhatChanges } from "./components/WhatChanges";
import { SampleBuilds } from "./components/SampleBuilds";
import { CostCalculator } from "./components/CostCalculator";
import { HowItWorks } from "./components/HowItWorks";
import { Founder } from "./components/Founder";
import { AuditCallPanel } from "./components/AuditCallPanel";
import { Questions } from "./components/Questions";
import { ClosingAndFooter } from "./components/ClosingAndFooter";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] text-[#18181B] selection:bg-[#FFB020] selection:text-[#18181B] pb-16 md:pb-0">
      {/* 1. Top bar */}
      <Navbar />

      <main>
        {/* 2. Hero on dark colour */}
        <Hero />

        {/* 3. Marquee right under hero */}
        <Marquee />

        {/* 4. What changes for you */}
        <WhatChanges />

        {/* 5. Sample builds */}
        <SampleBuilds />

        {/* 6. Proof: Calculator */}
        <CostCalculator />

        {/* 7. How it works */}
        <HowItWorks />

        {/* 8. Founder */}
        <Founder />

        {/* 9. Free audit call panel */}
        <AuditCallPanel />

        {/* 10. Questions */}
        <Questions />

        {/* 11. Closing and Footer */}
        <ClosingAndFooter />
      </main>

      {/* Sticky bar for mobile viewports */}
      <StickyMobileBar />
    </div>
  );
}
