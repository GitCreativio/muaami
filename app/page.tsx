import AboutSection from "@/components/aboutSection";
import FindYourTasteSection from "@/components/findYourTaste";
import GetTheFactsSection from "@/components/getTheFacts";
import HeroSection from "@/components/hero";
import TestimonialSection from "@/components/testimonials";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <GetTheFactsSection />
      <FindYourTasteSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;
