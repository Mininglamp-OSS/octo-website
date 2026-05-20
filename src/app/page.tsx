import LoadingPortal from "@/components/LoadingPortal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollNarrative from "@/components/ScrollNarrative";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import ScenariosSection from "@/components/ScenariosSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <LoadingPortal />
      <Navbar />
      <main>
        <HeroSection />
        <ScrollNarrative />
        <HowItWorks />
        <FeaturesGrid />
        <ScenariosSection />
        <OpenSourceSection />
        <CTASection />
      </main>
    </>
  );
}
