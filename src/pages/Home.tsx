import AboutSection from "@/components/AboutSection";
import FaqsSection from "@/components/FaqsSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-inter">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between pt-16 px-8 lg:pt-32 lg:px-16 sm:items-start">
        <HeroSection />
        <AboutSection />
        <Projects />
        <SkillsSection />
        <Interests />
        <FaqsSection />
      </main>
      <Footer />
    </div>
  );
}
