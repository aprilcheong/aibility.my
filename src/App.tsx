import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DomainHostingSection } from './components/DomainHostingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { UpgradeSection } from './components/UpgradeSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white font-sans">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DomainHostingSection />
      <HowItWorksSection />
      <FeaturesSection />
      <UpgradeSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>;
}