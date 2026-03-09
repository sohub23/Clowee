import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ClarificationSection from "@/components/landing/ClarificationSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import InvestmentSection from "@/components/landing/InvestmentSection";
import EarningsSection from "@/components/landing/EarningsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import MonthlyProfitSection from "@/components/landing/MonthlyProfitSection";
import MachineSpecsSection from "@/components/landing/MachineSpecsSection";
import PartnersSection from "@/components/landing/PartnersSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ClarificationSection />
      <ProblemSection />
      <SolutionSection />
      <InvestmentSection />
      <EarningsSection />
      <BenefitsSection />
      <MonthlyProfitSection />
      <MachineSpecsSection />
      <PartnersSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
