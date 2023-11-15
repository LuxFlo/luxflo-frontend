import CallToActionSection from "@/components/CallToActionSection";
import FeaturesGroup from "@/components/FeaturesGroup";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HeroSectionTCA from "@/components/HeroSectionCTA";
import Navbar from "@/components/Navbar";
import TestimonialsGroup from "@/components/TestimonialsGroup";

export default function Home(props: any) {
  return (
    <>
      <div>
        <Navbar />
        {/* <HeroSectionTCA /> */}
        <HeroSection />
        <CallToActionSection />
        <FeaturesGroup />
        <TestimonialsGroup />
        <Footer />
      </div>
    </>
  );
}
