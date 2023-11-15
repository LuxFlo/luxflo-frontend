import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSectionTCA from "@/components/HeroSectionCTA";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home(props: any) {
  return (
    <>
      <div>
        <Navbar />
        <HeroSectionTCA />
        <CallToAction />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
