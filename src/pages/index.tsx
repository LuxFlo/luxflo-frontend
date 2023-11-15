import CallToAction from "@/components/CallToAction";
import FeaturesGroup from "@/components/FeaturesGroup";
import Footer from "@/components/Footer";
import HeroSectionTCA from "@/components/HeroSectionCTA";
import Navbar from "@/components/Navbar";
import TestimonialsGroup from "@/components/TestimonialsGroup";

export default function Home(props: any) {
  return (
    <>
      <div>
        <Navbar />
        <HeroSectionTCA />
        <CallToAction />
        <FeaturesGroup />
        <TestimonialsGroup />
        <Footer />
      </div>
    </>
  );
}
