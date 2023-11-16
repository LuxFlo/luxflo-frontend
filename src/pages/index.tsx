import CallToActionSection from "@/components/CallToActionSection";
import FeaturesGroup from "@/components/FeaturesGroup";
import Footer from "@/components/Footer";
import FooterGroup from "@/components/FooterGroup";
import HeroSection from "@/components/HeroSection";
import HeroSectionTCA from "@/components/HeroSectionCTA";
import HeroSectionV3 from "@/components/HeroSectionV3";
import Navbar from "@/components/Navbar";
import TestimonialsGroup from "@/components/TestimonialsGroup";

export default function Home(props: any) {
  return (
    <>
      {/* <div> */}
      <Navbar />
      {/* <HeroSectionTCA /> */}
      {/* <HeroSection /> */}
      <HeroSectionV3 />
      <CallToActionSection />
      <FeaturesGroup />
      <TestimonialsGroup />
      <FooterGroup />
      {/* </div> */}
    </>
  );
}
