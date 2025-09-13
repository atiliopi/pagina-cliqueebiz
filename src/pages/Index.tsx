
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Guarantee />
      <Urgency />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
