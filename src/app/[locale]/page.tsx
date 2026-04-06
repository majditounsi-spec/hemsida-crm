import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integrations from "@/components/landing/Integrations";
import SocialProof from "@/components/landing/SocialProof";
import Pricing from "@/components/landing/Pricing";
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
        <Integrations />
        <SocialProof />
        <Pricing />
      </main>
      <Footer />
      <ChatBot />
      <ThemeToggle />
    </>
  );
}
