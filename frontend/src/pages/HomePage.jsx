import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import HowWeWorkSection from "./home/HowWeWorkSection";
import ProjectsSection from "./home/ProjectsSection";
import StartHereSection from "./home/StartHereSection";
import LearningSection from "./home/LearningSection";
import ProcessSection from "./home/ProcessSection";
import PublicReposSection from "./home/PublicReposSection";
import PodsSection from "./home/PodsSection";
import JoinSection from "./home/JoinSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowWeWorkSection />
      <ProjectsSection />
      <StartHereSection />
      <LearningSection />
      <ProcessSection />
      <PublicReposSection />
      <PodsSection />
      <JoinSection />
    </main>
  );
}

export default HomePage;
