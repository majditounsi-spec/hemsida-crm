import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Integrations from "@/components/landing/Integrations";
import AutomationDemo from "@/components/landing/AutomationDemo";
import Comparison from "@/components/landing/Comparison";
import SocialProof from "@/components/landing/SocialProof";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import ChatBot from "@/components/landing/ChatBot";
import ThemeToggle from "@/components/landing/ThemeToggle";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <AutomationDemo />
        <Comparison />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ChatBot />
      <ThemeToggle />
    </>
  );
}
