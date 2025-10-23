import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import FeaturesGlance from "@/components/home/FeaturesGlance";
import TrustSection from "@/components/home/TrustSection";
import ScrollAnimations from "@/components/home/ScrollAnimations";

const Home = () => {
  return (
    <main>
      <ScrollAnimations />
      <HeroSection />
      <SolutionsSection />
      <FeaturesGlance />
      <TrustSection />
    </main>
  );
};

export default Home;
