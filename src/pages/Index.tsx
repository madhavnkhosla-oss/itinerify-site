import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Classes from "@/components/Classes";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Classes />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
