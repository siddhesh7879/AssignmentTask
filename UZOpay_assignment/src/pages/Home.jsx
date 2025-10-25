
import React, { useState } from 'react';
import HeroSection from "../components/HeroSection/HeroSection";
import HighlightSection from "../components/HighlightSection/HighlightSection";
import PayoutService from "../components/PayoutServiceCentric/PayoutService";
import BizSettleShowcase from "../components/BizSettleShowcase/BizSettleShowcase";
import FinanceLandingSection from "../components/FinanceLandingSection/FinanceLandingSection";
import PaymentExpertiseCarousel from "../components/PaymentExpertiesCarousel/PaymentExpertiseCarousel";
import PaymentIndustrySection from "../components/PaymentIndustrySection/PaymentIndustrySection"
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/FinanceFeatures/SectionHeader";
import ReasonsToPartner from "../components/FinanceFeatures/ReasonsToPartner";
import TestimonialCarousel from "../components/CarouselCard/newCardCarousel";

import HeroSection_1 from '../components/Herosection_1/HeroSection_1';


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <HighlightSection />
      <PayoutService />
      <BizSettleShowcase />
      <FinanceLandingSection />
      <SectionHeader />
      <ReasonsToPartner />
      <PaymentExpertiseCarousel />
      <PaymentIndustrySection />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
