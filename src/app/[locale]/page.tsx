import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";
import ChatBot from "@/components/landing/ChatBot";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}
